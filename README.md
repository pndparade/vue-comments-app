# Пет-проект на Vue.js с виджетом комментариев

Разработка приложения для более подробного знакомства с фреймворком Vue.js.

## Техническое задание

У вас есть страница с постом в Figma. Вам необходимо сверстать всю страницу и особенно обратить внимание на блок с комментариями.

Когда вы вводите какое-то сообщение в input и нажимаете кнопку Post или Enter на клавиатуре, необходимо добавлять новый комментарий. При повторном добавлении комментарий добавляется ниже предыдущего. После отправки комментария поле input необходимо очищать.

За комментарий можно голосовать при клике на иконку с пальцем или снимать голос при повторном клике.

При клике на количество ответов (иконка сообщения около пальца) открывается небольшой input шириной с комментарий, на который мы отвечаем и при клике на Enter добавляется ответ на комментарий.

Всего уровней комментариев может быть 3 (как в макете). Если пользователь хочет ответить на третьем уровне вложенности, то четвертый уровень НЕ добавляется. Добавляется так же на третий уровень, просто ниже.

Чтобы была возможность оставить комментарий, вам необходимо проверить, залогинен ли пользователь, при отправке формы. Если нет - редиректить пользователя на страницу входа или регистрации.

Механизм регистрации и входа можно сделать с помощью Firebase. После входа ноебходимо редиректить пользователя на страницу с постом.

При добавлении комментария вам необходимо:

1. Отобразить имя или email пользователя
2. Дату добавления
3. Сам текст

Вместо аватарки можно показывать первую букву имени или email пользователя.

Сами комментарии так же необходимо хранить в Firebase, чтобы при обновлении страницы они показывались и можно было дальше с ними работать. Не забудьте, что так же вы должны в базе хранить количество лайков. А вот количество ответов необходимо считать на стороне frontend.

TODO

1. scroll to element при открытии комментария для ответа
