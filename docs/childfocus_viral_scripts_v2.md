# ChildFocus — вирусные 3D-мультики v2

## Промпт-инженерия по референсам + рост в Instagram (@childfocusai)

Документ полностью переписывает 10 сценариев коротких вертикальных 3D-мультиков (9:16, 15 секунд) для продвижения приложения ChildFocus. Старая версия лежит в `docs/prompt_video_mult_10_scenarios.md` (ветка `cursor/ten-viral-cartoon-scripts-723f`) — она использовалась как основа: сюжеты, палитры и герои сохранены, потому что они уже хорошо работают на бренд и не повторяются между собой. Переписан сам **инженерный слой промптов** (по паттернам из трёх референсов) и добавлен **слой роста** для Instagram.

---

## 0. Роль

Для этой работы я взял на себя роль **креативного директора коротких форматов + промпт-инженера генеративного видео (Seedance 2.0 / GPT Image 2) + стратега роста Reels**. Это комбинация трёх компетенций, которые нужны одновременно: понимание драматургии 15-секундной истории, точный технический язык, на котором «думает» видео-модель, и знание того, что заставляет Instagram показывать Reels новым людям и конвертировать просмотр в подписку.

---

## 1. Что изучено

| № | Источник | Что за пример | Какую технику демонстрирует |
|---|---|---|---|
| 1 | [teletype.in/@viviannru/HxT9L9MaoHS](https://teletype.in/@viviannru/HxT9L9MaoHS#cFqX) | Мультик «паспортный контроль» (девушка без макияжа) | Раскадровка 4×4 в GPT Image 2 → анимация раскадровки в Seedance. Жёсткая сетка панелей с номерами только как служебная метка, `ACTIVE REFERENCES`, `POSITIVE LOCKS` в конце как компактный свод правил. |
| 2 | [teletype.in/@viviannru/mpw93l-EuUf](https://teletype.in/@viviannru/mpw93l-EuUf) | Промпт на день рождения (лев, шампанское, свеча) | Прямая генерация видео с карты персонажа, без раскадровки. Полный набор разделов: `SCENE CONTEXT`, `ACTIVE REFERENCES`, `LOCATION MAP`, `FIRST FRAME / BLOCKING`, `FORMAT MODE`, `OPTICS`, `CAMERA`, `ACTION` с точными таймкодами и **единым «триггер-кадром»**, где несколько эффектов происходят одновременно, `PERFORMANCE`, `PHYSICS`, `LIGHTING`, `WARDROBE`, `AUDIO`, `STYLE`, `OUTPUT SETTINGS`, `POSITIVE LOCKS`. |
| 3 | [teletype.in/@viviannru/bzEkPKpAjtH](https://teletype.in/@viviannru/bzEkPKpAjtH) | Мультик «мама» (ребёнок бежит к матери и превращается из взрослого в ребёнка) | Карта персонажа строится отдельным промптом («3D animated feature-film character... Pixar/DreamWorks... preserve real likeness») и переиспользуется. Видео — «timed multishot» с жёсткими `HARD CUT` по секундам, явный запрет текста в кадре, аудио только SFX без музыки. |

Общий вывод по всем трём источникам: хороший Seedance/GPT Image 2 промпт — это не абзац прозы, а **инженерная спецификация**, где у каждого раздела своя ответственность и они не перекрываются. Именно этой архитектуры не хватало в старой версии сценариев ChildFocus — там разделы были, но смешаны по-другому (например, свет/цвет/локация склеены в один блок, объектив камеры не был указан вообще, не было единого «триггер-кадра» для эмоционального перелома).

---

## 2. Новая архитектура промпта (шаблон v2)

Ниже — блоки, которые теперь есть в каждом видео-промпте, в порядке, как в референсах, и зачем каждый нужен.

| Раздел | Назначение |
|---|---|
| `SCENE CONTEXT` | Один абзац: кто, где, что происходит, чем заканчивается. Модель должна понять историю до того, как читать детали. |
| `ACTIVE REFERENCES` | Явная привязка `@image1` (и что именно из него берётся: лицо, одежда, пропорции) — без этого модель может «доизобрести» персонажа. |
| `STORYBOARD NUMBER RULE` | Отдельно оговаривается, что номера панелей — служебные пометки, а не часть мира. |
| `LOCATION MAP` | Локация разложена на передний / средний / задний план и источник света — вместо одного абзаца прозы. Это то, чего не было в v1. |
| `FIRST FRAME` | Что видно в самом первом кадре — фиксирует стартовую точку, чтобы не «плавала» композиция. |
| `FORMAT MODE` | Один длинный дубль с внутренними `HARD CUT` по секундам — не слайд-шоу из 16 панелей. |
| `OPTICS` | Угол поля зрения (FOV) и тип плана для каждого сегмента — раньше план был словесным («крупный», «средний»), теперь ещё и числовым, как в примерах. |
| `CAMERA` | Поведение камеры (статика/трекинг/от третьего лица), кто мотивирует движение. |
| `ACTION` | Таймлайн по секундам + **TRIGGER FRAME** — секунда, где символ-предмет физически меняется (падает, стирается, рвётся) — единый момент, к которому «пришиты» реакции обоих персонажей. Это прямое применение приёма «SINGLE SIMULTANEOUS TRIGGER FRAME» из примера 2, только не для спецэффекта, а для эмоционального перелома истории. |
| `PERFORMANCE` | Что именно играют лица — раньше это было частью «EMOTIONAL RULE», теперь отдельный раздел, как в примерах. |
| `PHYSICS` | Как ведёт себя предмет-символ (мятая лента не расправляется, порванная лямка не срастается) — отдельный раздел вместо упоминания внутри «CONTINUITY». |
| `WARDROBE` | Гардероб персонажей вынесен из общего «CHARACTER CONTINUITY» в отдельный блок. |
| `LIGHTING` | Свет и палитра вместе, с явным запретом на «неправильный» свет. |
| `AUDIO` | То же, что в v1, без изменений по духу — только SFX, без музыки со словами и без слогана. |
| `STYLE` | Явное описание визуального стиля и явный запрет копировать чужую студию. |
| `OUTPUT SETTINGS` | Финальная строка: соотношение сторон, длительность, скорость — как «чек» перед рендером. |
| `POSITIVE LOCKS` | Свод самого важного одним абзацем в конце — то, что нельзя менять ни при каких обстоятельствах. Раньше в v1 был только `NEGATIVE CONSTRAINTS`; теперь есть оба — сначала что закреплено, потом что запрещено. |

Раскадровка (`Prompt A`) сохраняет сетку 4×4 из 16 панелей (это уже отработанный для ChildFocus приём из примера 3), но каждая локация теперь тоже описана через `LOCATION MAP`, а не одним абзацем.

---

## 3. Общие правила (актуальная редакция)

Эти правила зашиты в каждый промпт ниже. Раздел — для контроля, не для копирования.

### NO ON-SCREEN TEXT RULE
В кадре запрещён любой читаемый текст: субтитры, титры, надписи, вывески, номера, вотермарки.

### CONTROLLED PHONE UI TEXT EXCEPTION
Читаемый текст разрешён только на экране телефона, только по белому списку: `ChildFocus`, имя ребёнка, `Task`, `Start`. Если модель не рисует их чисто — заменить иконками.

### STORYBOARD NUMBER RULE
Номера, рамки и гаттеры раскадровки — служебные пометки. Их нельзя рендерить в видео и на них нельзя реагировать.

### TRIGGER FRAME RULE (новое)
У каждого сценария есть ровно один кадр-триггер — секунда, когда предмет-символ физически меняется (падает / рвётся / стирается / гнётся). До этой секунды — «публичная маска» ребёнка, после — снятие маски. Все эффекты в этом кадре синхронны, без задержки между ними.

### Палитра приложения
Из `lib/theme/app_theme.dart`, зелёно-мятная, не синяя: `#00985E` primary green, `#00CE7F` bright, `#007A4D` deep, `#FFFFFF` / `#F5F5F5` / `#F3F3F3` / `#F2F2F7`, мятные карточки `#E5F7F0` / `#EBF9F3`, текст `#1A1A1A` / `#333333` / `#666666`, разделители `#E8E8E8` / `#E0E0E0`.

### Герои
- **Sunny** — девочка 5–7 лет, каштановые волосы в двух низких хвостиках, джинсовка, бирюзовый свитер, синие джинсы, белые кроссовки.
- **Truey** — мальчик 6–8 лет, крупные карие глаза, тёплые каштановые волосы уложены вверх, оливковая толстовка на молнии, тёмно-серая футболка, брюки-джоггеры цвета тауп, белые кроссовки с зелёными вставками.
- **Crafty** — мальчик 6–8 лет, круглые очки, каштановые волосы зачёсаны вверх, тёмно-зелёная толстовка с большой буквой «M», коричневые вельветовые брюки, белые кроссовки, коричневый кожаный рюкзак.

Референс героя — единственный источник правды для лица, причёски, одежды и пропорций. Мелкие надписи упрощаются до одной буквы, бренды убираются.

### Тон
Родитель не злодей: уставший, любящий, отвлечённый. Финал даёт надежду и один маленький шаг, а не волшебную таблетку. Предмет-символ никогда не чинится сам собой.

### Настройки Syntx.ai
Раскадровка: Images → GPT Image 2, 9:16, High, 4K. Видео: Video → Seedance 2.0, Pro, 9:16, 15 сек, 480–720p для теста, 1080p для финала. Kling 3.0 — запасной вариант, если эмоции держатся хуже.

---

## 4. Карты персонажей (Prompt 0) — генерируются один раз

Раньше в v1 сценарии ссылались на «референс героя», но не было промпта, как этот референс собрать. В примере 1 (день рождения) карта персонажа — три вертикальные панели (лицо, тело без головы, тело сзади с головой). Ниже — адаптация этого приёма для трёх стилизованных 3D-героев ChildFocus: не фотореализм, а «кино-3D» уровня фильма, чтобы карта потом одинаково хорошо ложилась и в раскадровку, и в видео.

Сгенерировать один раз на каждого героя, сохранить как `@sunny_ref`, `@truey_ref`, `@crafty_ref`, использовать во всех сценариях ниже.

### Prompt 0.1 — карта персонажа Sunny (GPT Image 2)

```text
Create one single character reference sheet on a neutral light-gray background, divided into three equal vertical panels, 9:16 overall, high detail, 4K.

STYLE: premium stylized 3D animated feature-film character design, in the spirit of modern high-end animated films — soft rounded facial forms, large expressive eyes, warm cinematic skin shading, detailed hair and fabric texture rendering. Fully 3D-rendered, never photoreal human, never a real photo, never 2D flat illustration. Original design, do not imitate any named studio or existing franchise character.

CHARACTER: Sunny, a girl approximately 5–7 years old. Chestnut hair in two low ponytails, warm brown eyes, soft round face, friendly open expression. Denim jacket over a turquoise sweater, blue jeans, clean white sneakers with no logos or lettering. No glasses, no backpack, no accessories.

LEFT PANEL: full-body front view, standing straight, arms relaxed at her sides, feet shoulder-width apart, neutral standing pose, full outfit visible, head and face included, looking at camera, calm neutral expression.

MIDDLE PANEL: full-body back view, same standing pose, same outfit, showing the back of the hair and the ponytails clearly, head included.

RIGHT PANEL: close-up bust portrait, face front-facing, looking directly at camera, calm neutral expression, shoulders visible, soft even studio lighting, maximum facial detail — eye shape and color, eyebrow shape, nose, mouth, hairline.

GENERAL REQUIREMENTS: identical face, hair, outfit, and proportions across all three panels, consistent scale, consistent soft neutral lighting, clean plain background, thin clean vertical dividers between panels, no shadows on the background, no text, no labels, no watermark.
```

### Prompt 0.2 — карта персонажа Truey (GPT Image 2)

```text
Create one single character reference sheet on a neutral light-gray background, divided into three equal vertical panels, 9:16 overall, high detail, 4K.

STYLE: premium stylized 3D animated feature-film character design, in the spirit of modern high-end animated films — soft rounded facial forms, large expressive eyes, warm cinematic skin shading, detailed hair and fabric texture rendering. Fully 3D-rendered, never photoreal human, never a real photo, never 2D flat illustration. Original design, do not imitate any named studio or existing franchise character.

CHARACTER: Truey, a boy approximately 6–8 years old. Large brown eyes, warm brown hair styled upward, soft round face, gentle sincere expression. Olive-green zip hoodie over a dark charcoal T-shirt, taupe jogger trousers, white sneakers with green accents and no logos or lettering. No glasses, no backpack, no accessories.

LEFT PANEL: full-body front view, standing straight, arms relaxed at his sides, feet shoulder-width apart, neutral standing pose, full outfit visible, head and face included, looking at camera, calm neutral expression.

MIDDLE PANEL: full-body back view, same standing pose, same outfit, showing the back of the hairstyle clearly, head included.

RIGHT PANEL: close-up bust portrait, face front-facing, looking directly at camera, calm neutral expression, shoulders visible, soft even studio lighting, maximum facial detail — eye shape and color, eyebrow shape, nose, mouth, hairline.

GENERAL REQUIREMENTS: identical face, hair, outfit, and proportions across all three panels, consistent scale, consistent soft neutral lighting, clean plain background, thin clean vertical dividers between panels, no shadows on the background, no text, no labels, no watermark.
```

### Prompt 0.3 — карта персонажа Crafty (GPT Image 2)

```text
Create one single character reference sheet on a neutral light-gray background, divided into three equal vertical panels, 9:16 overall, high detail, 4K.

STYLE: premium stylized 3D animated feature-film character design, in the spirit of modern high-end animated films — soft rounded facial forms, large expressive eyes, warm cinematic skin shading, detailed hair and fabric texture rendering. Fully 3D-rendered, never photoreal human, never a real photo, never 2D flat illustration. Original design, do not imitate any named studio or existing franchise character.

CHARACTER: Crafty, a boy approximately 6–8 years old, wearing round glasses. Chestnut hair brushed upward, soft round face, thoughtful curious expression. Dark green hoodie with one large letter "M" on the chest, brown corduroy trousers, white sneakers with no logos or other lettering, a brown leather backpack with adjustable straps. No other accessories.

LEFT PANEL: full-body front view, standing straight, arms relaxed at his sides, feet shoulder-width apart, backpack on both shoulders, neutral standing pose, full outfit visible, head and face included, looking at camera, calm neutral expression.

MIDDLE PANEL: full-body back view, same standing pose, same outfit, backpack clearly visible from behind, showing the back of the hairstyle, head included.

RIGHT PANEL: close-up bust portrait, face front-facing, looking directly at camera through the round glasses, calm neutral expression, shoulders visible, soft even studio lighting, maximum facial detail — eye shape and color behind the lenses, eyebrow shape, nose, mouth, hairline.

GENERAL REQUIREMENTS: identical face, glasses, hair, outfit, and proportions across all three panels, consistent scale, consistent soft neutral lighting, clean plain background, thin clean vertical dividers between panels, no shadows on the background, no text except the single letter "M" on the hoodie, no watermark.
```

---

## 5. Instagram growth-kit для @childfocusai

Это применяется одинаково к каждому из 10 сценариев. AI-рендер остаётся чистым (без текста, без музыки — см. `NO ON-SCREEN TEXT RULE`), но **после экспорта** в монтажке (CapCut/аналог) добавляются два элемента: оверлей-хук первых 1.5 секунд и трендовый звук под немой SFX-рендер. Это стандартная механика роста Reels, она не противоречит правилам чистоты AI-рендера.

### 5.1 Почему хук решает всё
Instagram Reels в первую очередь измеряет удержание в первые 1–2 секунды и досмотр до конца. Все 10 сценариев уже устроены так, что первый кадр — это сам конфликт (лента прячется, закладка вынимается, шоколадка возвращается на полку), без разгона — это правильно, это сохраняется. Дополнительно перед публикацией накладывается **оверлей-хук** — 3–6 слов крупным контрастным текстом, который проговаривает то, что видно, но ещё резче формулирует вопрос. Он не рендерится AI-моделью, добавляется вручную.

### 5.2 Формула подписи (caption)
Каждая подпись строится по одной и той же формуле, независимо от сценария:
1. Одна строка — что произошло, без объяснений (хук).
2. Одна строка — почему это узнаваемо (без обвинения родителя).
3. Одна строка — мягкий вывод/рефрейм.
4. Жирная строка бренда: **ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
5. Прямой, но некричащий CTA на подписку: `Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.`
6. Save/share-триггер отдельной строкой: `Сохраните это себе — пригодится в свой момент усталости.` или `Отправьте тому родителю, который сейчас вымотан.`

### 5.3 Хэштег-стратегия
Смесь из трёх слоёв в каждом посте: широкие охватные (`#parenting`, `#momlife`), нишевые про осознанное родительство (`#mindfulparenting`, `#gentleparenting`) и брендовый (`#ChildFocus`, `#childfocusai`). Полный список — под каждым сценарием.

### 5.4 Закреплённый первый комментарий
Под каждым сценарием — готовый вопрос для первого (закреплённого) комментария от имени аккаунта. Вопросы провоцируют комментарии-признания («и у нас так было») — это самый сильный сигнал для алгоритма после досмотра.

### 5.5 Обложка (cover frame)
Обложкой Reels всегда ставится кадр **до** триггер-кадра — момент, где предмет-символ ещё цел и виден крупно (лента, закладка, росток, билет). Это создаёт вопрос у человека, скроллящего профиль: почему предмет так важен.

### 5.6 Публикационный ритм
Публиковать не более одного сценария в 2–3 дня — большая часть аудитории у @childfocusai одна и та же, слишком частая публикация «размывает» эмоциональный вес каждой истории. Разные сценарии (герой/локация/предмет) специально чередуются, чтобы лента профиля не выглядела повторяющейся.

---

## 6. Оглавление сценариев

| № | Название | Герой | Локация | Предмет-символ | Триггер-кадр |
|---|---|---|---|---|---|
| 1 | Второе место | Truey | школьный спортзал | серебряная лента | лента выпадает из кроссовка |
| 2 | Ещё минуточку | Sunny | ночная прачечная | самодельная закладка | закладка вынимается из книги |
| 3 | Он стёр себя | Crafty | детская поликлиника | семейный рисунок | последний штрих ластика стирает фигурку |
| 4 | Плитка шоколада | Sunny | ночной супермаркет | открытка для больной подруги | открытка убирается в карман у кассы |
| 5 | Он просто боится | Truey | крытый бассейн | плавательные очки | линза очков наполняется водой под водой |
| 6 | Билет на первый круг | Sunny | каток | самодельный билет | билет падает из кармана на пол |
| 7 | Он хотел сказать сам | Truey | барбершоп | вырезка с причёской | сложенная вырезка падает в стриженые волосы |
| 8 | Кривой росток | Sunny | школьная теплица | росток в стаканчике | рука отдёргивается от второго стаканчика |
| 9 | Порванная лямка | Crafty | платформа метро | лямка рюкзака | шов лямки окончательно рвётся |
| 10 | Сердце в чемодане | Crafty | выход на посадку | бумажное сердечко | молния чемодана закрывается над сердечком |

Общие негативные ограничения для всех десяти (не повторяются в каждом промпте отдельно, но действуют везде): без других героев из тройки, без тёплого вечернего света квартиры (кроме случаев, где он и так не используется), без телефона до финальной сцены, без злости родителя, без слёз до триггер-кадра, без волшебного восстановления предмета-символа, без лишних пальцев/деформированных рук, без номеров раскадровки в кадре.

---
---

# Сценарий 1 — «Второе место»

**Герой:** Truey · **Локация:** школьный спортзал после соревнования · **Предмет-символ:** серебряная лента · **Хук:** детские руки складывают ленту всё мельче и заталкивают её в кроссовок

## Концепт и виральный угол
Truey занял второе место. Папа искренне радуется победителю и почти не смотрит на ленту в руке сына. Truey складывает ленту и прячет в кроссовок. Когда зал пустеет, лента выпадает на пол — и папа впервые смотрит на неё как на что-то важное.

Growth-угол: хук читается без звука за 1 секунду («ребёнок прячет собственную награду») — это чистый паттерн-прерыватель для скролла. Тема «мы хвалим только победу» откликается у родителей спортивных детей — широкая, но конкретная аудитория.

## Оверлей-хук (для монтажа, 0–1.5 сек)
`Он занял второе место. И спрятал ленту.`

## Палитра
Пол спортзала `#D9C7A3`, холодный верхний свет `#E8EEF2`, разметка `#2E6E8E`, стены/маты `#C8CCC6`, тени `#3A3630`, лента `#B9C2C9` с тесьмой `#4A6FA5`, чужая золотая медаль `#D4AF37`, экран приложения `#FFFFFF / #E5F7F0 / #00985E / #00CE7F / #1A1A1A`.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @sunny_ref-style workflow but with @truey_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "Second Place"

LOCATION MAP: FOREGROUND — a polished wooden gym floor with court markings, a low bench near the wall. MIDGROUND — families and children still in sports uniforms, a scoring area. BACKGROUND — folded bleachers, high windows. Light source: cool daylight from high windows, half the ceiling lights already switched off by the final panels.

CHARACTER REFERENCE: @truey_ref is the only source of truth for Truey's face, hair, and proportions. TRUEY: boy 6–8 years old, large brown eyes, warm brown hair styled upward, olive-green zip hoodie over a dark charcoal T-shirt, taupe joggers, white sneakers with green accents, no logos. His performance is subtle: pride, restrained disappointment, private sadness, cautious relief — never theatrical.

FATHER: loving, energetic, slightly tired man, 34–40, short dark hair, light stubble, slate-gray zip jacket, white T-shirt, dark jeans, gray sneakers, sports bag. Identical in every panel. Warm and enthusiastic, never angry or mocking.

STYLE: premium stylized 3D animated feature-film quality, expressive but restrained faces, soft realistic skin, detailed fabric, cinematic depth of field, clean gym-floor reflections. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: cool daylight #E8EEF2, gym floor #D9C7A3, court markings #2E6E8E, walls/mats #C8CCC6, deep shadows #3A3630, ribbon #B9C2C9 with tail #4A6FA5, other child's medal #D4AF37. No warm golden light, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, small hands folding the silver-blue ribbon into a tight square, blurred celebration behind. Hook.
PANEL 2 — wide shot, finish area, Truey holds the ribbon, another child holds a gold medal nearby.
PANEL 3 — the father arrives with open arms and real joy, aimed at the winning child and family.
PANEL 4 — Truey lifts the ribbon slightly; the father gives a quick affectionate head-pat while still looking away. No phone anywhere.
PANEL 5 — other families celebrate the winner; Truey lowers the ribbon behind his back.
PANEL 6 — close-up of the ribbon behind his back, already creased.
PANEL 7 — Truey's face among other children, a small brave smile that doesn't reach his eyes. No tears yet.
PANEL 8 — Truey sits alone on the bench, quietly pushes the folded ribbon into his sneaker.
PANEL 9 — wide shot, the hall empties, half the lights go off, cold window light dominates.
PANEL 10 — Truey puts the sneaker back on, ribbon crushed further inside, a tiny wince.
PANEL 11 — TRIGGER: he stands to leave and the crumpled ribbon slips out of the shoe onto the floor. Tight close-up on the ribbon.
PANEL 12 — the father sees the ribbon, understands, stops packing his bag. No anger, quiet realization.
PANEL 13 — the father kneels, picks up the ribbon, carefully unfolds it; creases stay visible.
PANEL 14 — close-up two-shot at eye level, Truey's public smile finally disappears, eyes shining.
PANEL 15 — the father's phone held low, only after eye contact. Clean ChildFocus UI, white/mint #E5F7F0/#00985E/#00CE7F/#1A1A1A. Only words: "ChildFocus", "Truey", "Task", "Start". He taps "Start". If unclean, use icons.
PANEL 16 — phone away, father and son sit on the bench in the empty hall, the creased ribbon open between them.

CONTINUITY: one single ribbon throughout, intact → folded → crumpled → unfolded with permanent creases. Never replace, duplicate, or flatten it perfectly. Truey's and the father's faces, clothes, and scale stay consistent.

TEXT RESTRICTIONS: no captions, banners, scoreboards, jersey numbers, watermarks anywhere. Only exception: panel 15 phone screen whitelist above.

NEGATIVE: no Sunny, no Crafty, no apartment, no phone before panel 15, no parental anger, no tears before panel 14, no trophy replacing the ribbon, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: After a school competition, Truey finishes second. His father is genuinely happy, but his excitement belongs to the winning child. Truey keeps a brave smile in front of people and hides his silver ribbon inside his sneaker. When the hall empties, the crumpled ribbon falls out. His father sees it, kneels to his eye level, unfolds it, and finally gives him full attention.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Truey's face, hair, hoodie, joggers, sneakers; for the father's face, jacket, and bag; and for the gym location, palette, and ribbon design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: all panel numbers, borders, and gutters in @image1 are production annotations only. Never render, animate, or react to them. The finished video fills the whole 9:16 frame and never shows the storyboard sheet.

LOCATION MAP: FOREGROUND — wooden gym floor, low bench. MIDGROUND — families, scoring area, gradually emptying. BACKGROUND — folded bleachers, high windows. Key light from the high windows, cool daylight, no warm bulbs.

FIRST FRAME: extreme close-up of small hands folding the silver-blue ribbon into a tight square, blurred celebration behind, matching panel 1 exactly.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds; no other cuts. Combine the 16 panels into 6 connected cinematic shots, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS tracking. Shot 3 — 29° CU. Shot 4 — 29° CU easing to 18° ECU at the trigger frame. Shot 5 — 47° MS, slow kneel-down move. Shot 6 — 29° CU. No drift mid-segment.

CAMERA: eye-level, smooth motivated moves only, no unmotivated drift, stable framing, subtle depth of field.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. Small hands fold the ribbon into a tight square; rack focus to Truey's face holding a small proud smile.
2.0s–4.5s — SHOT 2, THE MISSED MOMENT. Truey lifts the ribbon toward his arriving father, who opens his arms toward the winning family instead and gives Truey a quick head-pat, never touching a phone.
4.5s–6.8s — SHOT 3, PUBLIC MASK. The ribbon moves behind his back and creases under his fingers; his face holds a brave smile among other children; he sits and pushes the ribbon into his sneaker.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. The hall empties, lights dim. TRIGGER FRAME at approximately 8.5s: Truey stands, and on this exact single frame the crumpled ribbon slips from the sneaker and lands on the floor precisely as his father's hand freezes mid-zip on the sports bag — both events lock to the same instant, no delay between them. His brave smile fades and tears gather silently. No sobbing.
9.3s–12.3s — SHOT 5, THE FATHER NOTICES. The father sees the ribbon, kneels to Truey's eye level, picks it up, and carefully unfolds it; the creases remain. No lecture, no instant fix. Hold their eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the father's phone held low between them — the first phone in the film. Minimal ChildFocus UI in #00985E/#00CE7F/#E5F7F0/#FFFFFF/#1A1A1A, only words "ChildFocus", "Truey", "Task", "Start". He taps "Start" once, puts the phone away. End on both sitting on the bench, the creased ribbon open between them.

PERFORMANCE: Truey — pride, restrained disappointment, private sadness breaking only after the trigger frame, cautious relief at the end, never theatrical crying. Father — genuine warmth misdirected, then quiet realization, then full presence; never scolding, never guilty theatrics.

PHYSICS: the ribbon has real fabric weight; once creased it never smooths itself; it falls with natural gravity at the trigger frame, no bounce exaggeration. Fabric and hair move naturally with the walk and kneel.

WARDROBE: Truey — exact hoodie, T-shirt, joggers, sneakers from @image1, unchanged. Father — exact jacket, T-shirt, jeans, sneakers, bag from @image1, unchanged.

LIGHTING: gym floor #D9C7A3, cold light #E8EEF2, markings #2E6E8E, walls #C8CCC6, shadows #3A3630, ribbon #B9C2C9/#4A6FA5, distant medal #D4AF37. Cool daylight throughout, no warm golden light, no sunset.

AUDIO: distant cheering fading, sneaker squeaks, a bouncing ball far away, bag zippers, empty-hall reverb, one soft fabric rustle as the ribbon unfolds. Minimal restrained instrumental score turning gently hopeful at the end. No narration, no dialogue, no lyrics, no slogan.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio or franchise.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds total, real-time speed throughout, no slow motion, no on-screen text anywhere except the panel-15/shot-6 phone whitelist.

POSITIVE LOCKS: Truey's and the father's faces, hair, wardrobe stay 100% identical to @image1 in every shot. The ribbon is single, real, and its creases never disappear. The trigger frame — ribbon hitting the floor, father's hand freezing on the bag zipper — happens on one exact synchronized instant, not staggered. No phone before 12.3s. No tears before the trigger frame. No trophy swap. No storyboard numbers ever rendered. No readable environmental text besides the phone whitelist.
```

## Публикация в Instagram
**Подпись:**
He didn't lose. He just didn't win — and that was enough for him to hide the ribbon in his shoe.
Children read our excitement long before they read our words. Sometimes they need us to celebrate the try, not only the result.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните этот пост — пригодится в день, когда ваш ребёнок придёт домой не первым.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #dadlife #MindfulParenting #ParentingSupport #ChildConfidence #EmotionalIntelligence #RaisingKids #ParentingTips #ConsciousParenting #SelfWorth #FamilyFirst
```

**Закреплённый комментарий:** «А вы хвалите только победу или сам факт, что ребёнок вышел и попробовал? Расскажите в комментариях.»

---
---

# Сценарий 2 — «Ещё минуточку»

**Герой:** Sunny · **Локация:** ночная прачечная самообслуживания · **Предмет-символ:** самодельная закладка · **Хук:** закладка вынимается из первой страницы, книга закрывается

## Концепт и виральный угол
Мама стирает поздно вечером. Sunny просит прочитать первую главу — раз, потом второй. Оба раза «минутку». Sunny молча вынимает закладку и больше не просит. Мама видит это в отражении люка машины.

Growth-угол: «сейчас, минутку» — фраза, которую произносил буквально каждый родитель; узнаваемость мгновенная. Момент, когда ребёнок перестаёт просить, страшнее истерики — сильный эмоциональный крюк для сохранений/репостов.

## Оверлей-хук (0–1.5 сек)
`Она попросила два раза. Потом перестала просить.`

## Палитра
Корпуса машин `#F2F4F3`, мятное свечение `#CFE9DF`, ночное окно `#1E2A2E`, хром/барабаны `#A9B4B8`, стулья `#8E8B84`, закладка `#E48A6A`, обложка книги `#5C6E7A`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @sunny_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "One More Minute"

LOCATION MAP: FOREGROUND — a plastic chair and a folding table near the machines. MIDGROUND — a row of front-loading washing machines with mint glow, one other customer folding clothes. BACKGROUND — a black night window. Light source: cold white ceiling light plus mint machine glow, black night outside.

CHARACTER REFERENCE: @sunny_ref is the only source of truth for Sunny's face, hair, and proportions. SUNNY: girl 5–7, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, white sneakers, no logos. Performance: hope, patience, restrained disappointment, quiet sadness, cautious relief — never theatrical.

MOTHER: loving, exhausted woman, 30–36, dark blonde messy low ponytail, oversized gray cardigan, cream T-shirt, faded jeans, flat shoes, carries a laundry basket. Identical in every panel. Tired and kind, never irritated or dismissive.

STYLE: premium stylized 3D animated feature-film quality, believable machine glass and chrome, cinematic depth of field, gentle reflections. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: machine bodies #F2F4F3, mint glow #CFE9DF, night window #1E2A2E, chrome/drums #A9B4B8, plastic chairs #8E8B84, bookmark #E48A6A, book cover #5C6E7A. No warm apartment light, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, small hands holding a handmade bookmark on a book's first page, the page never turns. Hook.
PANEL 2 — wide shot, night laundromat, Sunny on a chair hugging the book, mother loading a machine, one customer folding clothes.
PANEL 3 — Sunny lifts the book toward her mother, hopeful. First ask.
PANEL 4 — the mother, arms full of laundry, smiles and raises one finger: one minute. No phone anywhere.
PANEL 5 — Sunny nods, hugs the book tighter, still patient.
PANEL 6 — time has passed, the drum spins, Sunny asks a second time, lifting the book higher.
PANEL 7 — the mother, turning a machine dial, repeats the same gesture without looking.
PANEL 8 — Sunny's face, brave smile, lowers the book to her knees.
PANEL 9 — wide shot, the other customer leaves, the laundromat nearly empty.
PANEL 10 — macro close-up, the bookmark pulled out of the first page.
PANEL 11 — Sunny closes the book and slides the bookmark into her pocket.
PANEL 12 — TRIGGER, tight close-up, brave smile gone, she looks at the spinning drum, eyes shining. No sobbing.
PANEL 13 — the mother sees Sunny's reflection in the round glass door, quiet realization, laundry still in her hands.
PANEL 14 — the mother puts the basket down, sits on the floor beside the chair, at eye level, open hands.
PANEL 15 — the mother's phone held low, only after contact. Clean ChildFocus UI whitelist "ChildFocus"/"Sunny"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, mother on the floor with the open book, Sunny leaning on her shoulder, laundry still spinning, unfolded laundry still waiting.

CONTINUITY: one single book and one single bookmark #E48A6A throughout, same shape and handmade imperfection. Never replace with a tablet or phone.

TEXT RESTRICTIONS: no price lists, timers, book title text, logos anywhere. Only exception: panel 15 whitelist.

NEGATIVE: no Truey, no Crafty, no apartment, no phone before panel 15, no parental irritation, no tantrum, no tears before panel 12, no sleeping child, no duplicate bookmark, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: Late at night in a laundromat, Sunny waits for the first chapter she was promised. She asks twice. Her tired mother answers both times with the same gentle "one minute" gesture. Sunny stops asking, removes the bookmark, and pockets it. Her mother sees this in the machine glass, sits on the floor beside her, and opens the book right there.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Sunny's face, hair, and outfit, for the mother's face and cardigan, and for the laundromat location, palette, and the bookmark's design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to. The finished video fills the whole 9:16 frame.

LOCATION MAP: FOREGROUND — plastic chair, folding table. MIDGROUND — row of machines with mint glow, gradually emptying. BACKGROUND — black night window with faint reflections. Cold white ceiling light plus mint glow, no warm bulbs.

FIRST FRAME: extreme close-up of the handmade bookmark resting on the book's first page in small hands, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots, never a slideshow.

OPTICS: Shot 1 — 18° ECU with rack focus. Shot 2 — 47° MS with a match cut. Shot 3 — 29° CU. Shot 4 — 18° macro insert easing to 29° CU at the trigger frame. Shot 5 — 47° MS, floor-level move. Shot 6 — 29° CU.

CAMERA: eye-level, motivated moves only, one match cut on the spinning drum for time compression, stable framing otherwise.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. The bookmark rests on the first page; slow rack focus reveals Sunny's hopeful face and the mint glow behind her.
2.0s–4.5s — SHOT 2, FIRST AND SECOND ASK. Sunny lifts the book; the mother raises one finger, arms full of laundry. A match cut on the spinning drum compresses time; Sunny asks again; the mother repeats the gesture while turning a dial, never holding a phone.
4.5s–6.8s — SHOT 3, PUBLIC PATIENCE. Sunny keeps a small brave smile with the other customer still behind her, lowers the book to her knees; the customer picks up a basket and leaves.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. The laundromat is now empty and quiet. TRIGGER FRAME at approximately 8.2s: on one exact frame the bookmark leaves the page in a macro insert precisely as the mother's hand completes turning the machine dial for the second time in the background — both actions lock to the same instant. Sunny closes the book, pockets the bookmark; her brave smile disappears and tears gather silently while the drum keeps spinning. No sobbing.
9.3s–12.3s — SHOT 5, THE MOTHER NOTICES. The mother sees Sunny's reflection in the round glass door, puts down the basket, sits on the floor at eye level, calm open hands. No lecture, no theatrical apology.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the mother's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. She taps "Start", puts the phone away. End on the mother on the floor, book open on her knees, Sunny leaning against her shoulder, laundry still spinning and unfolded behind them.

PERFORMANCE: Sunny — hope and patience, a small brave smile in public, quiet tears only after the trigger frame, cautious relief at the end, never sobbing. Mother — tired warmth throughout, never irritated, dropping into quiet realization and full presence at shot 5.

PHYSICS: the bookmark is light paper with a real handmade fold; once removed it stays in the pocket, never magically returns to the page until she chooses to. The book never changes size, color, or cover.

WARDROBE: Sunny — exact denim jacket, turquoise sweater, jeans, sneakers from @image1. Mother — exact gray cardigan, cream T-shirt, jeans, flat shoes from @image1.

LIGHTING: machines #F2F4F3, mint glow #CFE9DF, night window #1E2A2E, chrome #A9B4B8, chairs #8E8B84, bookmark #E48A6A, book cover #5C6E7A. Cold night lighting throughout, no warm apartment glow.

AUDIO: washing machine hum, spinning drum, coins and metal clicks, a distant street car, a soft laundry-basket thud, one quiet paper sound as the bookmark slides out, empty-room reverb after the customer leaves. Minimal restrained score turning gently hopeful at the end. No narration, no dialogue, no lyrics.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no slow motion, no on-screen text besides the shot-6 phone whitelist.

POSITIVE LOCKS: Sunny's and the mother's faces, hair, wardrobe stay 100% identical to @image1. One single book, one single bookmark, never duplicated, never a tablet. Trigger frame — bookmark leaving the page and the mother's dial-turn completing — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame. No storyboard numbers ever rendered.
```

## Публикация в Instagram
**Подпись:**
She asked twice. Then she took the bookmark out and stopped asking.
"One minute" is honest. But children measure our love in the minutes that actually arrive.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Отправьте это тому родителю, который сейчас разрывается между делами и ребёнком.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #MindfulParenting #BedtimeStories #PresentParenting #WorkingMom #ParentingSupport #QualityTime #GentleParenting #FamilyRituals #ChildDevelopment
```

**Закреплённый комментарий:** «Сколько раз в день вы говорите "минутку"? Честно, в комментариях.»

---
---

# Сценарий 3 — «Он стёр себя»

**Герой:** Crafty · **Локация:** зал ожидания детской поликлиники · **Предмет-символ:** карандашный рисунок семьи · **Хук:** ластик стирает с рисунка самую маленькую фигурку

## Концепт и виральный угол
Crafty рисует семью, пока мама заслушалась похвалами другой мамы про её сына. Crafty стирает себя с рисунка. Когда чужая семья уходит, мама видит призрачный контур и держит лист, пока он рисует себя обратно — криво.

Growth-угол: самый «страшный» хук во всей подборке — ребёнок буквально стирает себя из семьи. Тема сравнения с другим ребёнком — одна из самых стыдных и обсуждаемых родительских тем, высокий потенциал сохранений.

## Оверлей-хук (0–1.5 сек)
`Он взял ластик и стёр себя из своей семьи.`

## Палитра
Стены поликлиники `#DCEDE6`, пол/потолок `#EDEFF0`, кресла `#A8C4D4`, тени `#59696B`, бумага `#FAF7F0`, ластик `#E7A9A0`, графит `#4A4A4A`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @crafty_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "He Erased Himself"

LOCATION MAP: FOREGROUND — a low table with pictographic toys and the drawing paper. MIDGROUND — waiting chairs with Crafty, his mother, and another mother with her son. BACKGROUND — a water cooler and a corridor. Light source: even clinical daylight, soft and shadowless, slightly cold.

CHARACTER REFERENCE: @crafty_ref is the only source of truth for Crafty's face, glasses, hair, and proportions. CRAFTY: boy 6–8, round glasses, chestnut hair brushed upward, dark green hoodie with letter "M", brown corduroy trousers, white sneakers, brown leather backpack. Performance: concentration, restrained disappointment, quiet sadness, cautious relief — never theatrical.

MOTHER: loving, slightly anxious woman, 33–39, dark hair in a low half-updo, beige knit sweater, white blouse collar, dark trousers, loafers, small handbag. Identical in every panel. Warm and social, never cruel or mocking.

OTHER FAMILY: a confident mother in a navy coat and her son, 9–10, light gray sweater. Clearly secondary, never caricatured. They leave after panel 9.

STYLE: premium stylized 3D animated feature-film quality, detailed knitwear and paper, cinematic depth of field, clean clinical surfaces. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: clinic walls #DCEDE6, floor/ceiling #EDEFF0, chairs #A8C4D4, shadows #59696B, paper #FAF7F0, eraser #E7A9A0, graphite #4A4A4A. No warm golden light, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, an eraser rubbing out the smallest figure on a pencil family drawing, crumbs on the page. Hook.
PANEL 2 — wide shot, waiting room, Crafty with the paper on his lap, his mother talking with another mother whose son sits nearby.
PANEL 3 — close-up of the unfinished drawing: mother, father, small boy with round glasses.
PANEL 4 — the other mother speaks proudly about her son; Crafty's mother listens with genuine admiration.
PANEL 5 — Crafty lifts the drawing to show it; his mother gently lowers his hand without looking, gives an affectionate knee-touch. No phone anywhere.
PANEL 6 — the other boy shows something; both adults react warmly; Crafty watches from the side.
PANEL 7 — Crafty's face among people, clinic light on his glasses, small brave smile. No tears yet.
PANEL 8 — he looks down at his three-figure drawing; his own figure is the smallest.
PANEL 9 — he starts erasing his own figure, steady and deliberate.
PANEL 10 — macro close-up, eraser crumbs, thinning paper, a faint ghost outline.
PANEL 11 — wide shot, the other family is called in and leaves, the room nearly empty.
PANEL 12 — TRIGGER, tight close-up, brave smile gone, he stares at the empty space, eyes shining behind his glasses. No sobbing.
PANEL 13 — the mother sees the drawing and the erased space, understands, quiet realization.
PANEL 14 — she kneels at eye level, open hands, no lecture; he gives her the paper.
PANEL 15 — the mother's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Crafty"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, mother holds the paper steady while Crafty draws himself back in, crooked and uneven; erased area stays rough.

CONTINUITY: one single drawing on one sheet throughout; after erasing, the paper keeps a rough thinned area with a ghost outline that never disappears. Never a clean replacement sheet, never the mother drawing for him.

TEXT RESTRICTIONS: no health posters, room numbers, magazine text anywhere. The drawing contains only pencil figures, no writing. Only exception: panel 15 whitelist plus the "M" on the hoodie.

NEGATIVE: no Sunny, no Truey, no apartment, no phone before panel 15, no parental anger, no villain child, no tears before panel 12, no perfectly redrawn figure, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: In a pediatric clinic waiting room, Crafty draws his family while his mother listens to another mother praising her own son and gently lowers Crafty's drawing to keep listening. Crafty erases his own figure from the family. When the room empties, his mother sees the blank space, kneels, and holds the paper steady while he draws himself back in, crooked and uneven.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Crafty's face, glasses, hoodie, and backpack, for the mother's face and sweater, and for the clinic location, palette, and the drawing's exact design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — low table with the drawing paper. MIDGROUND — waiting chairs, the other family, gradually emptying. BACKGROUND — water cooler, corridor. Even clinical daylight, soft and shadowless, no warm bulbs.

FIRST FRAME: extreme close-up of an eraser rubbing out the smallest figure on the family drawing, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS two-shot. Shot 3 — 29° CU. Shot 4 — 18° macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, kneel-down move. Shot 6 — 29° CU.

CAMERA: eye-level, motivated moves only, stable framing, subtle depth of field.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. An eraser rubs out the smallest pencil figure, leaving crumbs and a ghost outline; controlled rack focus lifts to Crafty's concentrated face.
2.0s–4.5s — SHOT 2, THE COMPARISON. Crafty lifts the drawing to show his mother; she gently lowers his hand without looking, gives a warm knee-touch, keeps admiring the other mother's son. Never a phone in her hands.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Crafty holds a small brave smile among people, clinic light reflected in his glasses, eyes dropping to his own small figure in the drawing.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. The other family is called in and the room empties. TRIGGER FRAME at approximately 8.4s: on one exact frame the eraser removes the final pencil stroke of his own figure precisely as an offscreen chime signals the other family being called — both events lock to the same instant. His brave smile disappears and tears gather silently behind his glasses. No sobbing.
9.3s–12.3s — SHOT 5, THE MOTHER NOTICES. The mother sees the erased space, quiet realization, kneels at eye level with open hands, no lecture, no taking the pencil. He hands her the paper. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the mother's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. She taps "Start", puts the phone away. End with her holding the paper steady while Crafty draws himself back in with uneven lines, the erased area still rough.

PERFORMANCE: Crafty — quiet concentration and pride, a small brave smile in public, silent tears only after the trigger frame, cautious courage at the end drawing himself back in. Mother — genuine social warmth toward the other family, dropping into quiet realization and full presence at shot 5, never guilty theatrics.

PHYSICS: the paper thins and roughens where erased; the ghost outline never disappears; the eraser leaves real crumbs that fall with gravity. Pencil lines at the end are visibly uneven, not corrected.

WARDROBE: Crafty — exact glasses, hoodie with "M", trousers, sneakers, backpack from @image1. Mother — exact sweater, blouse, trousers, loafers from @image1.

LIGHTING: clinic walls #DCEDE6, floor #EDEFF0, chairs #A8C4D4, shadows #59696B, paper #FAF7F0, eraser #E7A9A0, graphite #4A4A4A. Even clinical light throughout, no warm golden light.

AUDIO: quiet waiting-room ambience, distant corridor steps, a soft door, indistinct adult conversation with no recognizable words, pencil on paper, a dry eraser sound, the room going quiet after the family leaves. Minimal restrained score turning gently hopeful at the end. No narration, no dialogue, no lyrics.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist and the "M" on the hoodie.

POSITIVE LOCKS: Crafty's and the mother's faces, glasses, wardrobe stay 100% identical to @image1. One single drawing, the ghost outline never disappears, never a clean replacement sheet, never the mother drawing for him. Trigger frame — final eraser stroke and the offscreen chime — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame.
```

## Публикация в Instagram
**Подпись:**
Nobody shouted at him. Someone just praised another child a little longer — and he quietly erased himself from the family drawing.
Comparison doesn't motivate children. It teaches them where they rank.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните — это стоит вспомнить перед следующим "а вот у Х получается лучше".

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #StopComparing #MindfulParenting #ChildSelfEsteem #EmotionalIntelligence #ParentingSupport #ConsciousParenting #ChildPsychology #FamilyLove
```

**Закреплённый комментарий:** «Сравнивали своего ребёнка с чужим при нём хоть раз? Без осуждения — просто честно.»

---
---

# Сценарий 4 — «Плитка шоколада»

**Герой:** Sunny · **Локация:** супермаркет поздно вечером · **Предмет-символ:** открытка для заболевшей подруги · **Хук:** детская рука кладёт шоколадку в тележку, взрослая рука молча возвращает её на полку

## Концепт и виральный угол
Sunny хочет купить шоколадку для больной подруги, но мама, не спрашивая зачем, дважды возвращает её на полку. У кассы Sunny прячет открытку. Мама видит её лицо в тёмном стекле дверей.

Growth-угол: ритмичный, почти комедийный по монтажу хук («положили-вернули, положили-вернули») переворачивается в драму за 4 секунды — сильный контраст держит внимание. Вина здесь не про запрет сладкого, а про то, что не спросили «зачем» — тонкий и незаезженный угол.

## Оверлей-хук (0–1.5 сек)
`Она не хотела шоколадку себе. Никто не спросил, для кого.`

## Палитра
Люминесцентный свет `#F7F9F6`, свечение полок `#BFD8C9`, глубина рядов `#2C3A33`, металл `#9AA3A0`, обёртка `#A63A3A`, открытка `#FFF3E2`, ночное стекло `#1B2320`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @sunny_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "The Chocolate Bar"

LOCATION MAP: FOREGROUND — the shopping cart and shelves at hand height. MIDGROUND — long aisles, Sunny and her mother walking. BACKGROUND — a single cashier and the dark exit doors. Light source: cold fluorescent ceiling light, night outside the windows.

CHARACTER REFERENCE: @sunny_ref is the only source of truth for Sunny's face, hair, and proportions. SUNNY: girl 5–7, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, white sneakers. Performance: determination, restrained disappointment, quiet sadness, cautious relief — never theatrical.

MOTHER: loving, exhausted woman, 32–38, still in work clothes, dark brown hair in a tight low bun, charcoal coat, plain blouse, straight trousers, low heels, canvas tote in the cart. Identical in every panel. Efficient and tired, never angry or loudly refusing.

STYLE: premium stylized 3D animated feature-film quality, detailed packaging surfaces without readable labels, cinematic depth of field, clean reflective floor. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: fluorescent light #F7F9F6, shelf glow #BFD8C9, aisle shadow #2C3A33, metal #9AA3A0, chocolate wrapper #A63A3A, card paper #FFF3E2, door glass #1B2320. No warm golden light, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, a small hand places a red-wrapped chocolate bar into the cart, an adult hand immediately lifts it out. Hook.
PANEL 2 — close-up, the adult hand returns the bar to the shelf, the cart already moving on.
PANEL 3 — wide shot, night supermarket, mother pushing the cart, Sunny half a step behind holding a handmade card.
PANEL 4 — close-up of the card: a girl in bed and another girl beside her, a small heart, no letters.
PANEL 5 — Sunny takes the chocolate bar again, holds it pressed against the card.
PANEL 6 — she lifts both toward her mother, who is comparing two packages and doesn't look down. No phone anywhere.
PANEL 7 — without looking, the mother puts the bar back, touches Sunny's shoulder, moves on.
PANEL 8 — Sunny's face, a distant shopper and the cashier visible, small brave smile, lowers the card. No tears yet.
PANEL 9 — wide shot at the checkout, the belt carries only adult groceries.
PANEL 10 — macro close-up, Sunny slides the card into her jacket pocket, one corner bends.
PANEL 11 — the last shopper leaves, the exit area empty and quiet.
PANEL 12 — TRIGGER, tight close-up near the dark doors, brave smile gone, she looks back toward the sweets aisle, eyes shining. No sobbing.
PANEL 13 — the mother sees Sunny's reflection in the dark door glass, quiet realization, stops the cart.
PANEL 14 — she kneels to eye level, open hands; Sunny takes out the bent card and shows the drawing.
PANEL 15 — the mother's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Sunny"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, mother and daughter walk back into the aisle together, chocolate bar and bent card in Sunny's hands.

CONTINUITY: one single chocolate bar and one single handmade card throughout; after panel 10 the card keeps a visible bent corner that never straightens.

TEXT RESTRICTIONS: no product labels, price tags, receipts anywhere. The card contains drawing only. Only exception: panel 15 whitelist.

NEGATIVE: no Truey, no Crafty, no apartment, no phone before panel 15, no parental anger, no begging child, no tears before panel 12, no straightened card, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: Late at night in a supermarket, Sunny tries to buy a chocolate bar for a sick friend while carrying a handmade card. Her exhausted mother quietly puts the chocolate back twice without ever looking at the card. Sunny keeps a brave smile, then pockets the card. Her mother sees her face in the dark exit doors, kneels, looks at the drawing, and walks back with her.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Sunny's face and outfit, for the mother's face and coat, and for the supermarket location, palette, and the exact chocolate bar and card design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — the cart and shelf-height hands. MIDGROUND — long aisles, gradually emptying. BACKGROUND — cashier, dark exit doors. Cold fluorescent light throughout, night outside.

FIRST FRAME: extreme close-up of a small hand placing the red chocolate bar into the cart as an adult hand lifts it out, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS tracking along the aisle. Shot 3 — 29° CU. Shot 4 — 18° macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, kneel-down move. Shot 6 — 47° MS two-shot.

CAMERA: eye-level, one long aisle tracking shot, otherwise stable, subtle depth of field, consistent screen direction.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. A small hand places the chocolate bar in the cart; an adult hand lifts it out and returns it to the shelf; the cart moves on. Repeat the gesture once more in the same fluid movement so the pattern reads instantly.
2.0s–4.5s — SHOT 2, WHAT SHE WAS CARRYING. Sunny walks half a step behind holding the card with its drawing, presses the chocolate against it, lifts both toward her mother, who is comparing packages and never looks down or touches a phone. She puts the bar back and touches Sunny's shoulder kindly.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Sunny holds a small brave smile with the cashier and one distant shopper visible; cut to the checkout belt carrying only adult groceries as she watches them pass.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. The last shopper leaves, the exit area quiets. TRIGGER FRAME at approximately 8.3s: on one exact frame the card's corner bends going into her jacket pocket precisely as the checkout belt reaches its last item with no chocolate on it — both events lock to the same instant. Her brave smile disappears near the dark glass doors and tears gather silently as she looks back toward the sweets aisle. No sobbing.
9.3s–12.3s — SHOT 5, THE MOTHER NOTICES. The mother sees Sunny's reflection in the dark exit glass, stops the cart, kneels to her eye level with open hands; Sunny takes out the bent card and shows the drawing. No lecture, no theatrical apology. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the mother's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. She taps "Start", puts the phone away. End with both walking back into the aisle together, chocolate bar and bent card in Sunny's hands.

PERFORMANCE: Sunny — quiet determination, a small brave smile in public, silent tears only after the trigger frame, cautious relief at the end, never begging or whining. Mother — efficient tiredness throughout, never angry, dropping into quiet realization and full presence at shot 5.

PHYSICS: the card is light paper with a real handmade drawing; once bent, the corner never straightens. The chocolate bar keeps its shape and wrapper, never duplicated or swapped for another product.

WARDROBE: Sunny — exact denim jacket, turquoise sweater, jeans, sneakers from @image1. Mother — exact charcoal coat, blouse, trousers, heels, tote from @image1.

LIGHTING: fluorescent light #F7F9F6, shelf glow #BFD8C9, aisle shadow #2C3A33, metal #9AA3A0, wrapper #A63A3A, card #FFF3E2, door glass #1B2320. Cold fluorescent light throughout, no warm or cozy glow.

AUDIO: fluorescent hum, cart wheels on hard floor, distant freezer motors, a checkout beep with no voice, quiet late-night ambience, a soft paper sound as the card is pocketed, automatic doors in the distance. Minimal restrained score turning gently hopeful at the end. No narration, no dialogue, no lyrics.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist.

POSITIVE LOCKS: Sunny's and the mother's faces, wardrobe stay 100% identical to @image1. One single chocolate bar, one single card with a bent corner that never straightens. Trigger frame — card bending and the empty checkout belt — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame.
```

## Публикация в Instagram
**Подпись:**
She kept putting one chocolate bar in the cart. Her mother kept putting it back. Nobody knew it wasn't for her — it was for a friend who was sick.
Children's reasons are small and easy to miss. Asking "what is it for?" takes five seconds.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните — и в следующий раз спросите "зачем", прежде чем сказать "нет".

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #MindfulParenting #KindKids #ParentingSupport #ChildEmpathy #WorkingMom #ConsciousParenting #RaisingGoodHumans #FamilyMoments
```

**Закреплённый комментарий:** «Часто спрашиваете "а зачем тебе это", прежде чем сказать "нет"? Честно.»

---
---

# Сценарий 5 — «Он просто боится»

**Герой:** Truey · **Локация:** крытый бассейн, детская тренировка · **Предмет-символ:** плавательные очки · **Хук:** побелевшие костяшки сжимают очки, и мгновенная улыбка, когда на него смотрят

## Концепт и виральный угол
Truey боится глубины и молча показывает очки папе. Папа подбадривает — с любовью, но без слов принятия страха. Truey прыгает, под водой очки наполняются водой, он выныривает один. Папа видит его лицо через стекло и садится рядом на мокрую плитку.

Growth-угол: физиологичный, бессловесный хук (побелевшие костяшки) плюс контраст «улыбка снаружи / тишина и пузыри под водой» — сильный визуальный крюк, который хорошо смотрится даже без звука в ленте.

## Оверлей-хук (0–1.5 сек)
`Он не сказал, что боится. Он просто улыбнулся.`

## Палитра
Вода `#4FB6C4`, глубина `#12657A`, плитка `#EDF3F4`, дымка `#BFE3E8`, тени под водой `#0C3A47`, очки `#E07A3F`, полотенце `#DCE3E0`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @truey_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "He Is Just Scared"

LOCATION MAP: FOREGROUND — the pool edge and wet tiles. MIDGROUND — lane ropes, a shallow and deep section, a coach and children. BACKGROUND — a glass barrier separating a small parents' area. Light source: cool aquamarine indoor pool light with moving water caustics on the ceiling.

CHARACTER REFERENCE: @truey_ref is the only source of truth for Truey's face, hair, and proportions. TRUEY: boy 6–8, large brown eyes, warm brown hair styled upward; in the pool plain dark green swim shorts and orange goggles; his hoodie only appears bench-side. Performance: hidden fear, forced confidence, quiet distress, cautious relief — never theatrical.

FATHER: loving, energetic man, 34–40, short dark hair, light stubble, gray sports jacket, white T-shirt, dark trousers, towel over his arm. Identical in every panel. Encouraging and warm, never mocking or forcing.

STYLE: premium stylized 3D animated feature-film quality, realistic wet skin and hair, believable water simulation, caustic light patterns, one clean underwater shot. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: water #4FB6C4, deep water #12657A, tiles #EDF3F4, haze #BFE3E8, underwater shadows #0C3A47, goggles #E07A3F, towel #DCE3E0. No warm golden light, no outdoor sunlight, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, small hands gripping orange goggles, knuckles white, water reflections moving. Hook.
PANEL 2 — close-up, Truey's face turning toward other children with an instant bright smile that doesn't match his eyes.
PANEL 3 — wide shot, children line up at the edge with the coach, Truey slightly apart, parents behind the glass barrier.
PANEL 4 — Truey looks down into the deep water, a small step back.
PANEL 5 — he turns to his father behind the glass, lifts the goggles slightly, asking with his eyes.
PANEL 6 — the father smiles broadly, a warm encouraging gesture meaning it's easy. No phone anywhere.
PANEL 7 — Truey's face among other children, manufactures a confident smile, nods.
PANEL 8 — he pulls the goggles on too tightly, the strap marks his temple.
PANEL 9 — he steps to the edge, toes over the tiles, shoulders tense, breathing quick.
PANEL 10 — macro close-up of his foot on the wet tile with a small tremor.
PANEL 11 — he jumps, splash, bubbles, water spray frozen mid-air.
PANEL 12 — underwater shot, blurred aquamarine, rising bubbles, one lens half filled with water, his eyes wide.
PANEL 13 — TRIGGER, he surfaces at the wall, grips the gutter, coughing quietly, the group already swum away.
PANEL 14 — the father sees his face and the fear behind the fogged goggles, opens the glass door.
PANEL 15 — the father's phone held low, crouching at the pool edge with a towel around Truey, only after contact. ChildFocus UI whitelist "ChildFocus"/"Truey"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, father and son sit on the pool edge, feet in the water, towel around Truey, orange goggles resting on the tiles between them, deep water still there.

CONTINUITY: one single pair of orange goggles throughout: gripped, worn too tight, water-filled, then resting between them fogged. Hair stays wet after panel 11.

TEXT RESTRICTIONS: no depth numbers, lane numbers, safety signs anywhere. Only exception: panel 15 whitelist.

NEGATIVE: no Sunny, no Crafty, no apartment, no outdoor pool, no phone before panel 15, no parental anger, no drowning, no rescue drama, no tears before panel 13, no dry hair after the jump, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: At an indoor pool, Truey is afraid of the deep water and silently asks his father for help by holding up his goggles. His father, loving and encouraging, signals there is nothing to fear. Truey hides the fear, jumps, and surfaces alone at the wall while the group swims on. His father sees his face, wraps him in a towel, and stays with him on the wet tiles.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Truey's face, swim shorts, and goggles, for the father's face and jacket, and for the pool location, palette, and the exact goggle design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — pool edge, wet tiles. MIDGROUND — lane ropes, the swimming group, gradually swimming away. BACKGROUND — the glass barrier and parents' area. Cool aquamarine light with moving caustics, no warm bulbs.

FIRST FRAME: extreme close-up of small hands gripping orange goggles, knuckles white, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots, including one clean underwater shot, never a slideshow.

OPTICS: Shot 1 — 18° ECU with rack focus. Shot 2 — 29° MS. Shot 3 — 29° CU. Shot 4 — 18° underwater macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, floor-level move. Shot 6 — 29° CU.

CAMERA: eye-level, motivated moves only, one clean underwater shot with muffled sound, stable framing, consistent screen direction.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. Small hands grip the goggles, knuckles white, water caustics moving; quick rack focus to Truey producing an instant bright smile toward the other children — the contradiction between hands and smile must read within the first second.
2.0s–4.5s — SHOT 2, THE SILENT ASK. Truey looks into the deep water, steps back, turns to his father behind the glass and lifts the goggles slightly. The father smiles broadly with a warm encouraging gesture, never holding a phone.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Truey nods, manufactures confidence, pulls the goggles on too tight so the strap marks his temple; he moves to the edge, toes over the tiles, one small tremor in his foot.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. He jumps; cut to a clean underwater shot, muffled sound, rising bubbles. TRIGGER FRAME at approximately 7.8s: on one exact frame one lens fills with water precisely as his body crosses fully below the surface — the moment reads as a single clean instant, not gradual. He surfaces at the wall, coughing quietly, the group already gone. His brave smile is gone. No sobbing, no drowning.
9.3s–12.3s — SHOT 5, THE FATHER NOTICES. The father sees the fear through the fogged goggles, comes to the edge, crouches at eye level, wraps a towel around him. No lecture, no push to try again. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the father's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. He taps "Start", puts the phone away. End with father and son sitting on the pool edge, feet in the water, goggles resting on the tiles between them, deep water still there.

PERFORMANCE: Truey — hidden fear behind rapid public smiles, quiet distress only after the trigger frame underwater and at the wall, cautious relief at the end, the fear is not cured. Father — genuine warm encouragement, dropping into quiet realization and full presence at shot 5, never mocking or hostile.

PHYSICS: water behaves with real weight and caustic light; bubbles rise naturally; the goggle strap leaves a real skin mark; hair stays wet and heavy after the jump, never drying magically.

WARDROBE: Truey — plain dark green swim shorts and orange goggles in water, exact hoodie only outside the water, from @image1. Father — exact jacket, T-shirt, trousers, towel from @image1.

LIGHTING: water #4FB6C4, deep water #12657A, tiles #EDF3F4, haze #BFE3E8, underwater shadows #0C3A47, goggles #E07A3F, towel #DCE3E0. Cool indoor pool light with caustics throughout, no warm light, no outdoor pool.

AUDIO: indoor pool reverb, distant children's voices with no recognizable words, water splashes, a coach's whistle far away, muffled underwater tone with bubbles during the jump, dripping water and quiet breathing at the wall. Minimal restrained score turning gently reassuring at the end. No narration, no dialogue, no lyrics.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist.

POSITIVE LOCKS: Truey's and the father's faces, wardrobe stay 100% identical to @image1. One single pair of goggles, hair stays wet after the jump. Trigger frame — lens filling with water as he crosses the surface — happens as one clean instant. No phone before 12.3s. No tears before the trigger frame. No rescue drama, no drowning.
```

## Публикация в Instagram
**Подпись:**
He wasn't being difficult. He was scared, and he smiled so nobody would notice.
"There's nothing to be afraid of" is meant kindly. But children hear it as "don't bring me this feeling."
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните — и в следующий раз просто сядьте рядом, вместо того чтобы подбадривать.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #ChildhoodFears #MindfulParenting #EmotionalSafety #ParentingSupport #GentleParenting #SwimLessons #ChildPsychology #RaisingKids
```

**Закреплённый комментарий:** «Ваш ребёнок чего-то боится, а вы говорите "там нечего бояться"? Как реагируете на самом деле?»

---
---

# Сценарий 6 — «Билет на первый круг»

**Герой:** Sunny · **Локация:** ледовый каток · **Предмет-символ:** самодельный бумажный билет · **Хук:** детская рука протягивает билет родителю, который в этот момент отворачивается к другому взрослому

## Концепт и виральный угол
Sunny делает билет на свой первый самостоятельный круг. Мама берёт его — и в этот же момент отвлекается на подошедшую знакомую. Sunny катает круг одна, машет рукой — мама машет в ответ, не глядя. Билет падает на мокрый пол и топчется коньками.

Growth-угол: «помахали, не подняв глаз» — микрожест, который узнаёт почти каждый родитель; хук про взрослый разговор поверх детского момента — недоэксплуатированная тема по сравнению с «телефон в руках».

## Оверлей-хук (0–1.5 сек)
`Она сделала билет, чтобы её посмотрели. Никто не посмотрел.`

## Палитра
Лёд `#EAF2F7`, синева катка `#9FC4DE`, бортик `#D8DEE3`, тени/трибуны `#33424E`, резиновый пол `#4B5560`, билет `#F1E3C6`, рисунок на билете `#5A6472`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @sunny_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "A Ticket for the First Lap"

LOCATION MAP: FOREGROUND — the boards and the rubber-floored walkway. MIDGROUND — the ice rink with skaters. BACKGROUND — distant empty stands, dimming lights toward the end. Light source: cold rink lighting, white ice, blue shadows, dimmed in the final panels.

CHARACTER REFERENCE: @sunny_ref is the only source of truth for Sunny's face, hair, and proportions. SUNNY: girl 5–7, chestnut hair in two low ponytails; on the ice white figure skates and a gray knit hat; her sneakers appear only near the boards. Performance: excitement, concentration, restrained disappointment, quiet sadness, cautious pride — never theatrical.

MOTHER: loving, sociable woman, 32–38, chestnut hair in a loose braid, quilted burgundy coat, gray scarf, dark jeans, winter boots. Identical in every panel. Warm and polite, never angry or dismissive.

OTHER ADULT: a friendly acquaintance in a dark green parka, clearly secondary, never unpleasant. Leaves after panel 9.

STYLE: premium stylized 3D animated feature-film quality, realistic ice surface, fine skate marks, visible cold breath, cinematic depth of field. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: ice #EAF2F7, rink blue #9FC4DE, boards #D8DEE3, shadows/stands #33424E, rubber floor #4B5560, ticket #F1E3C6, pencil drawing #5A6472. No warm golden light, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, a small hand holding a handmade paper ticket with a pencil skater and a star, no letters. Hook.
PANEL 2 — medium shot at the boards, Sunny in skates hands the ticket to her mother, points at the ice.
PANEL 3 — the mother takes the ticket with a genuine smile, looks at the ice.
PANEL 4 — another adult arrives, friendly conversation starts; the mother turns, slides the ticket into her coat pocket. No phone anywhere.
PANEL 5 — Sunny pushes off from the boards, wide shot from behind her, empty ice ahead, mother already turned away.
PANEL 6 — Sunny skates her first solo lap, unsteady but determined, cold breath visible.
PANEL 7 — she completes the lap, opens her arms toward the boards, waiting to be seen.
PANEL 8 — the mother, still in conversation, waves back automatically without turning her head.
PANEL 9 — Sunny's face among other skaters, small brave smile, waves back as if it doesn't matter. No tears yet.
PANEL 10 — macro close-up, the ticket slips out of the coat pocket, lands on the wet rubber floor near passing blades.
PANEL 11 — wide shot, the session ends, lights dim, rink empties, a dirty footprint mark on the ticket.
PANEL 12 — TRIGGER, tight close-up, Sunny alone at the boards, brave smile gone, cold breath visible, eyes shining. No sobbing.
PANEL 13 — the mother finds the ticket on the floor, picks it up, quiet realization.
PANEL 14 — she comes to the boards, kneels at eye level, holds the damp dirty ticket carefully.
PANEL 15 — the mother's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Sunny"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, mother stands at the boards holding the creased ticket, watches Sunny skate the lap again on the dim ice, this time seen.

CONTINUITY: one single handmade ticket throughout: clean, then fallen, then marked with a footprint and damp, still marked at the end.

TEXT RESTRICTIONS: no rink advertising, scoreboards, banners anywhere. The ticket contains drawing only. Only exception: panel 15 whitelist.

NEGATIVE: no Truey, no Crafty, no apartment, no phone before panel 15, no parental anger, no falling injury, no tears before panel 12, no medal, no cheering crowd, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: At an indoor ice rink, Sunny gives her mother a handmade ticket inviting her to watch her first solo lap. An adult starts a friendly conversation at that exact moment. Sunny skates the lap alone and opens her arms at the boards; her mother waves back automatically without ever looking. The ticket slips onto the wet floor. When the rink empties, the mother finds the trampled ticket, understands, kneels, and watches Sunny skate the lap again.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Sunny's face, skates, and hat, for the mother's face and coat, and for the rink location, palette, and the exact ticket design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — the boards and rubber walkway. MIDGROUND — the ice with skaters, gradually emptying. BACKGROUND — distant stands, dimming lights. Cold rink lighting throughout, no warm bulbs.

FIRST FRAME: extreme close-up of a small hand holding up the handmade paper ticket, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots, including one following skating shot, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS two-shot. Shot 3 — 63° WS following shot easing to 29° CU. Shot 4 — 18° macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, kneel-down move. Shot 6 — 47° MS.

CAMERA: eye-level, one following skating shot, otherwise stable, consistent rink geography and screen direction.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. A small hand holds up the paper ticket with its pencil skater and star; rack focus reveals Sunny excited and her mother reaching for it — the invitation must read within the first second.
2.0s–4.5s — SHOT 2, THE MOMENT IS TAKEN. The mother takes the ticket with a genuine smile; another adult arrives and starts a friendly conversation; the mother turns toward her and slides the ticket into her coat pocket, never holding a phone.
4.5s–6.8s — SHOT 3, THE LAP NOBODY WATCHED. Follow Sunny from behind as she pushes off and skates her first solo lap, unsteady but determined, cold breath visible; she completes the lap and opens her arms toward the boards; her mother waves back automatically without turning her head; close on Sunny's small brave smile among other skaters.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. TRIGGER FRAME at approximately 8.0s: on one exact frame the paper ticket slips from the coat pocket and lands on the wet rubber floor precisely as Sunny's arms complete opening at the end of her lap — both events lock to the same instant across the two locations. The session ends, lights dim, the rink empties. Her brave smile disappears and tears gather silently in the cold air. No sobbing.
9.3s–12.3s — SHOT 5, THE MOTHER NOTICES. The mother notices the ticket on the floor, picks it up, quiet realization as she looks at the drawing then the empty ice. She comes to the boards, kneels at eye level, holds the damp dirty ticket carefully. No lecture, no over-apology. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the mother's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. She taps "Start", puts the phone away. End with the mother standing at the boards, creased ticket in hand, watching Sunny skate the lap again on the dim empty ice, watched from the first push to the last.

PERFORMANCE: Sunny — excitement and concentration, a small brave smile in public, silent tears only after the trigger frame, cautious pride at the end, never a triumphant celebration. Mother — genuine social warmth toward the acquaintance, dropping into quiet realization and full presence at shot 5.

PHYSICS: the paper ticket is light and creases permanently once trampled; it never cleans itself. Skate blades leave real fine marks on the ice; cold breath is visible throughout.

WARDROBE: Sunny — exact skates, hat, jacket, sweater, jeans from @image1. Mother — exact coat, scarf, jeans, boots from @image1.

LIGHTING: ice #EAF2F7, rink blue #9FC4DE, boards #D8DEE3, shadows #33424E, rubber floor #4B5560, ticket #F1E3C6, pencil #5A6472. Cold rink light throughout, dimming for the final beats, no warm light, no spotlight show.

AUDIO: skate blades cutting ice, rink reverb, distant skaters, indistinct adult conversation with no recognizable words, a session-end signal without speech, the hum of dimming lights, one soft paper sound as the ticket lands. Minimal restrained score turning gently hopeful at the end. No narration, no dialogue, no lyrics, no crowd applause.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist.

POSITIVE LOCKS: Sunny's and the mother's faces, wardrobe stay 100% identical to @image1. One single ticket, permanently creased once trampled, never cleaned or duplicated. Trigger frame — ticket falling and Sunny's arms opening — happens on one synchronized instant across locations. No phone before 12.3s. No tears before the trigger frame. No medal, no cheering crowd.
```

## Публикация в Instagram
**Подпись:**
She made a ticket so we would come and watch. She skated her first lap alone, opened her arms — and got a wave from someone who never looked up.
Children don't need an audience. They need one pair of eyes that was actually there.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Отправьте другу с ребёнком — узнает себя за первые пять секунд.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #MindfulParenting #BeThere #ChildConfidence #ParentingSupport #FirstTimes #ConsciousParenting #QualityTime #IceSkating
```

**Закреплённый комментарий:** «Часто машете ребёнку, не поднимая глаз от разговора? Честно.»

---
---

# Сценарий 7 — «Он хотел сказать сам»

**Герой:** Truey · **Локация:** барбершоп · **Предмет-символ:** вырезка из журнала с причёской · **Хук:** затёртая вырезка в детских руках медленно складывается и прячется под накидку

## Концепт и виральный угол
Truey несколько дней носил вырезку в кармане, чтобы попросить такую стрижку сам. Мастер спрашивает — папа отвечает быстрее и называет сына «молчуном». Под накидкой вырезка складывается вчетверо. Когда накидку снимают, бумажка падает в стриженые волосы.

Growth-угол: ярлык «он у нас стеснительный» — фраза, которую произносит буквально любой родитель без злого умысла; зеркало барбершопа даёт визуально сильный двойной кадр (папа и сын одновременно).

## Оверлей-хук (0–1.5 сек)
`Он репетировал эти слова три дня. Мы ответили за него за секунду.`

## Палитра
Мятная плитка `#CFE7DE`, хром `#B7BEC2`, кресло `#24282A`, зеркала `#DCE3E4`, пол/стойка `#8C8478`, бумага вырезки `#F4EFE6`, накидка `#3C4448`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @truey_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "He Wanted to Say It Himself"

LOCATION MAP: FOREGROUND — the barber chair and the mirror. MIDGROUND — a waiting bench, another customer. BACKGROUND — a window with cool daylight. Light source: cool daylight from the shop window, mint tiles, chrome highlights, no warm bulbs.

CHARACTER REFERENCE: @truey_ref is the only source of truth for Truey's face, hair, and proportions; his hair starts slightly longer and becomes shorter after the haircut, but face and proportions never change. TRUEY: boy 6–8, large brown eyes, warm brown hair, olive-green hoodie, charcoal T-shirt, taupe joggers, white sneakers, dark barber cape in the chair. Performance: rehearsed courage, restrained disappointment, quiet sadness, cautious confidence — never theatrical.

FATHER: loving, sociable man, 34–40, short dark hair, light stubble, navy overshirt, white T-shirt, dark jeans, brown boots. Identical in every panel. Friendly and confident; his "he's the quiet one" label is affectionate and thoughtless, not hostile.

BARBER: calm, 28–35, plain dark apron, patient and attentive, consistent throughout.

STYLE: premium stylized 3D animated feature-film quality, detailed hair strands, realistic chrome and mirror reflections, cinematic depth of field. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: mint tiles #CFE7DE, chrome #B7BEC2, chair #24282A, mirrors #DCE3E4, floor/counter #8C8478, cutout paper #F4EFE6, cape #3C4448. No warm golden light, no vintage amber bulbs, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, small hands holding a worn magazine cutout of a hairstyle, no letters. Hook.
PANEL 2 — wide shot, Truey in the chair with a cape on, father standing behind, barber approaching.
PANEL 3 — the barber asks with a friendly gesture what haircut Truey would like, looking at him.
PANEL 4 — Truey opens his mouth, starts lifting the cutout from under the cape. Real courage.
PANEL 5 — the father answers first with a quick gesture describing the usual short cut, ruffles Truey's hair. No phone anywhere.
PANEL 6 — the barber nods and starts working; Truey lowers the cutout back under the cape.
PANEL 7 — Truey's face in the mirror, barber and another customer visible, small brave smile. No tears yet.
PANEL 8 — the father talks with the waiting customer, gestures warmly "he's the quiet one"; Truey hears it, looks down.
PANEL 9 — macro close-up under the cape, the cutout folded in half, then again.
PANEL 10 — cut hair falls onto the cape and floor; the haircut is clearly not the one in the picture.
PANEL 11 — wide shot, the other customer leaves, the shop quiet.
PANEL 12 — TRIGGER, the cape is removed, the folded paper falls into the cut hair on the floor.
PANEL 13 — tight close-up of Truey in the mirror, brave smile gone, eyes lowered and shining. No sobbing.
PANEL 14 — the father picks up the paper, unfolds it, understands; crouches at eye level, open hands; Truey points at the picture and finally speaks.
PANEL 15 — the father's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Truey"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, Truey himself holds the unfolded cutout out to the barber, father stands back, hair still short, paper still creased.

CONTINUITY: one single magazine cutout throughout: worn, folded twice, then unfolded with permanent fold lines. Truey's hair is longer in panels 1–9 and shorter from panel 10 onward, never grows back.

TEXT RESTRICTIONS: no price lists, magazine text, apron badges anywhere. Only exception: panel 15 whitelist.

NEGATIVE: no Sunny, no Crafty, no apartment, no vintage amber bulbs, no phone before panel 15, no cruel mockery, no tears before panel 13, no magically restored hair, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: In a barbershop, Truey brought a magazine cutout of the haircut he wanted and rehearsed asking for it himself. The barber asks him directly, but his father answers first and warmly calls him the quiet one. Truey folds the cutout under the cape. When the cape comes off, the folded paper falls into the cut hair. His father picks it up, unfolds it, and lets Truey speak to the barber himself.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Truey's face and wardrobe, for the father's face and coat, for the barber, and for the shop location, palette, and the exact cutout design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — the barber chair and mirror. MIDGROUND — the waiting bench, the other customer, leaving mid-film. BACKGROUND — the shop window. Cool daylight throughout, no warm bulbs.

FIRST FRAME: extreme close-up of small hands holding the worn magazine cutout, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots, using mirror framing, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS. Shot 3 — 29° CU in the mirror. Shot 4 — 18° macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, kneel-down move. Shot 6 — 29° CU.

CAMERA: eye-level, mirror framing kept physically correct, otherwise stable, motivated moves only.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. Small hands hold the worn cutout, creased from days in a pocket; rack focus to Truey in the chair, cape on, gathering his courage.
2.0s–4.5s — SHOT 2, ANSWERED FOR. The barber asks Truey directly; he opens his mouth and starts lifting the cutout; his father answers first, describes the usual short cut, ruffles his hair, never holding a phone.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Truey's face in the mirror holds a small brave smile as the barber works; his father gestures "he's the quiet one" to the other customer; Truey hears it, looks down; under the cape the cutout folds in half, then again.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. Cut hair falls on the cape and floor; the other customer leaves, the shop quiets. TRIGGER FRAME at approximately 8.6s: on one exact frame the cape comes off and the folded paper falls into the cut hair precisely as the last lock of cut hair lands beside it — both drops lock to the same instant. Truey's brave smile disappears in the mirror and tears gather silently. No sobbing.
9.3s–12.3s — SHOT 5, THE FATHER NOTICES. The father picks up the paper, unfolds it, understands, crouches at eye level with open hands. Truey points at the picture and finally speaks. No theatrical apology. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the father's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. He taps "Start", puts the phone away. End with Truey himself holding the unfolded cutout out to the barber, father standing back, hair still short, paper still creased.

PERFORMANCE: Truey — rehearsed courage, a small brave smile in public, silent tears only after the trigger frame, cautious confidence at the end speaking for himself. Father — genuine sociable warmth, dropping into quiet realization and full presence at shot 5, never hostile.

PHYSICS: the cutout is soft creased paper; once folded twice it keeps permanent fold lines, never flattening perfectly. Cut hair falls with real weight and stays on the cape and floor.

WARDROBE: Truey — exact hoodie, T-shirt, joggers, sneakers from @image1, hair length changing only once after the haircut. Father — exact overshirt, T-shirt, jeans, boots from @image1. Barber — plain dark apron.

LIGHTING: mint tiles #CFE7DE, chrome #B7BEC2, chair #24282A, mirrors #DCE3E4, floor #8C8478, cutout #F4EFE6, cape #3C4448. Cool daylight throughout, no warm bulbs.

AUDIO: clipper hum, scissors, a spray bottle, hair falling on the cape, quiet shop ambience, indistinct adult conversation with no recognizable words, a door chime without voices, one soft paper sound as the folded cutout lands. Minimal restrained score turning gently hopeful at the end. No narration, no dialogue, no lyrics.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist.

POSITIVE LOCKS: Truey's and the father's faces, wardrobe stay 100% identical to @image1. One single cutout, permanently fold-lined, never flattened perfectly or duplicated. Hair changes length exactly once and never regrows. Trigger frame — folded paper and last hair lock falling together — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame.
```

## Публикация в Instagram
**Подпись:**
He practiced the words for days. It took us one second to answer for him.
"He's the quiet one" isn't a description. It's an instruction children learn to follow.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните — и в следующий раз дайте ребёнку три секунды тишины, чтобы ответить самому.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #LetThemSpeak #MindfulParenting #ChildConfidence #ParentingSupport #ShyKids #ConsciousParenting #ChildPsychology #RaisingKids
```

**Закреплённый комментарий:** «Отвечаете за ребёнка, когда его о чём-то спрашивают напрямую? Как часто замечаете это за собой?»

---
---

# Сценарий 8 — «Кривой росток»

**Герой:** Sunny · **Локация:** школьная теплица · **Предмет-символ:** росток в йогуртовом стаканчике · **Хук:** взрослые руки вынимают кривой росток и сажают заново ровно

## Концепт и виральный угол
Sunny с гордостью сажает кривой росток грязными руками. Мама искренне хочет помочь — пересаживает его идеально ровно и моет Sunny руки. Sunny больше не тянется к новому стаканчику. Мама садится рядом и убирает свои руки за спину.

Growth-угол: это самая «безобидная» и узнаваемая вина в подборке — перфекционизм из любви — поэтому она бьёт по самой широкой аудитории родителей, не вызывая защитной реакции («я же не злюсь на ребёнка, я просто помогаю»).

## Оверлей-хук (0–1.5 сек)
`Она гордилась кривым ростком. Мы сделали его "правильным" за 10 секунд.`

## Палитра
Запотевшее стекло `#D6E6DE`, листва `#4C7A5A`, земля `#4A3B2E`, конденсат `#B8C7C1`, стаканчик `#EFD97A`, росток `#8CC26A`, стол `#7E6B52`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @sunny_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "The Crooked Sprout"

LOCATION MAP: FOREGROUND — the wooden potting table with cups and soil. MIDGROUND — other children and parents planting. BACKGROUND — fogged greenhouse glass with condensation. Light source: soft diffused daylight through fogged glass, humid and slightly cool.

CHARACTER REFERENCE: @sunny_ref is the only source of truth for Sunny's face, hair, and proportions. SUNNY: girl 5–7, chestnut hair in two low ponytails, denim jacket, turquoise sweater, jeans, white sneakers; hands dirty from panel 1 until wiped clean, then clean until the final panel where dirty again. Performance: pride, confusion, restrained disappointment, quiet sadness, cautious courage — never theatrical.

MOTHER: loving, well-organized woman, 32–38, light brown neat ponytail, sage cardigan, white blouse, dark jeans, clean sneakers, a folded cloth in her pocket. Identical in every panel. Caring and helpful; her perfectionism is affectionate, never hostile.

STYLE: premium stylized 3D animated feature-film quality, detailed soil and plant materials, condensation on glass, humid atmosphere, cinematic depth of field. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: fogged glass #D6E6DE, foliage #4C7A5A, soil #4A3B2E, condensation #B8C7C1, cup #EFD97A, sprout #8CC26A, table #7E6B52. No warm golden light, no direct sunbeams, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, small dirty hands patting soil around a crooked sprout; adult hands enter and pull the sprout out. Hook.
PANEL 2 — wide shot, greenhouse, children and parents planting along the table.
PANEL 3 — Sunny finishes her cup with visible pride, soil everywhere, sprout leaning, hands black.
PANEL 4 — the mother takes the cup, replants the sprout perfectly straight, presses the soil firmly.
PANEL 5 — she wipes the rim of the cup clean, sets the corrected result on the table.
PANEL 6 — she gently wipes Sunny's hands clean, still smiling, still helping. No phone anywhere.
PANEL 7 — Sunny's face among other children and parents, small brave smile, hides clean hands behind her back. No tears yet.
PANEL 8 — wide shot, other children plant messily and laugh, Sunny stands still, no new cup.
PANEL 9 — she reaches toward a second empty cup, hesitates, pulls her hand back.
PANEL 10 — macro close-up of the corrected plant: perfectly straight, one lower leaf broken, soil pressed too hard.
PANEL 11 — wide shot, class ends, other families leave, greenhouse nearly empty, condensation running down the glass.
PANEL 12 — TRIGGER, tight close-up, brave smile gone, she looks at her own clean hands, eyes shining. No sobbing.
PANEL 13 — the mother sees Sunny's reflection in the fogged glass, quiet realization.
PANEL 14 — she kneels beside her, pushes an empty cup and soil tray toward Sunny, puts her own hands behind her back.
PANEL 15 — the mother's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Sunny"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, two cups side by side: one straight with a broken leaf, one freshly planted and crooked; Sunny's hands dirty again, mother's hands dirty too.

CONTINUITY: one first cup with one sprout stays permanently straight with a broken leaf; one second cup planted at the end. Track hand cleanliness precisely: dirty 1–5, clean 6–15, dirty again 16.

TEXT RESTRICTIONS: no plant labels, seed packets, instruction posters anywhere. Only exception: panel 15 whitelist.

NEGATIVE: no Truey, no Crafty, no apartment, no direct sunbeams, no phone before panel 15, no tears before panel 12, no repaired leaf, no mother planting the second cup, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: During a school planting class, Sunny proudly plants a crooked sprout with dirty hands. Her mother, wanting to help, replants it perfectly straight and cleans Sunny's hands. Sunny reaches for a second cup, then pulls her hand back. In the emptied greenhouse, her mother sees her reflection, kneels beside her, pushes an empty cup toward her, and puts her own hands behind her back.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Sunny's face and outfit, for the mother's face and cardigan, and for the greenhouse location, palette, and the exact cup and sprout design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — the potting table, cups, soil. MIDGROUND — other children and parents, leaving mid-film. BACKGROUND — fogged condensation-covered glass. Soft humid diffused daylight throughout, no direct sunbeams.

FIRST FRAME: extreme close-up of small dirty hands patting soil around the crooked sprout, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots with macro inserts, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS. Shot 3 — 29° CU. Shot 4 — 18° macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, kneel-down move. Shot 6 — 18° macro two-shot on both pairs of hands.

CAMERA: eye-level, macro inserts on hands and soil, otherwise stable, consistent table geography.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. Small dirty hands pat soil around the crooked sprout; adult hands enter and pull it out of the soil; rack focus to Sunny's proud face freezing — the correction must read within the first second.
2.0s–4.5s — SHOT 2, THE HELPFUL CORRECTION. The mother replants the sprout perfectly straight, presses the soil firmly, wipes the cup rim, sets the result on the table, gently cleans Sunny's hands. Warm, efficient, well-meant, never holding a phone, never scolding.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Sunny holds a small brave smile as other children plant messily and laugh behind her; she hides her clean hands behind her back, reaches toward a second empty cup, hesitates.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. The class ends, families leave, condensation runs down the glass. TRIGGER FRAME at approximately 8.1s: on one exact frame Sunny's hand pulls back from the second cup precisely as her mother wipes the last smear of soil off her own fingers with the cloth — both hand movements lock to the same instant. Sunny looks at her clean palms, brave smile gone, tears gather silently. No sobbing.
9.3s–12.3s — SHOT 5, THE MOTHER NOTICES. The mother sees Sunny's reflection in the fogged glass, kneels beside her, pushes an empty cup and soil tray toward her, deliberately puts her own hands behind her back. No demonstration, no lecture. Sunny looks at the cup, then at her mother.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the mother's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. She taps "Start", puts the phone away. End on two cups side by side, one straight with a broken leaf, one crooked and fresh, both pairs of hands dirty again.

PERFORMANCE: Sunny — pride and confusion, a small brave smile in public, silent tears only after the trigger frame, cautious courage reaching for soil again at the end. Mother — warm helpful efficiency, dropping into quiet realization and restraint at shot 5, never hostile.

PHYSICS: soil crumbles and presses realistically; the broken leaf never repairs; nothing blooms instantly. The cups keep their exact shape, never duplicated beyond the two established ones.

WARDROBE: Sunny — exact denim jacket, sweater, jeans, sneakers from @image1. Mother — exact cardigan, blouse, jeans, sneakers, cloth from @image1.

LIGHTING: fogged glass #D6E6DE, foliage #4C7A5A, soil #4A3B2E, condensation #B8C7C1, cup #EFD97A, sprout #8CC26A, table #7E6B52. Soft humid diffused daylight throughout, no direct sunbeams.

AUDIO: greenhouse ambience, soil crumbling, water drops on glass, a watering can, distant children with no recognizable words, a door closing as the class leaves, quiet humid room tone. Minimal restrained score turning gently hopeful at the end. No narration, no dialogue, no lyrics.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist.

POSITIVE LOCKS: Sunny's and the mother's faces, wardrobe stay 100% identical to @image1. Two cups only, the broken leaf never repairs, nothing blooms instantly. Trigger frame — Sunny's hand pulling back and the mother's last wipe — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame.
```

## Публикация в Instagram
**Подпись:**
She planted it crooked, with soil everywhere and black hands. We fixed it in ten seconds, out of love. Then she stopped reaching for the next cup.
Sometimes helping means putting our own hands behind our back.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните — самая узнаваемая вина в этой подборке.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #LetThemTry #MindfulParenting #PerfectionismInParenting #ChildIndependence #ParentingSupport #GentleParenting #ChildDevelopment #FamilyMoments
```

**Закреплённый комментарий:** «Часто "докручиваете" за ребёнка то, что он сделал сам? По-честному.»

---
---

# Сценарий 9 — «Порванная лямка»

**Герой:** Crafty · **Локация:** платформа метро вечером · **Предмет-символ:** лямка рюкзака · **Хук:** детские пальцы сжимают порванную лямку, чтобы рюкзак не упал, и поднимает голову с улыбкой

## Концепт и виральный угол
У Crafty оторвалась лямка рюкзака. Он хочет сказать, но видит, что мама на пределе после рабочего дня, и молчит. Всю дорогу держит лямку пальцами и улыбается, когда на него смотрят. Когда поезд уходит и платформа пустеет, мама видит и лямку, и его лицо.

Growth-угол: самая болезненная для родителя мысль во всей подборке — «он не рассказал, потому что берёг меня» — вызывает не защиту, а немедленное узнавание и часто слёзы в комментариях, что двигает охваты сильнее, чем что-либо ещё.

## Оверлей-хук (0–1.5 сек)
`У него порвалась лямка. Он промолчал — мама и так на пределе.`

## Палитра
Плитка платформы `#2F5F63`, свет ламп `#DCE7E6`, бетон `#7B8481`, тоннель `#14201F`, кожа рюкзака `#7A5A3C`, толстовка `#2F4A34`, стекло вагона `#3E5B60`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @crafty_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "The Torn Strap"

LOCATION MAP: FOREGROUND — the platform edge near Crafty and his mother. MIDGROUND — tired commuters, an arriving and departing train. BACKGROUND — the black tunnel. Light source: cold artificial platform light, teal tiles, no warm lamps.

CHARACTER REFERENCE: @crafty_ref is the only source of truth for Crafty's face, glasses, hair, and proportions. CRAFTY: boy 6–8, round glasses, chestnut hair brushed upward, dark green hoodie with letter "M", brown corduroy trousers, white sneakers, brown leather backpack with a torn strap. Performance: hesitation, protective silence, restrained strain, quiet sadness, cautious relief — never theatrical.

MOTHER: loving, deeply exhausted woman, 33–39, dark hair in a loosening low bun, long gray wool coat, black work bag, dark trousers, flat ankle boots. Identical in every panel. Her exhaustion reads as fatigue and stress, never as anger or rejection.

STYLE: premium stylized 3D animated feature-film quality, detailed worn leather, realistic tiled surfaces, train wind in hair and clothes, cinematic depth of field. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: platform tiles #2F5F63, cold light #DCE7E6, concrete #7B8481, tunnel #14201F, leather #7A5A3C, hoodie #2F4A34, train glass #3E5B60. No warm golden light, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, small fingers pinching a torn leather strap together so the bag doesn't fall. Hook.
PANEL 2 — close-up, Crafty looking up with an instant small smile, glasses catching the cold light.
PANEL 3 — wide shot, platform, commuters waiting, his mother beside him with a work bag, shoulders low.
PANEL 4 — Crafty turns toward her, starts to open his mouth, one hand still on the strap.
PANEL 5 — the mother exhales heavily, closes her eyes for a second, presses her temples. Pure fatigue, no phone in her hands.
PANEL 6 — Crafty closes his mouth, quietly turns the backpack so the torn side faces away.
PANEL 7 — Crafty's face among commuters, small brave smile, grips the strap tighter. No tears yet.
PANEL 8 — the train arrives, wind moves his hair and hoodie, he keeps holding the strap.
PANEL 9 — a passenger brushes past him, he grips harder, the tear widens slightly.
PANEL 10 — macro close-up of leather fibers separating, stitching pulled loose.
PANEL 11 — wide shot, passengers board, the train leaves, platform nearly empty.
PANEL 12 — TRIGGER, tight close-up, brave smile gone, he looks down at the strap in his fist, eyes shining behind his glasses. No sobbing.
PANEL 13 — the mother sees the torn strap and his face reflected in the tiled wall and train glass, tension dropping.
PANEL 14 — she crouches to his eye level, takes the weight of the backpack out of his hand. No scolding, no tape.
PANEL 15 — the mother's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Crafty"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, the mother carries the backpack by its intact strap over her own shoulder, sits beside Crafty on a bench, the tear still there.

CONTINUITY: one single leather backpack with one torn strap throughout; the tear starts small, widens slightly, stays torn at the end.

TEXT RESTRICTIONS: no station names, route maps, advertisements anywhere. Only exception: panel 15 whitelist plus the "M" on the hoodie.

NEGATIVE: no Sunny, no Truey, no apartment, no phone before panel 15, no shouting, no danger at the platform edge, no tears before panel 12, no repaired strap, no tape, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: On an evening metro platform, the strap of Crafty's leather backpack has torn. He wants to tell his mother, but she has just finished an exhausting workday and is visibly at her limit. He hides the tear and holds the strap together with his fingers while smiling whenever anyone looks. When the train leaves and the platform empties, his mother sees the torn strap and his face, crouches down, takes the weight of the backpack, and listens.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Crafty's face, glasses, and backpack, for the mother's face and coat, and for the platform location, palette, and the exact tear design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — the platform edge near both characters. MIDGROUND — commuters and the train, gradually leaving. BACKGROUND — the black tunnel. Cold artificial light throughout, no warm lamps.

FIRST FRAME: extreme close-up of small fingers pinching the torn leather strap together, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots with macro inserts and reflection framing, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS two-shot. Shot 3 — 29° CU with an 18° macro insert. Shot 4 — 18° macro easing to 29° CU at the trigger frame. Shot 5 — 47° MS, crouch-down move. Shot 6 — 47° MS.

CAMERA: eye-level, reflection framing in the tiled wall and train glass, otherwise stable, consistent platform geography.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. Small fingers pinch the torn strap together so the bag doesn't fall; rack focus to Crafty looking up and instantly producing a small smile — the hidden effort must read within the first second.
2.0s–4.5s — SHOT 2, THE SWALLOWED SENTENCE. Crafty turns toward his mother, starts to open his mouth; she exhales heavily, closes her eyes, presses her temples — pure fatigue, no phone. He closes his mouth and quietly turns the backpack so the tear faces away.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Crafty holds a small brave smile among tired commuters, gripping the strap tighter; the train arrives, wind moves his hair; a passenger brushes past and he grips harder; macro insert of leather fibers separating.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. Passengers board, the train leaves, the platform empties into deep quiet. TRIGGER FRAME at approximately 8.5s: on one exact frame the stitching finally gives way, the tear widening, precisely as the train doors close fully behind the last boarding passenger — both events lock to the same instant. His brave smile disappears and tears gather silently behind his glasses. No sobbing.
9.3s–12.3s — SHOT 5, THE MOTHER NOTICES. The mother sees the torn strap and his face reflected in the tiled wall and departing train glass; her exhaustion turns into quiet realization, shoulders softening. She crouches to his eye level and takes the weight of the backpack out of his hand. No scolding, no tape. He finally shows her the tear and speaks. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the mother's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. She taps "Start", puts the phone away. End with her carrying the backpack by its intact strap over her own shoulder, sitting beside Crafty on the bench, the tear still visible.

PERFORMANCE: Crafty — hesitation and protective silence, a small brave smile in public, silent tears only after the trigger frame, cautious relief at the end. Mother — pure fatigue and stress throughout, never anger, dropping into quiet realization and softened presence at shot 5.

PHYSICS: the leather strap tears with real fiber and stitching detail; it widens once under stress and never repairs itself. Wind from the arriving/departing train moves hair and fabric naturally.

WARDROBE: Crafty — exact glasses, hoodie with "M", trousers, sneakers, backpack from @image1. Mother — exact coat, work bag, trousers, boots from @image1.

LIGHTING: platform tiles #2F5F63, cold light #DCE7E6, concrete #7B8481, tunnel #14201F, leather #7A5A3C, hoodie #2F4A34, train glass #3E5B60. Cold artificial light throughout, no warm lamps, no daylight.

AUDIO: metro ambience, an approaching train with rising wind, brakes, doors, footsteps, a departure signal without speech, deep tunnel reverb after the train leaves, one quiet leather-and-stitching sound as the tear widens. Minimal restrained score turning gently reassuring at the end. No narration, no dialogue, no lyrics, no station announcements with words.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist and the "M" on the hoodie.

POSITIVE LOCKS: Crafty's and the mother's faces, wardrobe stay 100% identical to @image1. One single torn strap, never repaired or taped. Trigger frame — stitching giving way and the train doors closing — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame. The mother must never look angry, only tired and then present.
```

## Публикация в Instagram
**Подпись:**
His backpack strap tore on the way home. He held it together with his fingers and said nothing.
Not because he was afraid of us. Because he saw how tired we were.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните — детям не должно приходиться беречь нас.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #ParentalBurnout #MindfulParenting #EmotionalSafety #WorkingParents #ParentingSupport #ChildPsychology #GentleParenting #FamilyConnection
```

**Закреплённый комментарий:** «Ваш ребёнок когда-нибудь молчал о проблеме, потому что видел, что вы устали? Как узнали об этом?»

---
---

# Сценарий 10 — «Сердце в чемодане»

**Герой:** Crafty · **Локация:** выход на посадку в аэропорту · **Предмет-символ:** бумажное сердечко-брелок · **Хук:** детская ладонь протягивает сердечко, а взрослая рука занята чемоданом

## Концепт и виральный угол
Папа улетает в командировку. Crafty делает бумажное сердечко-брелок с рисунком. Папа берёт его, не глядя, и машинально убирает в карман чемодана. В очереди на посадку он тянется за сердечком и не находит его — оборачивается и видит опущенную руку сына.

Growth-угол: самая «вежливая» и от того самая грустная вина — подарок принят с улыбкой, но не увиден. Аэропорт даёт естественный таймер (очередь на посадку), который держит напряжение до последней секунды ролика.

## Оверлей-хук (0–1.5 сек)
`Он сделал сердечко сам. Мы убрали его в карман чемодана, не взглянув.`

## Палитра
Серо-голубой свет `#C6D3DC`, терминал `#F1F4F6`, окна/небо `#E3EDF2`, кресла `#3E4E5E`, чемодан `#40464C`, бумажное сердечко `#D9614F`, кожа рюкзака `#7A5A3C`, экран приложения — стандартный.

## Prompt A — раскадровка (GPT Image 2)

```text
Use @crafty_ref as the only identity source. Create one single vertical 9:16 storyboard sheet, exactly 16 panels in a 4-column by 4-row grid, evenly sized, numbered 1 to 16 inside the gutters only, left to right, top to bottom.

STORY TITLE: "The Heart in the Suitcase"

LOCATION MAP: FOREGROUND — Crafty, his father, and the suitcase near the gate. MIDGROUND — the boarding line and rows of seats, emptying over time. BACKGROUND — large windows with aircraft silhouettes. Light source: pale gray-blue morning light through large terminal windows, no warm interior lamps.

CHARACTER REFERENCE: @crafty_ref is the only source of truth for Crafty's face, glasses, hair, and proportions. CRAFTY: boy 6–8, round glasses, chestnut hair brushed upward, dark green hoodie with letter "M", brown corduroy trousers, white sneakers, brown leather backpack. Performance: hope, brave politeness, quiet sadness, cautious warmth — never theatrical.

FATHER: loving, preoccupied man, 34–40, dressed for business travel, short dark hair, light stubble, dark gray wool coat, light blue shirt, navy trousers, dark leather shoes, charcoal cabin suitcase, plain unmarked travel card. Identical in every panel. Warm and rushed, never cold or dismissive on purpose.

MOTHER: a quiet secondary presence a few steps behind Crafty, beige coat, stays in the background.

STYLE: premium stylized 3D animated feature-film quality, detailed coat and paper materials, large windows with soft light, cinematic depth of field. Original style, no imitation of any named studio.

LIGHTING AND PALETTE: gray-blue light #C6D3DC, terminal surfaces #F1F4F6, windows/sky #E3EDF2, seating #3E4E5E, suitcase #40464C, paper heart #D9614F, backpack leather #7A5A3C. No warm golden light, no sunrise glow, no blue app palette.

PANEL PLAN:
PANEL 1 — extreme close-up, a small open palm holds a handmade paper heart keychain; an adult hand, already holding a suitcase handle and a travel card, reaches for it without stopping. Hook.
PANEL 2 — wide shot, the gate, pale morning light, the boarding line starting to move.
PANEL 3 — the father takes the heart with a quick warm smile, slips it into his coat pocket without looking at the drawing.
PANEL 4 — Crafty starts explaining what's drawn on it, pointing with one finger, real hope on his face.
PANEL 5 — the line moves, the father ruffles his hair affectionately, turns toward the gate. No phone anywhere.
PANEL 6 — he kneels briefly for a hug, and while checking his suitcase absent-mindedly moves the heart into the outer suitcase pocket.
PANEL 7 — macro close-up, the zipper closes over the paper heart, bending one corner.
PANEL 8 — Crafty's face among other travelers, small brave smile, raises his hand to wave. No tears yet.
PANEL 9 — wide shot, the father joins the boarding line, Crafty keeps waving, his mother stands quietly behind.
PANEL 10 — the line advances, the seating area empties.
PANEL 11 — TRIGGER, tight close-up, Crafty's hand drops mid-wave, brave smile gone, eyes shining behind his glasses. No sobbing.
PANEL 12 — in the line, the father reaches into his coat pocket for the heart, finds it empty.
PANEL 13 — he turns, sees Crafty's face through the gap in the emptying gate area, steps out of the line.
PANEL 14 — he kneels at Crafty's eye level, opens the suitcase pocket, takes out the bent paper heart, looks at the drawing for the first time while Crafty explains it.
PANEL 15 — the father's phone held low, only after contact. ChildFocus UI whitelist "ChildFocus"/"Crafty"/"Task"/"Start". If unclean, use icons.
PANEL 16 — phone away, the father puts the bent paper heart into his shirt pocket over his chest, holds Crafty's hand while boarding continues behind them.

CONTINUITY: one single paper heart keychain throughout: flat, then bent under the suitcase zipper, permanently bent afterwards.

TEXT RESTRICTIONS: no gate numbers, flight displays, boarding pass text anywhere. Only exception: panel 15 whitelist plus the "M" on the hoodie.

NEGATIVE: no Sunny, no Truey, no apartment, no sunrise glow, no phone before panel 15, no missed flight, no dramatic terminal chase, no tears before panel 11, no straightened heart, no character redesign, no extra fingers, no deformed hands.
```

## Prompt B — видео (Seedance 2.0 Pro)

```text
Use @image1 (the 16-panel storyboard) as the only source of truth for identity, composition, location, and color for one finished 15-second vertical 9:16 cinematic 3D animated short.

SCENE CONTEXT: At an airport gate, Crafty gives his departing father a handmade paper heart keychain with a drawing on it. The father takes it warmly but never looks at it, and while checking his suitcase absent-mindedly zips it into the outer pocket. Crafty waves and smiles while people are around. When the seating area empties, his hand drops. In the boarding line the father reaches for the heart, finds his pocket empty, sees his son's face, steps out of the line, and finally looks at the drawing.

ACTIVE REFERENCES: @image1 — the 16 numbered panels are the only source for Crafty's face and wardrobe, for the father's face and coat, and for the gate location, palette, and the exact paper heart design. Do not invent new characters or restyle them.

STORYBOARD NUMBER RULE: panel numbers, borders, and gutters in @image1 are production annotations only, never rendered or reacted to.

LOCATION MAP: FOREGROUND — Crafty, father, and suitcase near the gate. MIDGROUND — the boarding line and seating, gradually emptying. BACKGROUND — large windows with aircraft silhouettes. Pale gray-blue morning light throughout, no warm lamps.

FIRST FRAME: extreme close-up of a small open palm holding the paper heart keychain, matching panel 1.

FORMAT MODE: one continuous take with internal HARD CUTs at the stated seconds, combining the 16 panels into 6 connected shots with macro inserts, never a slideshow.

OPTICS: Shot 1 — 18° ECU. Shot 2 — 47° MS. Shot 3 — 18° macro insert to 29° CU. Shot 4 — 29° CU easing to 18° ECU at the trigger frame. Shot 5 — 47° MS, kneel-down move. Shot 6 — 29° CU.

CAMERA: eye-level, motivated moves only, stable framing, consistent gate geography.

ACTION:
0.0s–2.0s — SHOT 1, HOOK. A small open palm holds the paper heart with its drawing; an adult hand, already busy with a suitcase handle and a travel card, takes it without stopping and slips it into a coat pocket unlooked at; rack focus to Crafty's hopeful face.
2.0s–4.5s — SHOT 2, THE GIFT THAT WAS NEVER OPENED. Crafty starts explaining what's drawn on the heart, pointing with one finger; the line moves, the father ruffles his hair, kneels briefly for a hug, and while checking his suitcase absent-mindedly moves the heart from his coat into the outer suitcase pocket. Never holding or looking at a phone.
4.5s–6.8s — SHOT 3, PUBLIC MASK. Macro insert of the zipper closing over the paper heart, bending one corner; cut to Crafty among other travelers holding a small brave smile and waving as his father joins the boarding line; his mother stands quietly behind him.
6.8s–9.3s — SHOT 4, PRIVATE BREAK. The line advances, the seating area empties, ambient noise thins out. TRIGGER FRAME at approximately 8.2s: on one exact frame Crafty's hand drops mid-wave precisely as his father's suitcase wheel completes one full rotation while joining the line ahead — both actions lock to the same instant. His brave smile disappears and tears gather silently behind his glasses. No sobbing, no running after his father.
9.3s–12.3s — SHOT 5, THE FATHER NOTICES. In the line, the father reaches into his coat pocket for the heart, finds it empty, quiet realization; he turns and sees Crafty's face across the emptying gate area, steps out of the line, walks back, kneels at his son's eye level, opens the suitcase pocket, takes out the bent paper heart, and looks at the drawing properly for the first time while Crafty explains it. No dramatic running, no missed flight. Hold eye contact.
12.3s–15.0s — SHOT 6, SMALL STEP. About one second of the father's phone held low, first phone in the film. Minimal ChildFocus UI, whitelist words only. He taps "Start", puts the phone away. End with the father putting the bent paper heart into his shirt pocket over his chest, holding Crafty's hand while boarding continues behind them. The heart stays bent, the trip still happens.

PERFORMANCE: Crafty — hope and brave politeness, a small brave smile in public, silent tears only after the trigger frame, cautious warmth at the end. Father — genuine warmth and travel distraction, dropping into quiet realization and full presence at shot 5, never cold or dismissive on purpose.

PHYSICS: the paper heart is light and creases permanently once bent under the zipper; it never straightens. The suitcase wheel and zipper move with real mechanical weight.

WARDROBE: Crafty — exact glasses, hoodie with "M", trousers, sneakers, backpack from @image1. Father — exact coat, shirt, trousers, shoes, suitcase, travel card from @image1. Mother — beige coat, secondary presence only.

LIGHTING: gray-blue light #C6D3DC, terminal surfaces #F1F4F6, windows/sky #E3EDF2, seating #3E4E5E, suitcase #40464C, paper heart #D9614F, leather #7A5A3C. Pale gray-blue morning light throughout, no warm lamps, no sunrise glow.

AUDIO: terminal ambience, rolling suitcase wheels, distant aircraft, footsteps on hard floor, a boarding chime without words, a zipper closing, quiet breathing, thinning crowd noise. Minimal restrained score turning gently warm at the end. No narration, no dialogue, no lyrics, no spoken announcements.

STYLE: fully photoreal-quality 3D cartoon animated movie look, cinematic, original design, never imitating a named studio.

OUTPUT SETTINGS: 9:16 vertical, 15 seconds, real-time speed throughout, no on-screen text besides the shot-6 whitelist and the "M" on the hoodie.

POSITIVE LOCKS: Crafty's and the father's faces, wardrobe stay 100% identical to @image1. One single paper heart, permanently bent once creased, never straightened or duplicated. Trigger frame — Crafty's hand dropping and the suitcase wheel completing its rotation — happens on one synchronized instant. No phone before 12.3s. No tears before the trigger frame. No missed flight, no cancelled trip.
```

## Публикация в Instagram
**Подпись:**
He made it himself and held it out with both hands. We took it, smiled, and zipped it into a suitcase pocket without ever looking at the drawing.
A gift from a child is a sentence. It only counts if someone reads it.
**ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.
Сохраните этот пост перед следующей командировкой или отъездом.

**Хэштеги:**
```text
#ChildFocus #childfocusai #parenting #momlife #WorkTrip #MindfulParenting #ParentingSupport #ChildEmotions #LongDistanceParenting #ConsciousParenting #FamilyConnection #RaisingKids
```

**Закреплённый комментарий:** «Смотрели по-настоящему на последний подарок, который вам подарил ребёнок? Не отписываясь "спасибо, милый".»

---
---

## 7. Финальный производственный чек-лист

1. Сначала сгенерировать три карты персонажей (`Prompt 0.1–0.3`) один раз и сохранить как референсы — без них лица героев «поплывут» между сценариями.
2. Прогнать раскадровку (`Prompt A`) в GPT Image 2 с приложенной картой нужного героя, проверить по чек-листу: телефон только в панели 15, слёзы только после триггер-панели (11–13 в зависимости от сценария), предмет-символ не меняет форму сам, локация пустеет к финалу.
3. Прогнать видео (`Prompt B`) в Seedance 2.0 Pro с раскадровкой как `@image1`, тестировать в 480–720p, финал собирать в 1080p. Kling 3.0 — запасной вариант, если лица/эмоции держатся хуже.
4. При расхождениях — правка вторым сообщением в тот же чат, а не перегенерация с нуля.
5. Готовое видео (без текста и музыки со словами) отдать на монтаж: наложить оверлей-хук первых 1.5 сек, трендовый звук под немой SFX-рендер, обложку — кадр до триггера.
6. Публиковать не чаще одного сценария в 2–3 дня, чередуя героя/локацию, чтобы лента @childfocusai не выглядела монотонной.
7. В первый час после публикации — оставить закреплённый комментарий-вопрос (указан под каждым сценарием) для стимулирования обсуждения.

## 8. Метрики роста, которые стоит отслеживать по каждому ролику

- Досмотр до конца (retention) — главный сигнал алгоритма Reels.
- Соотношение сохранений к просмотрам (saves/views) — показывает, что тема «болит» и вернутся пересмотреть.
- Соотношение репостов в директ к просмотрам — показывает узнаваемость («это про нас»).
- Прирост подписчиков за 48 часов после публикации конкретного ролика — прямой показатель, работает ли CTA на подписку.
- Комментарии-признания («и у нас так было») — качественный сигнал, что хук и подпись выбрали правильную боль.

По итогам первых 3–4 опубликованных сценариев стоит сравнить эти метрики между историями и в следующей партии сценариев усиливать тот тип хука (физический жест / словесный ярлык / упущенный момент), который дал лучший retention и лучший saves/views.
