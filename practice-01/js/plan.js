"use strict";

const totalTasks = 20;
const completedTasks = 11;
const dailyLimit = 6;

if (
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  !Number.isInteger(dailyLimit)
) {
  console.log("Ошибка: все значения должны быть целыми числами");
} else if (
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks ||
  dailyLimit < 1 ||
  dailyLimit > 1000
) {
  console.log("Ошибка: значения вне допустимого диапазона");
} else {
  let remainingTasks = totalTasks - completedTasks;
  let day = 0;

  console.log(`Осталось задач: ${remainingTasks}`);

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
  }

  while (remainingTasks > 0) {
    day += 1;

    const tasksToday = Math.min(dailyLimit, remainingTasks);
    remainingTasks -= tasksToday;

    console.log(
      `День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`
    );
  }

  console.log(`Потребуется дней: ${day}`);
}