# ChildFocus — 10 сценариев вирусных 3D-мультиков

Документ содержит 10 независимых сценариев для коротких вертикальных 3D-мультиков (15 секунд, 9:16) для продвижения приложения ChildFocus в Instagram.

Каждый сценарий самодостаточен: концепт, настройки Syntx.ai, палитра, промпт раскадровки, промпт видео, описание для Instagram и хэштеги. Промпты можно копировать целиком, без склейки с другими разделами.

Все сценарии используют разные локации, разные палитры, разные предметы-символы и разные механики родительской вины. Ни один не повторяет квартиру с тёплым вечерним светом и ни один не строится на том, что родитель залип в телефоне.

---

## Оглавление

| № | Название | Герой | Локация | Механика вины | Предмет-символ |
|---|---|---|---|---|---|
| 1 | Второе место | Truey | школьный спортзал | хвалят только за победу | серебряная лента |
| 2 | Ещё минуточку | Sunny | ночная прачечная | бесконечное «сейчас, минутку» | самодельная закладка |
| 3 | Он стёр себя | Crafty | детская поликлиника | сравнение с другим ребёнком | семейный рисунок |
| 4 | Плитка шоколада | Sunny | ночной супермаркет | детский подарок молча возвращают на полку | открытка для больной подруги |
| 5 | Он просто боится | Truey | крытый бассейн | страх обесценили как ерунду | плавательные очки |
| 6 | Билет на первый круг | Sunny | каток | взрослый разговор поверх детского момента | самодельный билет |
| 7 | Он хотел сказать сам | Truey | барбершоп | родитель отвечает за ребёнка | вырезка с причёской |
| 8 | Кривой росток | Sunny | школьная теплица | родитель переделывает работу «как надо» | росток в стаканчике |
| 9 | Порванная лямка | Crafty | платформа метро | ребёнок прячет проблему от уставшего родителя | лямка рюкзака |
| 10 | Сердце в чемодане | Crafty | выход на посадку | подарок приняли, но не посмотрели | бумажное сердечко |

---

## Общие правила для всех сценариев

Эти правила уже вшиты в каждый промпт ниже. Раздел нужен для контроля, а не для копирования.

### NO ON-SCREEN TEXT RULE

В кадре запрещён любой читаемый текст: субтитры, титры, надписи, плавающие слова, случайные буквы, постеры, вывески, номера маршрутов, автомобильные номера, вотермарки, титры в конце.

### CONTROLLED PHONE UI TEXT EXCEPTION

Читаемый текст разрешён только на экране телефона и только по белому списку: `ChildFocus`, имя ребёнка, `Task`, `Start`, `75%`. Если модель не отрисовывает эти слова чисто, они заменяются иконками, а не выдуманными буквами.

### STORYBOARD NUMBER RULE

Живёт внутри видео-промпта, не отдельным блоком. Цифры, рамки, гаттеры и сетка раскадровки — служебные метки. Их нельзя рендерить и на них нельзя реагировать. Если нумерация сбилась, порядок читается слева направо, сверху вниз.

### Палитра приложения

Из `lib/theme/app_theme.dart`, зелёно-мятная, не синяя.

- `#00985E` primary green, `#00CE7F` bright, `#007A4D` deep
- `#FFFFFF`, `#F5F5F5`, `#F3F3F3`, `#F2F2F7`
- мятные карточки `#E5F7F0`, `#EBF9F3`
- текст `#1A1A1A` / `#333333` / `#666666`
- разделители `#E8E8E8` / `#E0E0E0`

### Герои

Референс героя — единственный источник правды для лица, причёски, одежды и пропорций. Мелкие надписи на одежде упрощаются до одной буквы, бренды на обуви убираются.

- **Sunny** — девочка 5–7 лет, каштановые волосы в двух низких хвостиках, джинсовка, бирюзовый свитер, синие джинсы, белые кроссовки.
- **Truey** — мальчик 6–8 лет, крупные карие глаза, тёплые каштановые волосы уложены вверх, оливковая толстовка на молнии, тёмно-серая футболка, брюки-джоггеры цвета тауп, белые кроссовки с зелёными вставками.
- **Crafty** — мальчик 6–8 лет, круглые очки, каштановые волосы зачёсаны вверх, тёмно-зелёная толстовка с большой буквой `M`, коричневые вельветовые брюки, белые кроссовки, коричневый кожаный рюкзак.

### Тон

Родитель не злодей. Он уставший, любящий, отвлечённый. Финал даёт надежду и один маленький шаг, а не волшебную таблетку. Предмет-символ никогда не чинится сам собой: помятое остаётся помятым, порванное остаётся порванным.

### Настройки Syntx.ai

Одинаковые для всех десяти сценариев.

**Раскадровка:** Images → GPT Image 2, 9:16, High, 4K, приложить референс героя. Результат: одна вертикальная простыня 4×4, 16 пронумерованных кадров.

**Видео:** Video → Seedance 2.0, режим Pro, 9:16, 15 секунд, 480p или 720p для теста и 1080p для финала. Раскадровка подставляется как `@image1`. Kling 3.0 — запасной вариант, если Seedance плохо держит эмоции и лица.

Видео заливается сразу, без монтажа, оверлеев и постобработки.

---
---

# Сценарий 1 — «Второе место»

**Герой:** Truey
**Локация:** школьный спортзал после соревнования
**Свет:** холодный дневной свет из верхних окон, часть ламп уже выключена
**Предмет-символ:** серебряная лента за второе место
**Механика вины:** родитель радуется только победе, поэтому ребёнок начинает прятать всё, что не первое место
**Хук 0–3 сек:** детские руки складывают ленту всё мельче и заталкивают её в кроссовок

## Концепт

Truey занял второе место. Он не проиграл, он просто не выиграл.

Папа искренне и громко радуется победителю, дружелюбно поздравляет чужую семью и по-доброму треплет Truey по волосам, почти не глядя на ленту в его руке.

Truey держит лицо, пока в зале люди. Он складывает ленту вчетверо, потом ещё раз, и прячет её в кроссовок.

Зал пустеет. Смятая лента выпадает на пол. Папа поднимает её, расправляет и впервые смотрит на неё как на что-то важное.

## Почему это может сработать

- Хук читается мгновенно: ребёнок прячет собственную награду.
- Триггер узнаваемый и не обвиняющий: родитель радовался, а не ругал.
- Складки на ленте остаются до конца — визуальное доказательство, что момент нельзя отменить, но можно заметить.
- Финал не обещает победы, он обещает внимание к попытке.

## Палитра

- пол спортзала: `#D9C7A3`
- верхний холодный свет: `#E8EEF2`
- разметка площадки: `#2E6E8E`
- стены и маты: `#C8CCC6`
- глубокие тени: `#3A3630`
- лента за второе место: `#B9C2C9` с синей тесьмой `#4A6FA5`
- золотая медаль другого ребёнка: `#D4AF37`
- экран приложения: `#FFFFFF`, `#E5F7F0`, `#00985E`, `#00CE7F`, `#1A1A1A`

## Prompt 1 — раскадровка (GPT Image 2)

```text
Create one single vertical 9:16 cinematic storyboard sheet with exactly 16 panels in a clean 4-column by 4-row grid. Number the panels 1 to 16 inside the storyboard gutters only. Keep all panels evenly sized and arranged left to right, top to bottom.

STORY TITLE:
“Second Place”

STORY CONCEPT:
A short emotionally resonant 3D animated story about Truey and his father after a school sports competition.

Truey finishes second. His father is genuinely happy and warm, but his excitement visibly belongs to the winner. He congratulates the winning child and that family, and gives Truey only a quick affectionate pat without looking at the silver ribbon in his hand.

While people are still in the hall, Truey keeps a brave smile. He folds the ribbon smaller and smaller and hides it inside his sneaker.

When the hall is almost empty, the crumpled ribbon falls out onto the floor. His father sees it, stops, kneels to Truey’s eye level, carefully unfolds it, and finally looks at it as something that matters.

CHARACTER REFERENCE:
Use the attached Truey reference image as the only source of truth for his face, hairstyle, clothing, colors, age, and proportions. Preserve his identity in all 16 panels. Do not copy the background of the reference image.

TRUEY:
A boy approximately 6–8 years old with large brown eyes, warm brown hair styled upward, an olive-green zip hoodie, a dark charcoal T-shirt, taupe jogger trousers, and white sneakers with green accents. In the competition panels he may wear the hoodie open over a plain sports shirt, but the hoodie, trousers, and sneakers must remain the same.

Remove all footwear brand marks, letters, and recognizable logos. Do not add glasses, a backpack, badges, or accessories.

His emotional performance is subtle: pride, restrained disappointment, private sadness, cautious relief. Never theatrical.

FATHER:
A loving, energetic, slightly tired man approximately 34–40 years old. Short dark hair, light stubble, a slate-gray zip jacket, a plain white T-shirt, dark jeans, gray sneakers, and a sports bag. Keep his face, clothing, hairstyle, and proportions identical in every panel. He is warm and enthusiastic, never angry, mocking, or cruel.

VISUAL STYLE:
Premium stylized 3D animated feature-film quality. Expressive but restrained faces, soft realistic skin, detailed fabric, cinematic depth of field, clean reflections on the gym floor, polished family-friendly storytelling. Use an original style and do not imitate any named studio or existing franchise.

LIGHTING AND PALETTE:
Cool daylight from high gym windows, half of the ceiling lights already switched off.

Gym floor #D9C7A3, cold overhead light #E8EEF2, court markings #2E6E8E, walls and mats #C8CCC6, deep shadows #3A3630, second-place ribbon #B9C2C9 with blue tail #4A6FA5, another child’s gold medal #D4AF37.

Do not use warm golden evening light, orange sunset, or a blue application palette.

LOCATION:
A modern unbranded school sports hall after a competition. Wooden floor, folded bleachers, mats, benches, a few families gathered. All banners, scoreboards, jerseys, medals, bags, signs, and wall graphics must be blank, abstract, or purely pictographic.

PANEL PLAN:

PANEL 1:
Extreme close-up of small hands folding a silver-blue ribbon into a tight square. Blurred celebrating families behind. Immediate emotional hook.

PANEL 2:
Wide shot of the finish area. Truey stands with the ribbon in his hand, smiling, while another child holds a gold medal nearby.

PANEL 3:
The father arrives with open arms and real joy, but his attention and gesture go toward the winning child and that family.

PANEL 4:
Truey lifts the ribbon slightly toward his father. The father gives him a quick affectionate pat on the head while still looking the other way. He must not be holding or looking at a phone.

PANEL 5:
Medium shot. Other families celebrate the winner. Truey lowers the ribbon and moves it behind his back.

PANEL 6:
Close-up of the ribbon behind his back, already creased by his fingers.

PANEL 7:
Close-up of Truey’s face with other children nearby. He holds a small brave public smile that does not reach his eyes. No tears yet.

PANEL 8:
Truey sits alone on the bench and quietly pushes the folded ribbon deep into his sneaker.

PANEL 9:
Wide shot. The hall empties, part of the lights go off, and cold window light dominates.

PANEL 10:
Truey puts the sneaker back on. The ribbon is crushed further inside. A tiny wince.

PANEL 11:
He stands to leave and the crumpled ribbon slips out of the shoe onto the floor. Tight close-up on the ribbon on the wooden floor.

PANEL 12:
The father sees the ribbon on the floor and understands where it has been. Quiet realization, concern, and love. He stops packing the bag. No anger.

PANEL 13:
The father kneels, picks up the ribbon, and carefully unfolds it. The creases stay clearly visible.

PANEL 14:
Close-up two-shot at eye level. Truey’s public smile finally disappears, eyes shining. His father looks at him, not at the result.

PANEL 15:
Natural close-up of the father’s phone held low between them, only after emotional contact. Clean ChildFocus interface in white, mint #E5F7F0, primary green #00985E, bright green #00CE7F, dark text #1A1A1A. The only readable words are “ChildFocus”, “Truey”, “Task”, “Start”. He taps “Start”. If those words cannot be rendered cleanly, replace them with simple icons.

PANEL 16:
The phone is put away and no longer visible. The father sits beside Truey on the bench in the empty hall and holds the creased ribbon open between them. The ribbon stays wrinkled. Truey is calmer, not suddenly cheerful.

CONTINUITY:
One single ribbon throughout: intact, then folded, then crumpled, then unfolded with permanent creases. Never replace it, duplicate it, iron it flat, or turn it into a gold medal.

Keep Truey’s and the father’s faces, clothes, hairstyles, scale, and screen direction consistent. Make the transition from a crowded hall in panels 2–8 to an empty hall in panels 9–16 visually obvious.

TEXT RESTRICTIONS:
Outside the storyboard panel numbers, do not render captions, speech bubbles, subtitles, titles, labels, logos, posters, scoreboards, jersey numbers, watermarks, or random letters. The only in-world text exception is panel 15 on the phone screen: “ChildFocus”, “Truey”, “Task”, “Start”.

NEGATIVE CONSTRAINTS:
No Sunny. No Crafty. No apartment. No warm golden light. No phone before panel 15. No parental anger. No scolding. No tears before panel 14. No exaggerated crying. No trophy replacing the ribbon. No flattened ribbon. No duplicate props. No shoe logos. No readable scoreboard. No text on banners. No extra fingers. No deformed hands. No character redesign.
```

## Prompt 2 — видео (Seedance 2.0 Pro)

```text
Use @image1 as the character, composition, location, color, and story reference for one finished 15-second vertical 9:16 cinematic 3D animated short.

The storyboard contains 16 reference panels, but the video must not become a 16-shot slideshow. Combine it into 6 smooth connected cinematic shots.

STORYBOARD NUMBER RULE:
All panel numbers, borders, gutters, and grid lines in @image1 are production annotations only. Never render, animate, display, mention, point at, or react to them. If a number is unclear, follow the panels visually from left to right and top to bottom. The finished video must fill the whole 9:16 frame and must never show the storyboard sheet.

CORE STORY:
After a school competition Truey finishes second. His father is genuinely happy, but his excitement belongs to the winner. Truey keeps a brave smile in front of people and hides his silver ribbon inside his sneaker. When the hall empties, the crumpled ribbon falls out. His father sees it, stops, kneels to his eye level, unfolds it, and finally gives him full attention.

EMOTIONAL RULE:
Before the ribbon falls out, Truey stays proud or keeps a small brave smile. He must not cry. After it falls out, his smile disappears, his eyes lower, tears gather silently. At the end show cautious relief, not sudden happiness.

TIMELINE:

SHOT 1 — 0.0 TO 2.0 — HOOK:
Extreme close-up of small hands folding a silver-blue ribbon into a tight square. Distant celebration is blurred behind. Quick controlled rack focus to Truey’s face holding a small proud smile. No title, no caption.

SHOT 2 — 2.0 TO 4.5 — THE MISSED MOMENT:
One smooth medium tracking shot. Truey lifts the ribbon toward his arriving father. The father opens his arms with real joy, but turns toward the winning child and that family, and gives Truey a quick affectionate pat on the head. He never touches or looks at a phone. His warmth is real, his attention is elsewhere.

SHOT 3 — 4.5 TO 6.8 — PUBLIC MASK:
Close-up on the ribbon moving behind Truey’s back and being creased by his fingers. Cut to his face with other children still nearby. He holds a small brave smile. Disappointment shows only in his eyes and breathing. He sits on the bench and pushes the folded ribbon into his sneaker.

SHOT 4 — 6.8 TO 9.3 — PRIVATE BREAK:
The hall empties, voices fade, part of the lights switch off. Truey puts on the sneaker, stands, and the crumpled ribbon slips out onto the wooden floor. One quiet moment on the ribbon on the floor, then on his face as the brave smile disappears and tears gather silently. No sobbing.

SHOT 5 — 9.3 TO 12.3 — THE FATHER NOTICES:
The father sees the ribbon on the floor and understands where it has been. His celebration energy drops into quiet realization. One smooth camera move as he kneels to Truey’s eye level, picks up the ribbon, and carefully unfolds it. The creases remain. He does not lecture, joke it away, or promise a future victory. Hold their eye contact long enough to read.

SHOT 6 — 12.3 TO 15.0 — SMALL STEP:
About one second of the father’s phone held low between them, the first phone in the entire film. Minimal ChildFocus interface in #00985E, #00CE7F, #E5F7F0, #FFFFFF, #1A1A1A. Only readable words: “ChildFocus”, “Truey”, “Task”, “Start”. He taps “Start” once and immediately puts the phone away. End with father and son sitting on the bench in the empty hall, the creased ribbon open between them.

CHARACTER CONTINUITY:
Truey keeps his exact face, large brown eyes, upward-styled warm brown hair, olive-green zip hoodie, charcoal T-shirt, taupe joggers, white sneakers with green accents, age, height, and proportions in every shot. Remove footwear logos and lettering. Do not add glasses, a backpack, or accessories.

The father keeps the same face, short dark hair, light stubble, slate-gray zip jacket, white T-shirt, dark jeans, gray sneakers, and sports bag. He is warm and tired, never hostile.

PROP CONTINUITY:
One single silver-blue ribbon. It starts intact, gets folded, gets crumpled inside the sneaker, and stays permanently creased after being unfolded. Never replace it with a medal or trophy, never duplicate it, never smooth it flat, never magically restore it.

CAMERA AND EDITING:
Only 6 connected shots with motivated movement, restrained cuts, natural rack focus, stable framing, and subtle depth of field. No slideshow, no freeze on every pose, no split screens, no time reversal, no sudden camera jumps.

LIGHTING AND COLOR:
Gym floor #D9C7A3, cold overhead light #E8EEF2, court markings #2E6E8E, walls #C8CCC6, deep shadows #3A3630, ribbon #B9C2C9 with #4A6FA5 tail, distant gold medal #D4AF37. Keep cool daylight throughout. No warm golden light, no sunset, no dramatic sun rays.

AUDIO:
Distant cheering that fades, sneaker squeaks on the wooden floor, a bouncing ball far away, bag zippers, an empty hall reverb, one soft fabric rustle when the ribbon unfolds. Minimal restrained instrumental score that becomes slightly hopeful at the end. No narration, no voice-over, no dialogue, no lyrics, no slogan.

NO ON-SCREEN TEXT RULE:
Do not generate subtitles, captions, titles, end cards, floating words, overlays, posters, banners, scoreboards, jersey numbers, credits, watermarks, readable signs, or random letters.

CONTROLLED PHONE UI TEXT EXCEPTION:
Readable text is allowed only on the physical phone screen in shot 6, strictly limited to “ChildFocus”, “Truey”, “Task”, “Start”. No other words, numbers, notifications, or status text. If clean rendering is impossible, use simple green and mint icons instead of malformed writing.

FINAL FRAME:
Phone fully put away. Father and son sitting together on the bench, the creased ribbon visible between them, empty hall around them. No logo overlay, no text, no call to action, no freeze-frame advertisement, no trophy.

NEGATIVE CONSTRAINTS:
No Sunny, no Crafty, no apartment, no warm evening light, no phone before 12.3 seconds, no parental anger, no scolding, no mocking, no crying before the ribbon falls, no exaggerated sobbing, no instant happiness, no magical smoothing of the ribbon, no medal swap, no duplicate props, no character morphing, no clothing changes, no glasses, no backpack, no shoe logos, no extra fingers, no warped hands, no storyboard numbers, no readable environmental text.
```

## Instagram caption

He didn’t lose.  
He just didn’t win.

And that was enough for him to hide the ribbon in his shoe.

Children read our excitement long before they read our words. Sometimes they need us to celebrate the try, not only the result.

**ChildFocus — one small step toward being more present.**

## Hashtags

```text
#ChildFocus #MindfulParenting #ParentingSupport #ChildConfidence #EmotionalIntelligence #RaisingKids #ParentingTips #ConsciousParenting #SelfWorth #FamilyFirst
```

---
---

# Сценарий 2 — «Ещё минуточку»

**Герой:** Sunny
**Локация:** ночная прачечная самообслуживания
**Свет:** холодный белый свет ламп и мятное свечение машин, за окном чёрная ночь
**Предмет-символ:** самодельная закладка на первой странице книги
**Механика вины:** бесконечное «сейчас, одну минутку», после которого ребёнок перестаёт просить
**Хук 0–3 сек:** закладка вынимается из первой страницы, книга закрывается

## Концепт

Мама стирает поздно вечером, потому что днём не успела. Sunny взяла с собой книгу и закладку, которую сделала сама, — ей обещали прочитать первую главу.

Она просит один раз. Мама поднимает палец: минутку. Она просит второй раз. Тот же жест, та же улыбка, та же минутка.

Sunny не обижается вслух. Она просто вынимает закладку, закрывает книгу и убирает закладку в карман. Просить больше не будет.

Мама видит это в отражении стеклянного люка машины. Она садится на пол рядом со стулом и открывает книгу прямо там, под гул барабана.

## Почему это может сработать

- Хук построен на бездействии: страница так и не перевернулась.
- Каждый родитель узнаёт свой собственный жест «сейчас, минутку».
- Момент, когда ребёнок перестаёт просить, страшнее любой истерики.
- Финал дешёвый по усилиям и потому достижимый: не идеальный вечер, а одна страница на полу прачечной.

## Палитра

- корпуса машин: `#F2F4F3`
- мятное свечение панелей: `#CFE9DF`
- ночное окно: `#1E2A2E`
- хром и барабаны: `#A9B4B8`
- пластиковые стулья: `#8E8B84`
- самодельная закладка: `#E48A6A`
- обложка книги: `#5C6E7A`
- экран приложения: `#FFFFFF`, `#E5F7F0`, `#00985E`, `#00CE7F`, `#1A1A1A`

## Prompt 1 — раскадровка (GPT Image 2)

```text
Create one single vertical 9:16 cinematic storyboard sheet with exactly 16 panels in a clean 4-column by 4-row grid. Number the panels 1 to 16 inside the storyboard gutters only. Keep all panels evenly sized and arranged left to right, top to bottom.

STORY TITLE:
“One More Minute”

STORY CONCEPT:
A short emotionally resonant 3D animated story about Sunny and her mother in a self-service laundromat late at night.

Sunny brought a book and a handmade bookmark, because she was promised the first chapter tonight. She asks once. Her mother lifts one finger with a warm smile: one minute. She asks again. Same gentle gesture, same minute.

Sunny does not protest. She quietly pulls the bookmark out of the first page, closes the book, and puts the bookmark into her pocket. She has decided not to ask again.

Her mother sees this in the reflection of the washing machine door, stops, sits down on the floor beside her chair, and opens the book right there.

CHARACTER REFERENCE:
Use the attached Sunny reference image as the only source of truth for her face, hairstyle, clothing, colors, age, and proportions. Preserve her identity in all 16 panels. Do not copy the background of the reference image.

SUNNY:
A girl approximately 5–7 years old, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, clean white sneakers. Remove all footwear brand marks and letters. Do not add glasses, a backpack, or accessories.

Her emotional performance is subtle: hope, patience, restrained disappointment, quiet sadness, cautious relief. Never theatrical.

MOTHER:
A loving, exhausted woman approximately 30–36 years old. Dark blonde hair in a messy low ponytail, an oversized gray cardigan, a plain cream T-shirt, faded jeans, simple flat shoes. She carries a laundry basket. Keep her identical in every panel. She is tired and kind, never irritated, angry, or dismissive.

VISUAL STYLE:
Premium stylized 3D animated feature-film quality. Expressive but restrained faces, soft realistic skin, detailed fabric, believable machine glass and chrome, cinematic depth of field, gentle reflections. Original style, no imitation of any named studio or franchise.

LIGHTING AND PALETTE:
Cold white ceiling light plus mint machine glow. Black night outside the windows.

Machine bodies #F2F4F3, mint panel glow #CFE9DF, night window #1E2A2E, chrome and drums #A9B4B8, plastic chairs #8E8B84, handmade bookmark #E48A6A, book cover #5C6E7A.

No warm apartment lighting, no golden light, no blue application palette.

LOCATION:
A small modern unbranded self-service laundromat at night. Row of front-loading machines, plastic chairs, folding table, vending machine with pictographic icons only. All price lists, instructions, timers, brand names, and posters must be blank, abstract, or purely pictographic. Machine displays show only simple glowing dots or icons.

PANEL PLAN:

PANEL 1:
Extreme close-up of small hands holding a handmade bookmark on the first page of a book. The page is clearly the first one and it never turns. Immediate emotional hook.

PANEL 2:
Wide shot of the night laundromat. Sunny sits on a plastic chair hugging the book. Her mother loads laundry into a machine. One other customer folds clothes in the background.

PANEL 3:
Sunny lifts the book toward her mother with a hopeful look. First ask.

PANEL 4:
The mother, arms full of laundry, smiles warmly and raises one finger: one minute. She does not look at the book. No phone anywhere.

PANEL 5:
Sunny nods, smiles, and hugs the book tighter. She is still patient.

PANEL 6:
Time has passed. The drum is spinning. Sunny asks a second time, lifting the book a little higher.

PANEL 7:
The mother, now turning a machine dial with pictographic icons, repeats the same gentle one-minute gesture without looking.

PANEL 8:
Close-up of Sunny’s face with the other customer still visible behind her. She holds a small brave smile and lowers the book to her knees.

PANEL 9:
Wide shot. The other customer leaves. The laundromat is now empty except for the two of them. Reflections in the black window.

PANEL 10:
Macro close-up. The handmade bookmark is pulled out of the first page.

PANEL 11:
Sunny quietly closes the book and slides the bookmark into her jacket pocket.

PANEL 12:
Tight close-up of Sunny. The brave smile is gone. She looks at the spinning drum, eyes shining, no sobbing.

PANEL 13:
The mother sees Sunny’s reflection in the round glass door of the machine. Quiet realization and love, not panic or guilt theatrics. The laundry stays in her hands.

PANEL 14:
The mother puts the basket down and sits on the floor beside Sunny’s chair, at her eye level, hands open. No lecture.

PANEL 15:
Natural close-up of the mother’s phone held low between them, only after contact has started. Clean ChildFocus interface in white, mint #E5F7F0, primary green #00985E, bright green #00CE7F, dark text #1A1A1A. Only readable words: “ChildFocus”, “Sunny”, “Task”, “Start”. She taps “Start”. If clean rendering is impossible, use icons instead.

PANEL 16:
The phone is away and no longer visible. The mother sits on the laundromat floor with the open book on her knees, Sunny leaning on her shoulder, the handmade bookmark back in Sunny’s hand. Laundry still spinning behind them. Unfolded laundry still waiting.

CONTINUITY:
One single book and one single handmade bookmark throughout. The bookmark keeps the same shape, color #E48A6A, and small handmade imperfection. The book must never change cover, size, or color, and must never be replaced by a tablet or phone.

Keep Sunny’s and the mother’s faces, clothes, hairstyles, and scale consistent. Make the transition from an occupied laundromat in panels 2–8 to an empty one in panels 9–16 visually obvious.

TEXT RESTRICTIONS:
Outside the storyboard panel numbers, do not render captions, subtitles, speech bubbles, titles, price lists, instructions, machine numbers, timers, posters, book title text, logos, watermarks, or random letters. The book cover must be blank or purely illustrated. The only in-world text exception is panel 15 on the phone screen: “ChildFocus”, “Sunny”, “Task”, “Start”.

NEGATIVE CONSTRAINTS:
No Truey. No Crafty. No apartment. No warm golden light. No phone before panel 15. No parental irritation. No scolding. No tantrum. No tears before panel 12. No exaggerated crying. No sleeping child. No text on the book. No readable machine display. No duplicate bookmark. No character redesign. No clothing changes. No extra fingers. No deformed hands.
```

## Prompt 2 — видео (Seedance 2.0 Pro)

```text
Use @image1 as the character, composition, location, color, and story reference for one finished 15-second vertical 9:16 cinematic 3D animated short.

The storyboard contains 16 reference panels, but the video must not become a 16-shot slideshow. Combine it into 6 smooth connected cinematic shots.

STORYBOARD NUMBER RULE:
All panel numbers, borders, gutters, and grid lines in @image1 are production annotations only. Never render, animate, display, mention, point at, or react to them. If a number is unclear, follow the panels visually from left to right and top to bottom. The finished video must fill the whole 9:16 frame and must never show the storyboard sheet.

CORE STORY:
Late at night in a laundromat, Sunny waits for the first chapter she was promised. She asks twice. Her tired mother answers both times with the same gentle one-minute gesture, never with a phone in her hand. Sunny stops asking, removes the handmade bookmark from the first page, and puts it in her pocket. Her mother sees this in the machine glass, sits down on the floor beside her, and opens the book right there.

EMOTIONAL RULE:
Before the bookmark is removed, Sunny is hopeful and patient with a small brave smile. She must not cry, whine, or protest. After the bookmark is removed, her smile disappears and tears gather silently. At the end show quiet relief, not excitement.

TIMELINE:

SHOT 1 — 0.0 TO 2.0 — HOOK:
Extreme close-up of the handmade bookmark resting on the first page of a book in small hands. The page does not turn. Slow controlled rack focus reveals Sunny’s hopeful face and the mint machine glow behind her. No title, no caption.

SHOT 2 — 2.0 TO 4.5 — FIRST AND SECOND ASK:
One fluid medium shot. Sunny lifts the book toward her mother. The mother, arms full of laundry, smiles and raises one finger: one minute. Time compresses naturally through a match cut on the spinning drum. Sunny asks again. The mother repeats the same warm gesture while turning a machine dial. She must never hold, check, or look at a phone. She is tired and loving, not irritated.

SHOT 3 — 4.5 TO 6.8 — PUBLIC PATIENCE:
Close-up of Sunny with one other customer still behind her. She keeps a small brave smile and lowers the book to her knees. Show hope draining slowly through her eyes and breathing, not through her mouth. The other customer picks up a basket and leaves.

SHOT 4 — 6.8 TO 9.3 — PRIVATE BREAK:
The laundromat is now empty and quieter. Macro close-up of the bookmark being pulled out of the first page with a soft paper sound. Sunny closes the book and slides the bookmark into her jacket pocket. Hold on her face as the brave smile disappears and tears gather silently while the drum keeps spinning. No sobbing.

SHOT 5 — 9.3 TO 12.3 — THE MOTHER NOTICES:
The mother sees Sunny’s reflection in the round glass door of the machine. She stops moving, puts down the laundry basket, and sits on the floor beside the chair at Sunny’s eye level. Her hands are calm and open. She does not lecture, apologize theatrically, or promise a better tomorrow. Sunny hesitantly takes the bookmark back out.

SHOT 6 — 12.3 TO 15.0 — SMALL STEP:
About one second of the mother’s phone held low between them, the first phone in the film. Minimal ChildFocus interface in #00985E, #00CE7F, #E5F7F0, #FFFFFF, #1A1A1A. Only readable words: “ChildFocus”, “Sunny”, “Task”, “Start”. She taps “Start” once and puts the phone away. End with the mother sitting on the laundromat floor, the book open on her knees, Sunny leaning against her shoulder, laundry still unfinished behind them.

CHARACTER CONTINUITY:
Sunny keeps her exact face, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, white sneakers, age, height, and proportions in every shot. Remove footwear logos. Do not add glasses, a backpack, or accessories.

The mother keeps the same face, dark blonde messy low ponytail, oversized gray cardigan, cream T-shirt, faded jeans, flat shoes. She is exhausted and loving, never irritated.

PROP CONTINUITY:
One single book and one single handmade bookmark in color #E48A6A with the same shape and handmade imperfection. The page never turns until the final shot. Never replace the book with a tablet or phone, never duplicate the bookmark, never change the cover.

CAMERA AND EDITING:
Only 6 connected shots with motivated movement, one match cut on the spinning drum, natural rack focus, stable framing, subtle depth of field. No slideshow, no split screens, no time reversal, no sudden jumps.

LIGHTING AND COLOR:
Machines #F2F4F3, mint glow #CFE9DF, night window #1E2A2E, chrome #A9B4B8, chairs #8E8B84, bookmark #E48A6A, book cover #5C6E7A. Keep cold night lighting throughout. No warm apartment light, no golden glow, no sunrise.

AUDIO:
Washing machine hum, spinning drum, coins and metal clicks, a distant street car, the soft thud of a laundry basket, one quiet paper sound when the bookmark slides out, empty room reverb after the customer leaves. Minimal restrained instrumental score that becomes gently hopeful at the end. No narration, no dialogue, no lyrics, no slogan.

NO ON-SCREEN TEXT RULE:
Do not generate subtitles, captions, titles, end cards, floating words, overlays, price lists, machine timers, instructions, book titles, posters, credits, watermarks, readable signs, or random letters.

CONTROLLED PHONE UI TEXT EXCEPTION:
Readable text is allowed only on the physical phone screen in shot 6, strictly limited to “ChildFocus”, “Sunny”, “Task”, “Start”. No other words, numbers, notifications, or status text. If clean rendering is impossible, use simple green and mint icons instead of malformed writing.

FINAL FRAME:
Phone fully put away. Mother on the floor, book open, Sunny against her shoulder, laundry still spinning and still unfolded. No logo overlay, no text, no call to action, no perfect tidy ending.

NEGATIVE CONSTRAINTS:
No Truey, no Crafty, no apartment, no warm light, no phone before 12.3 seconds, no parental irritation, no scolding, no tantrum, no whining, no crying before the bookmark is removed, no exaggerated sobbing, no instant happiness, no sleeping child, no duplicate bookmark, no readable text, no character morphing, no clothing changes, no extra fingers, no warped hands, no storyboard numbers.
```

## Instagram caption

She asked twice.  
Then she took the bookmark out and stopped asking.

“One minute” is honest. But children measure our love in the minutes that actually arrive.

**ChildFocus — one small step toward being more present.**

## Hashtags

```text
#ChildFocus #MindfulParenting #BedtimeStories #PresentParenting #WorkingMom #ParentingSupport #QualityTime #GentleParenting #FamilyRituals #ChildDevelopment
```

---
---

# Сценарий 3 — «Он стёр себя»

**Герой:** Crafty
**Локация:** зал ожидания детской поликлиники
**Свет:** ровный клинический свет, мятные стены, без теней-акцентов
**Предмет-символ:** карандашный рисунок семьи
**Механика вины:** сравнение с другим ребёнком, сказанное по-доброму и вслух
**Хук 0–3 сек:** ластик стирает с семейного рисунка самую маленькую фигурку

## Концепт

Crafty рисует семью, пока они ждут приёма. Рядом мама разговаривает с другой мамой, чей сын, кажется, отлично делает вообще всё.

Мама Crafty не ругает его. Она просто мягко опускает его рисунок вниз, чтобы дослушать чужую историю, и говорит про сына собеседницы что-то тёплое и восхищённое.

Crafty держит лицо. Потом берёт ластик и стирает с рисунка себя.

Когда чужая семья уходит, мама видит на бумаге пустое место с призрачным контуром. Она садится на корточки, отдаёт ему карандаш и держит лист, пока он рисует себя обратно — криво и неровно.

## Почему это может сработать

- Хук страшный и мгновенно понятный: ребёнок стирает себя из семьи.
- Механика вины бытовая: никто не кричал, просто похвалили другого.
- Призрачный контур остаётся на бумаге — сцена не притворяется, что всё исправлено.
- Финал даёт родителю конкретную роль: не рисовать за ребёнка, а держать лист.

## Палитра

- стены поликлиники: `#DCEDE6`
- пол и потолок: `#EDEFF0`
- кресла ожидания: `#A8C4D4`
- серо-зелёные тени: `#59696B`
- бумага рисунка: `#FAF7F0`
- ластик: `#E7A9A0`
- графит: `#4A4A4A`
- экран приложения: `#FFFFFF`, `#E5F7F0`, `#00985E`, `#00CE7F`, `#1A1A1A`

## Prompt 1 — раскадровка (GPT Image 2)

```text
Create one single vertical 9:16 cinematic storyboard sheet with exactly 16 panels in a clean 4-column by 4-row grid. Number the panels 1 to 16 inside the storyboard gutters only. Keep all panels evenly sized and arranged left to right, top to bottom.

STORY TITLE:
“He Erased Himself”

STORY CONCEPT:
A short emotionally resonant 3D animated story about Crafty and his mother in a pediatric clinic waiting room.

Crafty draws his family while they wait. His mother talks with another mother whose son seems to be good at everything. She is not cruel. She gently lowers Crafty’s drawing so she can keep listening, and she admires the other boy warmly and out loud.

Crafty keeps a brave face. Then he takes an eraser and rubs his own figure out of the family drawing.

When the other family is called in and the room empties, his mother sees the blank space with a faint ghost outline. She kneels, gives him back his pencil, and holds the paper steady while he draws himself back in, crooked and uneven.

CHARACTER REFERENCE:
Use the attached Crafty reference image as the only source of truth for his face, glasses, hairstyle, clothing, colors, age, and proportions. Preserve his identity in all 16 panels. Do not copy the background of the reference image.

CRAFTY:
A boy approximately 6–8 years old with round glasses, chestnut hair brushed upward, a dark green hoodie with one large letter “M”, brown corduroy trousers, white sneakers, and a brown leather backpack. The letter “M” on the hoodie is the only clothing mark allowed. Remove all footwear brand marks and any other lettering.

His emotional performance is subtle: concentration, restrained disappointment, quiet sadness, cautious relief. Never theatrical.

MOTHER:
A loving, slightly anxious woman approximately 33–39 years old. Dark hair in a low half-updo, a soft beige knit sweater, a plain white blouse collar, dark trousers, simple loafers, and a small handbag. Keep her identical in every panel. She is warm and social, never cruel, mocking, or angry.

OTHER FAMILY:
A confident mother in a navy coat and her son approximately 9–10 years old in a light gray sweater. They must be clearly secondary, never caricatured, never mean. Keep them consistent and let them leave the room after panel 9.

VISUAL STYLE:
Premium stylized 3D animated feature-film quality. Expressive but restrained faces, soft realistic skin, detailed knitwear and paper, cinematic depth of field, clean clinical surfaces. Original style, no imitation of any named studio or franchise.

LIGHTING AND PALETTE:
Even clinical daylight, soft and shadowless, slightly cold.

Clinic walls #DCEDE6, floor and ceiling #EDEFF0, waiting chairs #A8C4D4, gray-green shadows #59696B, drawing paper #FAF7F0, eraser #E7A9A0, graphite #4A4A4A.

No warm golden light, no dramatic contrast, no blue application palette.

LOCATION:
A modern unbranded pediatric clinic waiting room. Mint walls, light blue chairs, a low table with pictographic toys, a water cooler, a corridor in the background. All posters, health charts, room numbers, signs, magazines, and screens must be blank, abstract, or purely pictographic.

PANEL PLAN:

PANEL 1:
Extreme close-up of a pencil family drawing on paper. An eraser rubs out the smallest figure. Eraser crumbs on the page. Immediate emotional hook.

PANEL 2:
Wide shot of the waiting room. Crafty sits with the paper on his lap and a pencil in hand. His mother sits beside him talking with another mother whose son sits nearby.

PANEL 3:
Close-up of the drawing in progress: three simple pencil figures, mother, father, and a small boy with round glasses. It is unfinished but proud work.

PANEL 4:
The other mother speaks with visible pride about her son. Crafty’s mother listens with genuine admiration.

PANEL 5:
Crafty lifts the drawing to show it. Without looking, his mother gently lowers his hand so she can keep listening, and gives him an affectionate touch on the knee. She must not be holding or looking at a phone.

PANEL 6:
The other boy shows something he made or did. Both adults react warmly. Crafty watches from the side.

PANEL 7:
Close-up of Crafty’s face with people still around. Clinic light reflects in his round glasses. He holds a small brave smile. No tears yet.

PANEL 8:
He looks down at his three-figure drawing. His own figure is the smallest.

PANEL 9:
He starts erasing his own figure. His hand is steady and deliberate, not angry.

PANEL 10:
Macro close-up: eraser crumbs, thinning paper, and a faint ghost outline where the boy used to be.

PANEL 11:
Wide shot. The other family is called in and leaves. The waiting room is now nearly empty and very quiet.

PANEL 12:
Tight close-up of Crafty. The brave smile is gone. He stares at the empty space on the paper, eyes shining behind his glasses. No sobbing.

PANEL 13:
The mother turns, sees the drawing and the erased space, and understands. Quiet realization and love, not shock or guilt theatrics.

PANEL 14:
She kneels in front of him at eye level with open hands. She does not take the pencil, does not correct him, does not lecture. He gives her the paper.

PANEL 15:
Natural close-up of the mother’s phone held low between them, only after contact has started. Clean ChildFocus interface in white, mint #E5F7F0, primary green #00985E, bright green #00CE7F, dark text #1A1A1A. Only readable words: “ChildFocus”, “Crafty”, “Task”, “Start”. She taps “Start”. If clean rendering is impossible, use icons instead.

PANEL 16:
The phone is away and no longer visible. The mother holds the paper steady on her knees while Crafty draws himself back into the family, crooked and uneven. The erased area stays visibly rough and the ghost outline remains.

CONTINUITY:
One single drawing on one single sheet of paper throughout. The three figures keep the same positions and style. After erasing, the paper keeps a rough, thinned area with a faint ghost outline that must never disappear. Never replace the sheet with a clean one, never redraw it perfectly, never let the mother draw for him.

Keep Crafty’s glasses, hoodie letter “M”, and clothing identical in every panel. Make the transition from an occupied waiting room in panels 2–10 to an empty one in panels 11–16 visually obvious.

TEXT RESTRICTIONS:
Outside the storyboard panel numbers, do not render captions, subtitles, speech bubbles, titles, health posters, room numbers, magazine text, signs, logos, watermarks, or random letters. The drawing must contain only simple pencil figures with no names or writing. The letter “M” on Crafty’s hoodie and the phone screen in panel 15 are the only permitted text: “ChildFocus”, “Crafty”, “Task”, “Start”.

NEGATIVE CONSTRAINTS:
No Sunny. No Truey. No apartment. No warm golden light. No phone before panel 15. No parental anger. No scolding. No mocking of Crafty. No villain child. No tears before panel 12. No exaggerated crying. No clean replacement sheet. No perfect redrawn figure. No mother drawing instead of the child. No duplicate paper. No character redesign. No extra fingers. No deformed hands.
```

## Prompt 2 — видео (Seedance 2.0 Pro)

```text
Use @image1 as the character, composition, location, color, and story reference for one finished 15-second vertical 9:16 cinematic 3D animated short.

The storyboard contains 16 reference panels, but the video must not become a 16-shot slideshow. Combine it into 6 smooth connected cinematic shots.

STORYBOARD NUMBER RULE:
All panel numbers, borders, gutters, and grid lines in @image1 are production annotations only. Never render, animate, display, mention, point at, or react to them. If a number is unclear, follow the panels visually from left to right and top to bottom. The finished video must fill the whole 9:16 frame and must never show the storyboard sheet.

CORE STORY:
In a pediatric clinic waiting room Crafty draws his family. His mother, never cruel, keeps listening to another mother praising her own son, and gently lowers Crafty’s drawing to keep the conversation going. Crafty holds a brave face and then erases his own figure from the family. When the other family leaves and the room empties, his mother sees the blank space, kneels, and holds the paper steady while he draws himself back in, crooked and uneven.

EMOTIONAL RULE:
Before the erasing, Crafty is focused and hopeful with a small brave smile. He must not cry or sulk. After the erasing, his smile disappears and tears gather silently behind his glasses. At the end show cautious relief, not sudden joy.

TIMELINE:

SHOT 1 — 0.0 TO 2.0 — HOOK:
Extreme close-up of a pencil family drawing. An eraser rubs out the smallest figure, leaving crumbs and a ghost outline. Controlled rack focus lifts to Crafty’s concentrated face behind the paper. No title, no caption.

SHOT 2 — 2.0 TO 4.5 — THE COMPARISON:
One smooth medium shot in the waiting room. Crafty lifts the drawing to show his mother. She gently lowers his hand without looking, gives him a warm touch on the knee, and keeps admiring the other mother’s son. She must never hold or look at a phone. Her warmth is genuine, her attention is elsewhere. Keep the other family calm and likeable, never caricatured.

SHOT 3 — 4.5 TO 6.8 — PUBLIC MASK:
Close-up of Crafty with people still around him, clinic light reflected in his round glasses. He holds a small brave smile. His eyes go down to his own small figure in the drawing. Show disappointment only through his eyes and breathing.

SHOT 4 — 6.8 TO 9.3 — PRIVATE BREAK:
The other family is called in and the room empties. Ambient voices fade to a quiet hum. Macro shot of the eraser removing his figure with a soft dry paper sound. Hold on the ghost outline, then on his face as the brave smile disappears and tears gather silently. No sobbing.

SHOT 5 — 9.3 TO 12.3 — THE MOTHER NOTICES:
The mother turns, sees the erased space in the drawing, and understands. Her social energy drops into quiet realization. One smooth camera move as she kneels in front of him at eye level with open hands. She does not lecture, does not laugh it off, does not take the pencil. He hands her the paper. Hold their eye contact.

SHOT 6 — 12.3 TO 15.0 — SMALL STEP:
About one second of the mother’s phone held low between them, the first phone in the film. Minimal ChildFocus interface in #00985E, #00CE7F, #E5F7F0, #FFFFFF, #1A1A1A. Only readable words: “ChildFocus”, “Crafty”, “Task”, “Start”. She taps “Start” once and puts the phone away. End with her holding the paper steady on her knees while Crafty draws himself back into the family with uneven pencil lines. The erased area stays rough.

CHARACTER CONTINUITY:
Crafty keeps his exact face, round glasses, chestnut hair brushed upward, dark green hoodie with one large letter “M”, brown corduroy trousers, white sneakers, and brown leather backpack in every shot. Remove footwear logos. Never remove his glasses, never change the hoodie letter, never change his age or proportions.

The mother keeps the same face, dark low half-updo, beige knit sweater, white blouse collar, dark trousers, loafers, and handbag. She is warm and social, never hostile.

PROP CONTINUITY:
One single sheet of paper with one single pencil drawing. Three figures: mother, father, and a small boy with round glasses. After the erasing, the paper keeps a rough thinned area with a faint ghost outline that must remain visible through the final frame. Never swap in a clean sheet, never restore the erased figure automatically, never let the mother draw for him.

CAMERA AND EDITING:
Only 6 connected shots with motivated movement, restrained cuts, natural rack focus, stable framing, subtle depth of field. No slideshow, no split screens, no time reversal, no sudden jumps.

LIGHTING AND COLOR:
Clinic walls #DCEDE6, floor #EDEFF0, chairs #A8C4D4, shadows #59696B, paper #FAF7F0, eraser #E7A9A0, graphite #4A4A4A. Keep even, slightly cold clinical light throughout. No warm golden light, no dramatic beams.

AUDIO:
Quiet waiting-room ambience, distant corridor steps, a soft door, indistinct adult conversation with no recognizable words, pencil on paper, a dry eraser sound, the room going quiet after the other family leaves. Minimal restrained instrumental score that becomes slightly hopeful at the end. No narration, no dialogue, no lyrics, no slogan.

NO ON-SCREEN TEXT RULE:
Do not generate subtitles, captions, titles, end cards, floating words, overlays, health posters, room numbers, magazine text, signs, credits, watermarks, or random letters. The drawing must contain no names or writing.

CONTROLLED PHONE UI TEXT EXCEPTION:
Readable text is allowed only on the physical phone screen in shot 6, strictly limited to “ChildFocus”, “Crafty”, “Task”, “Start”. The letter “M” on the hoodie is part of the character design and is allowed. No other words, numbers, or notifications. If clean rendering is impossible, use simple green and mint icons.

FINAL FRAME:
Phone fully put away. The mother holds the paper, Crafty draws himself back in unevenly, the erased area still visible. No logo overlay, no text, no call to action, no perfect drawing.

NEGATIVE CONSTRAINTS:
No Sunny, no Truey, no apartment, no warm light, no phone before 12.3 seconds, no parental anger, no scolding, no villain child, no mocking, no crying before the erasing, no exaggerated sobbing, no instant happiness, no clean replacement paper, no perfectly redrawn figure, no missing glasses, no clothing changes, no character morphing, no extra fingers, no warped hands, no storyboard numbers, no readable environmental text.
```

## Instagram caption

Nobody shouted at him.  
Someone just praised another child a little longer.

And he quietly erased himself from the family drawing.

Comparison doesn’t motivate children. It teaches them where they rank. Sometimes all they need is for us to hold the paper while they draw themselves back in.

**ChildFocus — one small step toward being more present.**

## Hashtags

```text
#ChildFocus #StopComparing #MindfulParenting #ChildSelfEsteem #EmotionalIntelligence #ParentingSupport #ConsciousParenting #RaisingKids #ChildPsychology #FamilyLove
```

---
---

# Сценарий 4 — «Плитка шоколада»

**Герой:** Sunny
**Локация:** супермаркет поздно вечером
**Свет:** холодные люминесцентные лампы, пустые ряды, за окнами темнота
**Предмет-символ:** самодельная открытка для заболевшей подруги
**Механика вины:** то, что ребёнок хочет отдать другому, автоматически возвращают на полку
**Хук 0–3 сек:** детская рука кладёт шоколадку в тележку, взрослая рука молча ставит её обратно на полку

## Концепт

Мама заехала в магазин после работы, чтобы закрыть список дел. Sunny взяла с собой открытку, которую нарисовала для заболевшей подруги.

Она кладёт в тележку шоколадку. Мама, не глядя, возвращает её на полку. Sunny берёт снова, прижимает шоколадку к открытке и поднимает выше. Мама снова возвращает её на место и катит тележку дальше.

Мама не знает, что шоколадка была не для Sunny.

У кассы Sunny смотрит на ленту с одними взрослыми продуктами и убирает открытку в карман. На тёмном стекле дверей мама видит её лицо.

## Почему это может сработать

- Хук ритмичный и читается за секунду: положили, вернули, положили, вернули.
- Родительская вина здесь не про запрет сладкого, а про то, что мы не спросили зачем.
- Открытка с рисунком объясняет всё без единого слова на экране.
- Финал не про покупку, а про то, что взрослый развернул тележку назад.

## Палитра

- люминесцентный свет: `#F7F9F6`
- холодное свечение полок: `#BFD8C9`
- глубина рядов: `#2C3A33`
- металл тележки и стеллажей: `#9AA3A0`
- обёртка шоколада: `#A63A3A`
- бумага открытки: `#FFF3E2`
- ночное стекло дверей: `#1B2320`
- экран приложения: `#FFFFFF`, `#E5F7F0`, `#00985E`, `#00CE7F`, `#1A1A1A`

## Prompt 1 — раскадровка (GPT Image 2)

```text
Create one single vertical 9:16 cinematic storyboard sheet with exactly 16 panels in a clean 4-column by 4-row grid. Number the panels 1 to 16 inside the storyboard gutters only. Keep all panels evenly sized and arranged left to right, top to bottom.

STORY TITLE:
“The Chocolate Bar”

STORY CONCEPT:
A short emotionally resonant 3D animated story about Sunny and her mother in a supermarket late in the evening.

Sunny carries a handmade card she drew for a sick friend. She puts a chocolate bar into the shopping cart. Her tired mother, moving on autopilot through her errands, quietly puts it back on the shelf. Sunny takes it again, holds it against the card, and lifts it higher. Her mother returns it to the shelf again and keeps pushing the cart.

The mother does not know the chocolate was not for Sunny.

At the checkout, Sunny looks at a belt of adult groceries and puts the card into her pocket. In the dark glass of the exit doors, her mother finally sees her face, stops the cart, kneels, and looks at the drawing.

CHARACTER REFERENCE:
Use the attached Sunny reference image as the only source of truth for her face, hairstyle, clothing, colors, age, and proportions. Preserve her identity in all 16 panels. Do not copy the background of the reference image.

SUNNY:
A girl approximately 5–7 years old, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, clean white sneakers. Remove all footwear brand marks and letters. Do not add glasses, a backpack, or accessories.

Her emotional performance is subtle: determination, restrained disappointment, quiet sadness, cautious relief. Never theatrical.

MOTHER:
A loving, exhausted woman approximately 32–38 years old, still in work clothes. Dark brown hair in a tight low bun, a charcoal coat over a plain blouse, straight trousers, low heels, a canvas tote in the cart. Keep her identical in every panel. She is efficient and tired, never angry, never scolding, never refusing loudly.

VISUAL STYLE:
Premium stylized 3D animated feature-film quality. Expressive but restrained faces, soft realistic skin, detailed packaging surfaces without readable labels, cinematic depth of field, clean reflective floor. Original style, no imitation of any named studio or franchise.

LIGHTING AND PALETTE:
Cold fluorescent ceiling light, night outside the windows, aisles almost empty.

Fluorescent light #F7F9F6, cold shelf glow #BFD8C9, deep aisle shadow #2C3A33, cart and shelving metal #9AA3A0, chocolate wrapper #A63A3A, card paper #FFF3E2, night door glass #1B2320.

No warm golden light, no cozy lighting, no blue application palette.

LOCATION:
A modern unbranded supermarket late at night. Long aisles, reflective floor, a single cashier, one or two distant shoppers. All product labels, price tags, promotional signs, aisle numbers, posters, and screens must be blank, abstract, or purely pictographic. Packaging may use color and simple shapes only.

PANEL PLAN:

PANEL 1:
Extreme close-up. A small hand places a red-wrapped chocolate bar into the shopping cart. An adult hand immediately lifts it out. Immediate emotional hook.

PANEL 2:
Close-up of the adult hand returning the chocolate bar to the shelf without hesitation, while the cart is already moving on.

PANEL 3:
Wide shot of the night supermarket. Cold fluorescent light, empty aisles, the mother pushing the cart, Sunny half a step behind holding a handmade card.

PANEL 4:
Close-up of the card in Sunny’s hands: a simple child’s drawing of a girl lying in bed and another girl beside her, with a small heart. No letters, no writing.

PANEL 5:
Sunny takes the chocolate bar again and holds it pressed against the card, close to her chest.

PANEL 6:
She lifts both toward her mother. The mother is comparing two packages and does not look down. She must not be holding or looking at a phone.

PANEL 7:
Without looking, the mother takes the chocolate bar and puts it back on the shelf, then gently touches Sunny’s shoulder and moves on.

PANEL 8:
Close-up of Sunny’s face with a distant shopper and the cashier visible. She holds a small brave smile and lowers the card. No tears yet.

PANEL 9:
Wide shot at the checkout. The belt carries only adult groceries. Sunny watches them pass.

PANEL 10:
Macro close-up. Sunny slides the card into her jacket pocket. One corner bends against the seam.

PANEL 11:
The last shopper leaves. The area near the exit is empty and very quiet.

PANEL 12:
Tight close-up of Sunny near the dark exit doors. The brave smile is gone. She looks back toward the sweets aisle, eyes shining. No sobbing.

PANEL 13:
The mother sees Sunny’s reflection in the dark door glass. Quiet realization and love, not panic or guilt theatrics. She stops the cart.

PANEL 14:
The mother kneels to Sunny’s eye level with open hands. Sunny takes the bent card out and shows the drawing. The mother finally understands who the chocolate was for.

PANEL 15:
Natural close-up of the mother’s phone held low between them, only after contact has started. Clean ChildFocus interface in white, mint #E5F7F0, primary green #00985E, bright green #00CE7F, dark text #1A1A1A. Only readable words: “ChildFocus”, “Sunny”, “Task”, “Start”. She taps “Start”. If clean rendering is impossible, use icons instead.

PANEL 16:
The phone is away and no longer visible. Mother and daughter walk back into the aisle together. Sunny holds the chocolate bar and the bent card. The card stays bent. Cold fluorescent light unchanged.

CONTINUITY:
One single chocolate bar with the same red wrapper and the same simple shape. One single handmade card with the same drawing. After panel 10 the card keeps a visible bent corner that must never straighten. Never duplicate the card, never redraw it, never replace the chocolate with a different product, never add a second gift.

Keep Sunny’s and the mother’s faces, clothes, hairstyles, and scale consistent. Make the transition from a shop with a few people in panels 3–9 to an empty exit area in panels 11–16 visually obvious.

TEXT RESTRICTIONS:
Outside the storyboard panel numbers, do not render captions, subtitles, speech bubbles, titles, product labels, price tags, aisle numbers, promotional posters, checkout displays, receipts, logos, watermarks, or random letters. The handmade card must contain drawing only. The only in-world text exception is panel 15 on the phone screen: “ChildFocus”, “Sunny”, “Task”, “Start”.

NEGATIVE CONSTRAINTS:
No Truey. No Crafty. No apartment. No warm golden light. No phone before panel 15. No parental anger. No loud refusal. No tantrum. No begging child. No tears before panel 12. No exaggerated crying. No readable packaging. No brand logos. No duplicate card. No straightened card. No character redesign. No clothing changes. No extra fingers. No deformed hands.
```

## Prompt 2 — видео (Seedance 2.0 Pro)

```text
Use @image1 as the character, composition, location, color, and story reference for one finished 15-second vertical 9:16 cinematic 3D animated short.

The storyboard contains 16 reference panels, but the video must not become a 16-shot slideshow. Combine it into 6 smooth connected cinematic shots.

STORYBOARD NUMBER RULE:
All panel numbers, borders, gutters, and grid lines in @image1 are production annotations only. Never render, animate, display, mention, point at, or react to them. If a number is unclear, follow the panels visually from left to right and top to bottom. The finished video must fill the whole 9:16 frame and must never show the storyboard sheet.

CORE STORY:
Late at night in a supermarket, Sunny tries to buy a chocolate bar for a sick friend, carrying a handmade card she drew. Her exhausted mother, moving on autopilot through her errands, quietly puts the chocolate back on the shelf twice without ever looking at the card. Sunny keeps a brave smile in front of the cashier and the last shoppers, then puts the card away. Her mother sees her face reflected in the dark exit doors, stops, kneels, looks at the drawing, and walks back to the aisle with her.

EMOTIONAL RULE:
Before the card goes into the pocket, Sunny is determined and keeps a small brave smile. She must not beg, whine, or cry. After the card goes into the pocket, her smile disappears and tears gather silently. At the end show cautious relief, not excitement about sweets.

TIMELINE:

SHOT 1 — 0.0 TO 2.0 — HOOK:
Extreme close-up. A small hand places a red chocolate bar into the cart. An adult hand lifts it out and returns it to the shelf. The cart moves on. Repeat the gesture once more in the same fluid movement so the pattern reads instantly. No title, no caption.

SHOT 2 — 2.0 TO 4.5 — WHAT SHE WAS CARRYING:
One smooth medium tracking shot along the cold empty aisle. Sunny walks half a step behind the cart holding a handmade card with a child’s drawing of a girl in bed and another girl beside her. She presses the chocolate bar against the card and lifts both toward her mother. The mother is comparing two packages and does not look down. She must never hold or look at a phone. She puts the chocolate back, touches Sunny’s shoulder kindly, and keeps moving.

SHOT 3 — 4.5 TO 6.8 — PUBLIC MASK:
Close-up of Sunny with the cashier and one distant shopper visible. She holds a small brave smile and lowers the card. Cut to the checkout belt carrying only adult groceries while she watches them pass. Show disappointment only in her eyes and breathing.

SHOT 4 — 6.8 TO 9.3 — PRIVATE BREAK:
The last shopper leaves and the exit area becomes quiet. Macro shot of the card sliding into her jacket pocket with one corner bending against the seam. Hold on her face near the dark glass doors as the brave smile disappears and tears gather silently while she looks back toward the sweets aisle. No sobbing.

SHOT 5 — 9.3 TO 12.3 — THE MOTHER NOTICES:
The mother sees Sunny’s reflection in the dark exit glass. She stops the cart immediately, turns, and kneels to Sunny’s eye level with open hands. Sunny hesitates, then takes out the bent card and shows the drawing. The mother finally understands who the chocolate was for. She does not laugh, apologize theatrically, or lecture. Hold their eye contact.

SHOT 6 — 12.3 TO 15.0 — SMALL STEP:
About one second of the mother’s phone held low between them, the first phone in the film. Minimal ChildFocus interface in #00985E, #00CE7F, #E5F7F0, #FFFFFF, #1A1A1A. Only readable words: “ChildFocus”, “Sunny”, “Task”, “Start”. She taps “Start” once and puts the phone away. End with the two of them walking back into the aisle together, Sunny holding the chocolate bar and the still-bent card.

CHARACTER CONTINUITY:
Sunny keeps her exact face, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, white sneakers, age, height, and proportions in every shot. Remove footwear logos. Do not add glasses, a backpack, or accessories.

The mother keeps the same face, dark brown tight low bun, charcoal coat, plain blouse, straight trousers, low heels, and canvas tote. She is efficient and exhausted, never hostile or loud.

PROP CONTINUITY:
One single red-wrapped chocolate bar and one single handmade card with the same child’s drawing. After the pocket moment, the card keeps a visible bent corner through the final frame. Never duplicate the card, never straighten it, never replace the chocolate with another product, never add a second gift.

CAMERA AND EDITING:
Only 6 connected shots with motivated movement, one long aisle tracking shot, restrained cuts, natural rack focus, subtle depth of field. No slideshow, no split screens, no time reversal, no sudden jumps. Keep aisle geography and screen direction consistent.

LIGHTING AND COLOR:
Fluorescent light #F7F9F6, cold shelf glow #BFD8C9, aisle shadow #2C3A33, metal #9AA3A0, chocolate wrapper #A63A3A, card paper #FFF3E2, night door glass #1B2320. Keep cold fluorescent light throughout. No warm lighting, no cozy glow.

AUDIO:
Fluorescent hum, cart wheels on a hard floor, distant freezer motors, a checkout beep with no voice, quiet late-night ambience, a soft paper sound when the card is put away, automatic doors in the distance. Minimal restrained instrumental score that becomes gently hopeful at the end. No narration, no dialogue, no lyrics, no slogan.

NO ON-SCREEN TEXT RULE:
Do not generate subtitles, captions, titles, end cards, floating words, overlays, product labels, price tags, aisle numbers, posters, checkout displays, receipts, credits, watermarks, or random letters. Packaging must use color and simple shapes only.

CONTROLLED PHONE UI TEXT EXCEPTION:
Readable text is allowed only on the physical phone screen in shot 6, strictly limited to “ChildFocus”, “Sunny”, “Task”, “Start”. No other words, numbers, or notifications. If clean rendering is impossible, use simple green and mint icons.

FINAL FRAME:
Phone fully put away. Mother and daughter walking back into the aisle together, chocolate bar and bent card in Sunny’s hands. No logo overlay, no text, no call to action, no shopping-spree ending.

NEGATIVE CONSTRAINTS:
No Truey, no Crafty, no apartment, no warm light, no phone before 12.3 seconds, no parental anger, no loud refusal, no tantrum, no begging, no crying before the card is pocketed, no exaggerated sobbing, no instant happiness, no readable packaging, no brand logos, no duplicate card, no straightened card, no character morphing, no clothing changes, no extra fingers, no warped hands, no storyboard numbers.
```

## Instagram caption

She kept putting one chocolate bar in the cart.  
Her mother kept putting it back.

Nobody knew it wasn’t for her. It was for a friend who was sick.

Children’s reasons are small and easy to miss. Asking “what is it for?” takes five seconds.

**ChildFocus — one small step toward being more present.**

## Hashtags

```text
#ChildFocus #MindfulParenting #KindKids #ParentingSupport #ChildEmpathy #WorkingMom #ConsciousParenting #RaisingGoodHumans #FamilyMoments #ParentingTips
```

---
---

# Сценарий 5 — «Он просто боится»

**Герой:** Truey
**Локация:** крытый бассейн, детская тренировка
**Свет:** холодный аквамарин, блики воды на потолке, стеклянная перегородка для родителей
**Предмет-символ:** плавательные очки
**Механика вины:** страх ребёнка обесценили дружелюбным «да там нечего бояться»
**Хук 0–3 сек:** побелевшие костяшки сжимают очки на краю бортика, и мгновенная улыбка, когда на него смотрят другие дети

## Концепт

Truey боится глубины. Он не говорит об этом словами, он показывает очки и смотрит на папу.

Папа улыбается и подбадривает: там же ничего страшного, давай. Это сказано с любовью и без злобы — и именно поэтому Truey решает, что бояться нельзя.

Он натягивает очки слишком туго, улыбается ребятам и прыгает. Под водой одна линза наполняется водой.

Он выныривает у бортика один, группа уже уплыла. Папа видит его лицо через стекло. Он выходит к бортику, садится на мокрую плитку и просто сидит рядом. Очки лежат между ними, а не на лице.

## Почему это может сработать

- Хук физиологичный: побелевшие костяшки читаются как страх без единого слова.
- Родитель здесь не жестокий, он подбадривающий — и это узнают почти все.
- Подводный кадр даёт сильный визуальный контраст: снаружи улыбка, внутри тишина и пузыри.
- Финал честный: страх не исчез, просто ребёнок больше не один в нём.

## Палитра

- вода: `#4FB6C4`
- глубина: `#12657A`
- плитка и бортик: `#EDF3F4`
- влажная дымка и блики: `#BFE3E8`
- тени под водой: `#0C3A47`
- очки: `#E07A3F`
- полотенце: `#DCE3E0`
- экран приложения: `#FFFFFF`, `#E5F7F0`, `#00985E`, `#00CE7F`, `#1A1A1A`

## Prompt 1 — раскадровка (GPT Image 2)

```text
Create one single vertical 9:16 cinematic storyboard sheet with exactly 16 panels in a clean 4-column by 4-row grid. Number the panels 1 to 16 inside the storyboard gutters only. Keep all panels evenly sized and arranged left to right, top to bottom.

STORY TITLE:
“He Is Just Scared”

STORY CONCEPT:
A short emotionally resonant 3D animated story about Truey and his father at an indoor swimming pool during a children’s training session.

Truey is afraid of the deep water. He does not say it in words. He holds up his goggles and looks at his father.

His father smiles and encourages him warmly: there is nothing to be afraid of, go on. It is said with love, and that is exactly why Truey decides that fear is not allowed.

He pulls the goggles on too tight, smiles at the other children, and jumps. Underwater one lens fills with water.

He surfaces alone at the wall while the group has already swum away. His father sees his face through the glass barrier, comes to the edge, sits down on the wet tiles, and simply stays with him. The goggles rest between them instead of on his face.

CHARACTER REFERENCE:
Use the attached Truey reference image as the only source of truth for his face, hairstyle, colors, age, and proportions. Preserve his identity in all 16 panels. Do not copy the background of the reference image.

TRUEY:
A boy approximately 6–8 years old with large brown eyes and warm brown hair styled upward. In the pool he wears plain dark green swim shorts and holds orange swim goggles. His olive-green zip hoodie, charcoal T-shirt, taupe joggers, and white sneakers appear only on the bench and in the final shot as a towel-and-hoodie combination. Keep his face and proportions identical everywhere.

Remove all brand marks, letters, and logos from swimwear, goggles, and footwear. Do not add glasses, a backpack, or accessories.

His emotional performance is subtle: hidden fear, forced confidence, quiet distress, cautious relief. Never theatrical.

FATHER:
A loving, energetic man approximately 34–40 years old. Short dark hair, light stubble, a gray sports jacket, a plain white T-shirt, dark trousers, with a towel over his arm. Keep him identical in every panel. He is encouraging and warm, never mocking, never angry, never forcing the child physically.

VISUAL STYLE:
Premium stylized 3D animated feature-film quality. Expressive but restrained faces, realistic wet skin and hair, believable water simulation, caustic light patterns, cinematic depth of field, one clean underwater shot. Original style, no imitation of any named studio or franchise.

LIGHTING AND PALETTE:
Cool aquamarine indoor pool light with moving water caustics on the ceiling.

Water #4FB6C4, deep water #12657A, tiles and pool edge #EDF3F4, humid haze and highlights #BFE3E8, underwater shadows #0C3A47, goggles #E07A3F, towel #DCE3E0.

No warm golden light, no sunset, no outdoor sunlight, no blue application palette.

LOCATION:
A modern unbranded indoor swimming pool. Lane ropes, a shallow and a deep section, wet tiles, a glass barrier separating a small parents’ bench area, a few children and a coach. All lane markers, depth numbers, safety signs, posters, banners, and swimwear labels must be blank, abstract, or purely pictographic.

PANEL PLAN:

PANEL 1:
Extreme close-up of small hands gripping orange swim goggles. Knuckles white, water reflections moving across the skin. Immediate emotional hook.

PANEL 2:
Close-up of Truey’s face turning toward other children with an instant bright smile that does not match his eyes.

PANEL 3:
Wide shot of the pool. Children line up along the edge with the coach. Truey stands slightly apart. Parents sit behind a glass barrier.

PANEL 4:
Truey looks down into the deep water. One small step back.

PANEL 5:
He turns to his father behind the glass and lifts the goggles slightly, asking with his eyes.

PANEL 6:
The father smiles broadly and makes a warm encouraging gesture that clearly means it is easy and there is nothing to fear. He must not be holding or looking at a phone.

PANEL 7:
Close-up of Truey with other children watching. He manufactures a confident smile and nods.

PANEL 8:
He pulls the goggles on too tightly. The strap presses a visible mark into his temple.

PANEL 9:
He steps to the edge, toes over the tiles, shoulders tense, breathing quick.

PANEL 10:
Macro close-up of his foot on the wet tile with a small tremor.

PANEL 11:
He jumps. Splash, bubbles, water spray frozen mid-air.

PANEL 12:
Underwater shot. Blurred aquamarine, rising bubbles, one goggle lens half filled with water, his eyes wide.

PANEL 13:
He surfaces at the wall and grips the gutter, coughing quietly. The group has already swum away and the lane near him is empty.

PANEL 14:
The father sees his face and the fear behind the fogged goggles. His encouraging smile fades into quiet realization. He is already opening the glass door.

PANEL 15:
Natural close-up of the father’s phone held low as he crouches at the pool edge with a towel around Truey, only after contact has started. Clean ChildFocus interface in white, mint #E5F7F0, primary green #00985E, bright green #00CE7F, dark text #1A1A1A. Only readable words: “ChildFocus”, “Truey”, “Task”, “Start”. He taps “Start”. If clean rendering is impossible, use icons instead.

PANEL 16:
The phone is away and no longer visible. Father and son sit together on the pool edge with their feet in the water, towel around Truey’s shoulders. The orange goggles rest on the tiles between them, not on his face. The deep water is still there.

CONTINUITY:
One single pair of orange goggles throughout: gripped, worn too tight, water-filled after the jump, then resting between them with a fogged lens. Never replace them, never duplicate them, never make them perfectly clear again.

Keep the strap mark on Truey’s temple visible after panel 8. Keep hair wet after panel 11 and never dry it magically. Make the transition from a busy lane in panels 3–11 to an empty lane in panels 13–16 visually obvious.

TEXT RESTRICTIONS:
Outside the storyboard panel numbers, do not render captions, subtitles, speech bubbles, titles, depth numbers, lane numbers, safety signs, posters, swimwear labels, logos, watermarks, or random letters. The only in-world text exception is panel 15 on the phone screen: “ChildFocus”, “Truey”, “Task”, “Start”.

NEGATIVE CONSTRAINTS:
No Sunny. No Crafty. No apartment. No warm golden light. No outdoor pool. No phone before panel 15. No parental anger. No mocking. No physical pushing into the water. No drowning. No emergency rescue. No lifeguard drama. No tears before panel 13. No exaggerated crying. No dry hair after the jump. No duplicate goggles. No character redesign. No extra fingers. No deformed hands.
```

## Prompt 2 — видео (Seedance 2.0 Pro)

```text
Use @image1 as the character, composition, location, color, and story reference for one finished 15-second vertical 9:16 cinematic 3D animated short.

The storyboard contains 16 reference panels, but the video must not become a 16-shot slideshow. Combine it into 6 smooth connected cinematic shots.

STORYBOARD NUMBER RULE:
All panel numbers, borders, gutters, and grid lines in @image1 are production annotations only. Never render, animate, display, mention, point at, or react to them. If a number is unclear, follow the panels visually from left to right and top to bottom. The finished video must fill the whole 9:16 frame and must never show the storyboard sheet.

CORE STORY:
At an indoor pool, Truey is afraid of the deep water. He asks his father for help with his eyes, holding up his goggles. His father, loving and encouraging, signals that there is nothing to fear. Truey hides the fear, smiles at the other children, and jumps. He surfaces alone at the wall while the group swims on. His father sees his face, comes to the edge, wraps him in a towel, sits on the wet tiles, and stays with him.

EMOTIONAL RULE:
Before the jump, Truey hides his fear behind a fast bright smile whenever anyone looks at him. He must not cry or refuse loudly. After surfacing alone, the smile disappears and quiet distress shows. At the end show relief and safety, not sudden courage. The fear is not cured.

TIMELINE:

SHOT 1 — 0.0 TO 2.0 — HOOK:
Extreme close-up of small hands gripping orange goggles, knuckles white, water caustics moving over the skin. Quick rack focus to Truey’s face as he instantly produces a bright smile toward the other children. The contradiction between the hands and the smile must read within the first second. No title, no caption.

SHOT 2 — 2.0 TO 4.5 — THE SILENT ASK:
One smooth medium shot at the pool edge. Truey looks down into the deep water and takes a small step back, then turns to his father behind the glass barrier and lifts the goggles slightly. The father smiles broadly and makes a warm encouraging gesture meaning it is easy. He must never hold or look at a phone. His encouragement is loving, never mocking or forcing.

SHOT 3 — 4.5 TO 6.8 — PUBLIC MASK:
Close-up of Truey with the other children watching. He nods, manufactures confidence, and pulls the goggles on too tight so the strap marks his temple. Camera follows him to the edge, toes over the tiles, shoulders tense, breathing quick, one small tremor in his foot.

SHOT 4 — 6.8 TO 9.3 — PRIVATE BREAK:
He jumps. Cut to a clean underwater shot: muffled sound, rising bubbles, blurred aquamarine, one lens filling with water, eyes wide. He surfaces at the wall and grips the gutter, coughing quietly. The group has already swum away and the lane around him is empty. Hold on his face as the brave smile is gone. No sobbing, no drowning, no emergency.

SHOT 5 — 9.3 TO 12.3 — THE FATHER NOTICES:
The father sees the fear on his son’s face through the fogged goggles and the glass barrier. His encouraging energy drops into quiet realization. One smooth camera move as he comes to the edge, crouches on the wet tiles at Truey’s eye level, and wraps a towel around his shoulders. He does not laugh it off, does not push him to try again, does not lecture. Truey finally lets the fear show and hands over the goggles.

SHOT 6 — 12.3 TO 15.0 — SMALL STEP:
About one second of the father’s phone held low between them, the first phone in the film. Minimal ChildFocus interface in #00985E, #00CE7F, #E5F7F0, #FFFFFF, #1A1A1A. Only readable words: “ChildFocus”, “Truey”, “Task”, “Start”. He taps “Start” once and puts the phone away. End with father and son sitting on the pool edge, feet in the water, towel around Truey, orange goggles resting on the tiles between them. The deep water is still there.

CHARACTER CONTINUITY:
Truey keeps his exact face, large brown eyes, warm brown hair, age, height, and proportions in every shot. In the water he wears plain dark green swim shorts. His olive-green hoodie appears only outside the water. Remove all brand marks from swimwear, goggles, and footwear. Do not add glasses, a backpack, or accessories. Keep his hair wet after the jump and never dry it magically. Keep the goggle strap mark on his temple after he pulls them on.

The father keeps the same face, short dark hair, light stubble, gray sports jacket, white T-shirt, dark trousers, and towel. He is encouraging and warm, never mocking or hostile.

PROP CONTINUITY:
One single pair of orange goggles. Gripped, worn too tight, half filled with water after the jump, then resting between them with a fogged lens. Never duplicate them, never replace them, never make them perfectly clear again.

CAMERA AND EDITING:
Only 6 connected shots with motivated movement, one clean underwater shot, restrained cuts, natural rack focus, subtle depth of field. No slideshow, no split screens, no time reversal, no sudden jumps. Keep pool geography and screen direction consistent.

LIGHTING AND COLOR:
Water #4FB6C4, deep water #12657A, tiles #EDF3F4, humid highlights #BFE3E8, underwater shadows #0C3A47, goggles #E07A3F, towel #DCE3E0. Keep cool indoor pool light with moving caustics throughout. No warm light, no sunlight, no outdoor pool.

AUDIO:
Indoor pool reverb, distant children’s voices with no recognizable words, water splashes, a coach’s whistle far away, muffled underwater tone with bubbles during the jump, dripping water and quiet breathing at the wall. Minimal restrained instrumental score that becomes gently reassuring at the end. No narration, no dialogue, no lyrics, no slogan.

NO ON-SCREEN TEXT RULE:
Do not generate subtitles, captions, titles, end cards, floating words, overlays, depth numbers, lane numbers, safety signs, posters, swimwear labels, credits, watermarks, or random letters.

CONTROLLED PHONE UI TEXT EXCEPTION:
Readable text is allowed only on the physical phone screen in shot 6, strictly limited to “ChildFocus”, “Truey”, “Task”, “Start”. No other words, numbers, or notifications. If clean rendering is impossible, use simple green and mint icons.

FINAL FRAME:
Phone fully put away. Father and son sitting on the pool edge with feet in the water, towel around Truey, goggles on the tiles between them. No logo overlay, no text, no call to action, no triumphant second jump.

NEGATIVE CONSTRAINTS:
No Sunny, no Crafty, no apartment, no warm light, no outdoor pool, no phone before 12.3 seconds, no parental anger, no mocking, no forcing the child into the water, no drowning, no rescue drama, no crying before he surfaces, no exaggerated sobbing, no instant courage, no dry hair after the jump, no duplicate goggles, no character morphing, no extra fingers, no warped hands, no storyboard numbers, no readable environmental text.
```

## Instagram caption

He wasn’t being difficult.  
He was scared, and he smiled so nobody would notice.

“There’s nothing to be afraid of” is meant kindly. But children hear it as “don’t bring me this feeling.”

Sometimes courage starts with someone sitting down beside them.

**ChildFocus — one small step toward being more present.**

## Hashtags

```text
#ChildFocus #ChildhoodFears #MindfulParenting #EmotionalSafety #ParentingSupport #GentleParenting #SwimLessons #ChildPsychology #RaisingKids #ParentingTips
```

---
---

# Сценарий 6 — «Билет на первый круг»

**Герой:** Sunny
**Локация:** ледовый каток
**Свет:** белый лёд и холодная синева, к финалу приглушённое освещение
**Предмет-символ:** самодельный бумажный билет
**Механика вины:** взрослый разговор поверх детского момента
**Хук 0–3 сек:** детская рука протягивает самодельный билет родителю, который в этот момент поворачивается к другому взрослому

## Концепт

Sunny сделала билет: рисунок фигурки на коньках и звёздочка. Это приглашение на её первый самостоятельный круг.

Мама берёт билет, улыбается — и в этот момент подходит знакомая. Начинается обычный вежливый взрослый разговор.

Sunny отталкивается и едет одна. Она делает круг, разводит руки и смотрит на бортик. Мама машет ей автоматически, не поднимая глаз, потому что слушает собеседницу.

Билет выпадает из кармана на мокрый резиновый пол. Каток пустеет, свет приглушают. Мама поднимает грязный билет и понимает, что именно она пропустила.

## Почему это может сработать

- Хук социально узнаваем: ребёнок ждёт, а взрослые разговаривают.
- «Помахали, не посмотрев» — микрожест, который узнаёт каждый.
- Упавший билет на полу работает как чек, который не приняли.
- Финал даёт лучшее, что можно дать: не извинение, а второй круг, который посмотрели.

## Палитра

- лёд: `#EAF2F7`
- холодная синева катка: `#9FC4DE`
- бортик: `#D8DEE3`
- глубокие тени и дальние трибуны: `#33424E`
- резиновый пол: `#4B5560`
- бумажный билет: `#F1E3C6`
- карандашный рисунок на билете: `#5A6472`
- экран приложения: `#FFFFFF`, `#E5F7F0`, `#00985E`, `#00CE7F`, `#1A1A1A`

## Prompt 1 — раскадровка (GPT Image 2)

```text
Create one single vertical 9:16 cinematic storyboard sheet with exactly 16 panels in a clean 4-column by 4-row grid. Number the panels 1 to 16 inside the storyboard gutters only. Keep all panels evenly sized and arranged left to right, top to bottom.

STORY TITLE:
“A Ticket for the First Lap”

STORY CONCEPT:
A short emotionally resonant 3D animated story about Sunny and her mother at an indoor ice rink.

Sunny made a paper ticket: a drawing of a small skater and a star. It is an invitation to her first solo lap.

Her mother takes the ticket with a warm smile, and at that exact moment another adult comes over and starts an ordinary polite conversation.

Sunny pushes off and skates alone. She completes the lap, opens her arms, and looks at the boards. Her mother waves back automatically without looking, because she is listening to the other adult.

The ticket slips out of her mother’s pocket onto the wet rubber floor. The session ends, the lights dim, the rink empties. Her mother picks up the dirty ticket and understands exactly what she missed.

CHARACTER REFERENCE:
Use the attached Sunny reference image as the only source of truth for her face, hairstyle, clothing, colors, age, and proportions. Preserve her identity in all 16 panels. Do not copy the background of the reference image.

SUNNY:
A girl approximately 5–7 years old, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans. On the ice she wears white figure skates and a simple gray knit hat; her white sneakers appear only near the boards. Remove all footwear brand marks and letters. Do not add glasses, a backpack, or accessories.

Her emotional performance is subtle: excitement, concentration, restrained disappointment, quiet sadness, cautious pride. Never theatrical.

MOTHER:
A loving, sociable woman approximately 32–38 years old. Chestnut hair in a loose braid, a quilted burgundy coat, a gray scarf, dark jeans, winter boots. Keep her identical in every panel. She is warm and polite, never angry or dismissive.

OTHER ADULT:
A friendly acquaintance in a dark green parka, clearly secondary, never caricatured or unpleasant. She leaves the scene after panel 9.

VISUAL STYLE:
Premium stylized 3D animated feature-film quality. Expressive but restrained faces, realistic ice surface, fine skate marks, visible cold breath, cinematic depth of field, clean reflections on the ice. Original style, no imitation of any named studio or franchise.

LIGHTING AND PALETTE:
Cold rink lighting, white ice, blue shadows, dimmed lights in the final panels.

Ice #EAF2F7, cold rink blue #9FC4DE, boards #D8DEE3, deep shadows and distant stands #33424E, rubber floor #4B5560, paper ticket #F1E3C6, pencil drawing on the ticket #5A6472.

No warm golden light, no sunset, no blue application palette.

LOCATION:
A modern unbranded indoor ice rink during a public session. Boards, plexiglass, a few skaters, a rubber-floored walkway, distant empty stands. All advertising boards, rink markings, scoreboards, signs, banners, and clothing labels must be blank, abstract, or purely pictographic.

PANEL PLAN:

PANEL 1:
Extreme close-up of a small hand holding up a handmade paper ticket. The ticket shows a simple pencil drawing of a skater and a star, no letters. Cold blue light. Immediate emotional hook.

PANEL 2:
Medium shot at the boards. Sunny in skates, excited, hands the ticket to her mother and points at the ice.

PANEL 3:
The mother takes the ticket with a warm genuine smile and looks at the ice.

PANEL 4:
Another adult arrives and starts a friendly conversation. The mother turns toward her, still holding the ticket, then slides it into her coat pocket. She must not be holding or looking at a phone.

PANEL 5:
Sunny pushes off from the boards. Wide shot from behind her: the empty ice ahead, her mother at the boards already turned away.

PANEL 6:
Sunny skates her first solo lap, unsteady but determined, cold breath visible.

PANEL 7:
She completes the lap and opens her arms, looking at the boards, waiting to be seen.

PANEL 8:
The mother, still in conversation, waves back automatically without turning her head. She never saw the lap.

PANEL 9:
Close-up of Sunny with other skaters passing behind her. She keeps a small brave smile and waves back as if it does not matter. No tears yet.

PANEL 10:
Macro close-up. The paper ticket slips out of the coat pocket and lands on the wet rubber floor near passing skate blades.

PANEL 11:
Wide shot. The session ends, the lights dim, the rink empties. The ticket lies on the floor with a dirty footprint mark on it.

PANEL 12:
Tight close-up of Sunny alone at the boards. The brave smile is gone, cold breath visible, eyes shining. No sobbing.

PANEL 13:
The mother finds the ticket on the floor and picks it up. Quiet realization and love, not panic or guilt theatrics. The other adult is already gone.

PANEL 14:
The mother comes to the boards and kneels at Sunny’s eye level, holding the damp dirty ticket carefully, as something valuable.

PANEL 15:
Natural close-up of the mother’s phone held low between them, only after contact has started. Clean ChildFocus interface in white, mint #E5F7F0, primary green #00985E, bright green #00CE7F, dark text #1A1A1A. Only readable words: “ChildFocus”, “Sunny”, “Task”, “Start”. She taps “Start”. If clean rendering is impossible, use icons instead.

PANEL 16:
The phone is away and no longer visible. The mother stands at the boards holding the creased ticket and watches while Sunny skates the lap again on the nearly empty ice. This time she is seen. The ticket stays dirty and creased, the rink stays cold and dim.

CONTINUITY:
One single handmade ticket throughout: clean at first, then fallen, then marked with a footprint and damp, and still marked in the final panel. Never replace it with a new one, never clean it, never duplicate it.

Keep Sunny’s skates, hat, and clothing consistent. Keep the mother’s coat, scarf, and braid consistent. Make the transition from a busy public session in panels 2–10 to a dim empty rink in panels 11–16 visually obvious.

TEXT RESTRICTIONS:
Outside the storyboard panel numbers, do not render captions, subtitles, speech bubbles, titles, rink advertising, scoreboards, banners, signs, clothing labels, logos, watermarks, or random letters. The ticket must contain drawing only. The only in-world text exception is panel 15 on the phone screen: “ChildFocus”, “Sunny”, “Task”, “Start”.

NEGATIVE CONSTRAINTS:
No Truey. No Crafty. No apartment. No warm golden light. No phone before panel 15. No parental anger. No scolding. No unpleasant secondary adult. No falling injury. No dramatic accident. No tears before panel 12. No exaggerated crying. No clean replacement ticket. No duplicate ticket. No competition medal. No audience applause. No character redesign. No extra fingers. No deformed hands.
```

## Prompt 2 — видео (Seedance 2.0 Pro)

```text
Use @image1 as the character, composition, location, color, and story reference for one finished 15-second vertical 9:16 cinematic 3D animated short.

The storyboard contains 16 reference panels, but the video must not become a 16-shot slideshow. Combine it into 6 smooth connected cinematic shots.

STORYBOARD NUMBER RULE:
All panel numbers, borders, gutters, and grid lines in @image1 are production annotations only. Never render, animate, display, mention, point at, or react to them. If a number is unclear, follow the panels visually from left to right and top to bottom. The finished video must fill the whole 9:16 frame and must never show the storyboard sheet.

CORE STORY:
At an indoor ice rink, Sunny gives her mother a handmade paper ticket inviting her to watch her first solo lap. Just then another adult starts a polite conversation. Sunny skates the lap alone and opens her arms at the boards. Her mother waves back automatically without ever looking. The ticket slips out of her pocket onto the wet floor. When the session ends and the rink empties, the mother finds the trampled ticket, understands what she missed, kneels at the boards, and watches Sunny skate the lap again.

EMOTIONAL RULE:
Before the ticket falls, Sunny is excited and then keeps a small brave smile in front of other skaters. She must not cry or complain. After the rink empties, her smile disappears and tears gather silently. At the end show cautious pride, not a triumphant celebration.

TIMELINE:

SHOT 1 — 0.0 TO 2.0 — HOOK:
Extreme close-up of a small hand holding up a handmade paper ticket with a pencil skater and a star. Rack focus reveals Sunny in skates, excited, and her mother reaching for it. The gesture of inviting must read within the first second. No title, no caption.

SHOT 2 — 2.0 TO 4.5 — THE MOMENT IS TAKEN:
One smooth medium shot at the boards. The mother takes the ticket with a genuine smile, then another adult arrives and starts a friendly conversation. The mother turns toward her and slides the ticket into her coat pocket. She must never hold or look at a phone. Keep the other adult pleasant and ordinary, never unpleasant.

SHOT 3 — 4.5 TO 6.8 — THE LAP NOBODY WATCHED:
Follow Sunny from behind as she pushes off and skates her first solo lap, unsteady but determined, cold breath visible. She completes the lap and opens her arms toward the boards. Her mother waves back automatically without turning her head. Close on Sunny keeping a small brave smile with other skaters passing behind her.

SHOT 4 — 6.8 TO 9.3 — PRIVATE BREAK:
Macro shot of the paper ticket slipping from the coat pocket onto the wet rubber floor, skate blades passing close by and leaving a dirty mark on it. The session ends, the lights dim, the rink empties, ambient sound thins out. Hold on Sunny alone at the boards as her brave smile disappears and tears gather silently in the cold air. No sobbing.

SHOT 5 — 9.3 TO 12.3 — THE MOTHER NOTICES:
The mother notices the ticket on the floor and picks it up. Her social energy drops into quiet realization as she looks at the drawing and then at the empty ice. One smooth camera move as she comes to the boards and kneels at Sunny’s eye level, holding the damp dirty ticket carefully, like something valuable. She does not lecture, joke it away, or over-apologize. Hold their eye contact.

SHOT 6 — 12.3 TO 15.0 — SMALL STEP:
About one second of the mother’s phone held low between them, the first phone in the film. Minimal ChildFocus interface in #00985E, #00CE7F, #E5F7F0, #FFFFFF, #1A1A1A. Only readable words: “ChildFocus”, “Sunny”, “Task”, “Start”. She taps “Start” once and puts the phone away. End with the mother standing at the boards, creased ticket in her hand, watching Sunny skate the lap again on the dim empty ice. This time she is watched from the first push to the last.

CHARACTER CONTINUITY:
Sunny keeps her exact face, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, age, height, and proportions in every shot. On the ice she wears white figure skates and a simple gray knit hat. Remove footwear logos. Do not add glasses, a backpack, or accessories.

The mother keeps the same face, chestnut loose braid, quilted burgundy coat, gray scarf, dark jeans, winter boots. She is warm and polite, never hostile.

PROP CONTINUITY:
One single handmade paper ticket with the same pencil drawing of a skater and a star. Clean at first, then fallen, then damp with a dirty footprint mark that must remain visible through the final frame. Never clean it, never replace it, never duplicate it, never turn it into a medal.

CAMERA AND EDITING:
Only 6 connected shots with motivated movement, one following skating shot, restrained cuts, natural rack focus, subtle depth of field. No slideshow, no split screens, no time reversal, no sudden jumps. Keep rink geography and screen direction consistent.

LIGHTING AND COLOR:
Ice #EAF2F7, rink blue #9FC4DE, boards #D8DEE3, deep shadows #33424E, rubber floor #4B5560, ticket paper #F1E3C6, pencil #5A6472. Keep cold rink light throughout and dim it for the final beats. No warm light, no sunset, no spotlight show.

AUDIO:
Skate blades cutting ice, rink reverb, distant skaters, indistinct adult conversation with no recognizable words, a session-end signal without speech, the hum of dimming lights, one soft paper sound when the ticket lands. Minimal restrained instrumental score that becomes gently hopeful at the end. No narration, no dialogue, no lyrics, no slogan, no crowd applause.

NO ON-SCREEN TEXT RULE:
Do not generate subtitles, captions, titles, end cards, floating words, overlays, rink advertising, scoreboards, banners, signs, clothing labels, credits, watermarks, or random letters. The ticket must contain drawing only.

CONTROLLED PHONE UI TEXT EXCEPTION:
Readable text is allowed only on the physical phone screen in shot 6, strictly limited to “ChildFocus”, “Sunny”, “Task”, “Start”. No other words, numbers, or notifications. If clean rendering is impossible, use simple green and mint icons.

FINAL FRAME:
Phone fully put away. The mother at the boards with the creased ticket, Sunny skating and being watched, dim empty rink. No logo overlay, no text, no call to action, no applause, no medal.

NEGATIVE CONSTRAINTS:
No Truey, no Crafty, no apartment, no warm light, no phone before 12.3 seconds, no parental anger, no scolding, no unpleasant secondary adult, no falling injury, no accident, no crying before the rink empties, no exaggerated sobbing, no instant celebration, no clean replacement ticket, no duplicate ticket, no medal, no cheering crowd, no character morphing, no clothing changes, no extra fingers, no warped hands, no storyboard numbers.
```

## Instagram caption

She made a ticket so we would come and watch.

She skated her first lap alone, opened her arms — and got a wave from someone who never looked up.

Children don’t need an audience. They need one pair of eyes that was actually there.

**ChildFocus — one small step toward being more present.**

## Hashtags

```text
#ChildFocus #MindfulParenting #BeThere #ChildConfidence #ParentingSupport #FirstTimes #ConsciousParenting #QualityTime #IceSkating #RaisingKids
```

<!-- APPEND-MARKER -->
