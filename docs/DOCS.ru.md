# Документация по визуализации алгоритмов

Эта короткая статья описывает краткую документацию по структуре проекта

## Структура репозитория
```src/
  components/
    └── ...модули проекта...
  images/
    └── ...
  pages/
    └── ...использованные css файлы...
  styles/
    └── ...глобальные стиле...
  scripts/
    └── ...index.js файл...
  vendor/
    └── ...глобальные файлы...
  index.html
``` 

## @модуль инициализации проекта

Этот файл описывает инициализацию основных компонентов проекта, включая WebGL, анимации GSAP и функциональность FullPage.js. Он обрабатывает манипуляции с DOM, обработку событий, рендеринг WebGL и анимации, связанные с прокруткой.

- **WebGL**  
  Настройка сцены WebGL и объектов, включая создание геометрии, материалов и освещения.

- **GSAP-анимации**  
  Использование библиотеки GSAP для анимации элементов на странице, таких как заголовки, подзаголовки и другие элементы интерфейса.

- **FullPage.js**  
  Инициализация FullPage.js для создания прокручиваемых секций, а также управление анимацией при переходе между секциями.

### Функции анимации

- **initAimaVectorElems**  
  Функция для инициализации анимаций для фоновых элементов.

- **initAnimOpacityElems**  
  Функция для инициализации анимаций для контентных элементов.

### Элементы DOM

- **mainTitle**  
  Заголовок главной секции.

- **mainSubtitle**  
  Подзаголовок главной секции.

- **headerLink**  
  Ссылки в заголовке.

- **bgMain**  
  Основной контейнер для фона.

- **mainContainer**  
  Контейнер для содержимого главной секции.

- **canvas**  
  Элемент canvas для рендеринга WebGL.

- **textStart, textMid, textEnd**  
  Элементы текста для анимаций фона.

- **containerOwnerDiscripter, titleOwner, discriptionOwner, addressOwner**  
  Элементы, относящиеся к описанию владельца.

- **penguin, penguinDialog**  
  Элементы пингвина и его диалога.

### Параметры анимации

- **animationTimeHeaderLink**  
  Длительность анимации для ссылок в заголовке.

- **animationTimeMainTitle**  
  Длительность анимации для главного заголовка.

- **delayOwnerAnimation**  
  Задержка для анимаций владельца.

- **animationOwnerBgElement**  
  Настройки анимации для фоновых элементов владельца.

- **arrAnimationOwnerElementBg**  
  Массив элементов для анимаций фона.

- **confitOwnerContentElement**  
  Конфигурация для анимаций контента владельца.

- **arrAnimationOwnerElementContent**  
  Массив элементов для анимации контента. 

### Инициализация и обработка событий

- **Обработчик события изменения размера окна**  
  Обработчик события изменения размера окна для обновления камеры и рендерера.

- **Обработчик события прокрутки**  
  Обработчик события прокрутки для обновления секций и активации анимаций.

- **Обработчик события перемещения курсора**  
  Обработчик события движения курсора для создания эффекта параллакса.

- **Цикл анимации**  
  Цикл анимации, который обрабатывает движение камеры, вращение мешей и рендеринг.

### Инициализация FullPage

- **Инициализация FullPage**  
  Настройка FullPage.js для создания прокручиваемых секций и управления анимацией при переходе между ними.


- **configShowOpacity**  
Шаблон для анимации: внешний вид элемента

## @модуль инициализации анимации
этот файл описывает функции инициализации анимации во всём разделе, как для фоновых элементов, так и для области содержимого раздела

- **initAimaVectorElems**  
  Функция для инициализации анимации фоновых элементов

- **initAnimOpacityElems**  
  Функция для инициализации анимации элементов содержимого

## @модуль шаблона анимации
Этот блок кода представляет собой модуль анимации, который содержит несколько шаблонов для настройки анимации элементов на веб-странице. Каждый шаблон определяет параметры анимации, такие как продолжительность, задержка и направление движения. 

- **configAppElemDownY**  
  Шаблон анимации: перемещение элемента вверх с последующим появлением
- **configAppBg**  
  Шаблон анимации с учётом вектора Y, анимация поднимет элемент вверх

- **configShowOpacity**  
  Шаблон для анимации: внешний вид элемента


## Ознакомьтесь с подробной документацией
Чтобы ознакомиться с подробной документацией по проекту, выполните следующие действия: 
1. Откройте терминал
2. Выполните все шаги из файла README.md
3. Введите команду ```./node_modules/.bin/jsdoc 'путь к файлу, в котором вы хотите прочитать документацию'```
4. Перейдите в только что созданную папку ```out/```
5. Запустите файл index.html через OpenServer