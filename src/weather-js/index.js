import { refs } from './refs';
import { onSubmitSearchForm } from './onSubmitSearchForm';
import { successGetCurrentPosition } from './geolocation';
import { onClickFiveDays, onClickToday } from './weather-actions';

refs.fiveDaysBtn.addEventListener('click', onClickFiveDays);
refs.todayBtn.addEventListener('click', onClickToday);

refs.searchForm.addEventListener('submit', onSubmitSearchForm);

navigator.geolocation.getCurrentPosition(successGetCurrentPosition);
