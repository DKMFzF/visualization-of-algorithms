# Documentation Visualization Of Algorithms

[Докумнтация на русском языке](DOCS.ru.md)

This short landing describes a brief documentation of the project structure

## Repository structure
```src/
  components/
    └── ...modules file...
  images/
    └── ...
  pages/
    └── ...use css file...
  styles/
    └── ...global style...
  scripts/
    └── ...index.js file...
  vendor/
    └── ...global file...
  index.html
``` 

## @module init project

Этот файл описывает инициализацию основных компонентов проекта, включая WebGL, анимации GSAP и функциональность FullPage.js. Он обрабатывает манипуляции с DOM, обработку событий, рендеринг WebGL и анимации, связанные с прокруткой.

- **WebGL**  
  Настройка сцены WebGL и объектов, включая создание геометрии, материалов и освещения.

- **GSAP Animations**  
  Использование библиотеки GSAP для анимации элементов на странице, таких как заголовки, подзаголовки и другие элементы интерфейса.

- **FullPage.js**  
  Инициализация FullPage.js для создания прокручиваемых секций, а также управление анимациями при переходе между секциями.

### Анимационные функции

- **initAimaVectorElems**  
  Функция для инициализации анимаций для фоновый элементов.

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
  Настройки анимации для фоновый элементов владельца.

- **arrAnimationOwnerElementBg**  
  Массив элементов для анимаций фона.

- **confitOwnerContentElement**  
  Конфигурация для анимаций контента владельца.

- **arrAnimationOwnerElementContent**  
  Массив элементов для анимаций контента. 

### Инициализация и обработка событий

- **Resize Event Listener**  
  Обработчик события изменения размера окна для обновления камеры и рендерера.

- **Scroll Event Listener**  
  Обработчик события прокрутки для обновления секций и активации анимаций.

- **Cursor Movement Event Listener**  
  Обработчик события движения курсора для создания эффекта параллакса.

- **Animation Loop**  
  Цикл анимации, который обрабатывает движение камеры, вращение мешей и рендеринг.

### Инициализация FullPage

- **FullPage Initialization**  
  Настройка FullPage.js для создания прокручиваемых секций и управления анимациями при переходе между ними.


- **configShowOpacity**  
Template for animation template: the appearance of an element

## @module animation initialization
this file describes the animation initialization functions in the entire section, both the background elements and the content area of the section

- **initAimaVectorElems**  
  A function for initializing animations for background elements

- **initAnimOpacityElems**  
  A function for initializing animations for content elements

## @module animation template module
This code block is an animation module that contains several templates for customizing the animation of elements on a web page. Each template defines animation parameters such as duration, delay, and direction of movement. 

- **configAppElemDownY**  
  Animation template: moving an element up, followed by its appearance
- **configAppBg**  
  Animation template taking into account the Y vector, the animation will lift the element up

- **configShowOpacity**  
  Template for animation template: the appearance of an element


## Find out the detailed documentation
In order to read the detailed documentation of the project:
1. Open the terminal
2. Follow all the steps from the file README.md
3. Enter the command ```./node_modules/.bin/jsdoc 'path to the file where you want to read the documentation'```
4. Go to the newly generated ```out/``` folder
5. Run the file index.html via OpenServer