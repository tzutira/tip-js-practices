"use strict";

const totalTasksText = "20";
const completedTasksText = "11";

if (typeof totalTasksText !== "string" || typeof completedTasksText !== "string") {
  console.log("Ошибка: входные данные должны быть строками");
} else {
  const totalText = totalTasksText.trim();
  const completedText = completedTasksText.trim();

  if (totalText === "" || completedText === "") {
    console.log("Ошибка: введено пустое значение");
  } else {
    const totalTasks = Number(totalText);
    const completedTasks = Number(completedText);

    if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
      console.log("Ошибка: количество задач должно быть целым числом");
    } else if (
      totalTasks < 0 || totalTasks > 1000 ||
      completedTasks < 0 || completedTasks > totalTasks
    ) {
      console.log("Ошибка: количество задач вне допустимого диапазона");
    } else if (totalTasks === 0) {
      console.log("Задач пока нет");
    } else {
      const remainingTasks = totalTasks - completedTasks;
      const percentage = completedTasks / totalTasks * 100;
      let status;

      if (completedTasks === 0) {
        status = "Не начато";
      } else if (completedTasks === totalTasks) {
        status = "Завершено";
      } else {
        status = "В работе";
      }

      console.log(`Всего задач: ${totalTasks}`);
      console.log(`Выполнено: ${completedTasks}`);
      console.log(`Осталось: ${remainingTasks}`);
      console.log(`Прогресс: ${percentage.toFixed(1)}%`);
      console.log(`Статус: ${status}`);
    }
  }
}
