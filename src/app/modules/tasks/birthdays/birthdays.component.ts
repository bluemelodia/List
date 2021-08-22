import { 
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, finalize, map, take, takeUntil } from 'rxjs/operators';

import { BirthdayService } from '../../../services/birthday.service';
import { CalendarService } from '../../../services/calendar.service';
import { DialogService } from '../../../services/dialog.service';
import { AddBirthday } from '../../../types/birthday/birthday.types';
import { CalendarType } from '../../../types/calendar/calendar.types';
import { Calendar } from '../../../types/calendar/calendar-response.types';
import { Dialog } from '../../../types/dialog/dialog.types';
import { ResponseStatus } from '../../../types/response.types';

@Component({
  selector: 'task-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BirthdaysComponent implements OnInit, OnDestroy {
  private birthdays$ = new Subject<AddBirthday[]>();
  public birthdayList$ = this.birthdays$.asObservable();
  public isLoading = false;

  private ngUnsubscribe$ = new Subject<void>();

  @HostBinding('class.hide-scrollbar') public css = true; 

  constructor(
    private birthdayService: BirthdayService,
    private dialogService: DialogService,
  ) { }

  public ngOnInit(): void {
    console.info("🍰 ✅ BirthdaysComponent init");
    this.addSubscriptions();
    this.getBirthdays();
  }

  private addSubscriptions() {
    this.birthdayService.birthdaysListChanged$
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe((numChanges: number) => {
        if (numChanges) {
          console.info("🍰 ✅ BirthdaysComponent ---> addSubscriptions, birthdays list refreshed, retrieve new list.");
          this.getBirthdays(true);
        }
      });
  }

  /**
   * Fetch the latest list of birthdays. Refresh should be set to true if
   * we're fetching the birthdays list as a result of a patch - otherwise,
   * it should be false.
   */
  public getBirthdays(refresh = false): void {
    this.isLoading = true;
    this.birthdayService.getBirthdays()
      .pipe(
        catchError((err) => {
            this.dialogService.showResponseStatusDialog(ResponseStatus.ERROR, Dialog.GetBirthday);
            return of(null);
        }),
        finalize(() => {
          this.isLoading = false;
        }),
        take(1),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe((birthdays: AddBirthday[]) => {
        console.info("🍰 ✅ BirthdaysComponent ---> getBirthdays, received birthdays: ", birthdays);
        this.birthdays$.next(birthdays);
        /**
        * Send the results to the birthday service, which
        * will update the server with any lunar birthdays
        * that need to be added.
        */
        if (!refresh) {
          this.birthdayService.syncBirthdays(birthdays);
        }
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
