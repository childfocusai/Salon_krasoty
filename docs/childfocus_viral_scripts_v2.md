# ChildFocus — вирусные 3D-мультики v3 (упрощено под реальную генерацию)

## Промпт-инженерия по референсам + рост в Instagram (@childfocusai)

**v3 — по итогам первой реальной генерации.** Версия v2.1 (архитектура из раскадровки 4×4 + 7 синхронизированных планов) оказалась слишком сложной для модели: результат вышел низкого качества. В этой редакции сценарии переписаны заново — меньше кадров, меньше одновременных технических требований, больше пространства на эмоцию. Файл лежит там же, в `docs/childfocus_viral_scripts_v2.md`.

---

## 0. Роль

Креативный директор коротких форматов + промпт-инженер генеративного видео (Seedance 2.0 / GPT Image 2) + стратег роста Reels. Задача в этой редакции сместилась: не «максимально технически точный промпт», а «промпт, который модель реально может выполнить», сохранив эмоциональную силу истории.

---

## 1. Диагноз: почему v2.1 вышла низкого качества

Разбор по слоям, что именно перегружало модель:

| Проблема в v2.1 | Почему это мешало | Что сделано в v3 |
|---|---|---|
| Раскадровка 4×4 из 16 панелей, потом видео должно было «расшифровать» её в 7 планов | Двойной перенос ошибки: если GPT Image 2 не идеально нарисовал маленькую панель, Seedance наследовал эту ошибку и пытался её анимировать | **Раскадровка убрана полностью.** Видео генерируется одним прямым промптом от референса героя — так же, как в примерах 2 и 3 (день рождения, «мама»), где раскадровки нет вообще |
| 7 жёстких склеек за 15 секунд (тизер + 6 сцен) | Слишком часто резать — модели просто не хватает кадров, чтобы закончить движение внутри каждого сегмента | **3 плана вместо 7**, по 5 секунд каждый — с запасом на то, чтобы действие внутри плана реально доигралось |
| «Триггер-кадр» требовал синхронизировать два события **в разных локациях** в один и тот же момент (например, сценарий 6 — билет падает и руки раскрываются одновременно, но в одной локации, а не в двух) | Одновременная синхронизация нескольких действий — тяжёлая задача даже для топовых видео-моделей, а если события физически в разных местах, модель вынуждена либо резать (что запрещал FORMAT MODE), либо путать пространство | **Один поворотный момент, в одном месте, без требования покадровой синхронизации с чем-то ещё** |
| Читаемый текст интерфейса на экране телефона (`ChildFocus`, имя, `Task`, `Start`) должен был отрисовать сам видео-генератор | Рендер связного, чистого, маленького текста — известное слабое место видео-моделей; именно этот момент чаще всего «плывёт» | **Телефон в кадре — просто мягкое мятно-зелёное свечение экрана, без текста.** Настоящий интерфейс ChildFocus вклеивается поверх готового видео на монтаже — качество гарантированно 100%, потому что это уже не генерация, а вставка реального скриншота |
| Отдельные секции `OPTICS` (градусы объектива), `LOCATION MAP` (перед/центр/фон), `PHYSICS`, `WARDROBE` как отдельные блоки | Длина промпта и количество одновременных инструкций растёт — модель по опыту начинает жертвовать частью требований, когда их слишком много | Всё это либо убрано, либо свёрнуто в одну-две фразы внутри самого описания плана — меньше формальных блоков, больше живого текста, как в реальных примерах |

Итог: структура промпта в v3 гораздо ближе к тому, что реально показано в примерах 2 и 3 (день рождения, «мама») — короче, без раскадровки, с щедрым временем на каждый план.

---

## 2. Общие правила v3

### NO ON-SCREEN TEXT RULE
В кадре запрещён любой читаемый текст: субтитры, титры, надписи, вывески, номера, вотермарки — без исключений.

### PHONE MOMENT RULE (заменяет прежнее исключение для UI)
Если по сюжету в кадре появляется телефон — модель рисует только мягкое свечение экрана в мятно-зелёных тонах приложения, без единой буквы и без имитации интерфейса. Настоящий экран ChildFocus (скриншот из приложения) добавляется поверх этого места в видео на монтаже, отдельным слоем. Это не генерация текста моделью, а наложение готовой картинки — надёжнее в 10 раз.

### ONE TURNING POINT RULE (заменяет TRIGGER FRAME / COLD OPEN TEASE / ECHO CLOSE из v2.1)
У каждого сценария один явный поворотный момент, в одной локации, без требования покадровой синхронизации с событием где-то ещё. До него — ребёнок держит маску (спокоен, вежлив, улыбается). После — маска спадает, тихие слёзы без всхлипов. Это единственное «жёсткое» требование к монтажу внутри сцены.

### Палитра приложения
`#00985E` primary green, `#00CE7F` bright, `#007A4D` deep, `#FFFFFF` / `#F5F5F5` / `#F3F3F3` / `#F2F2F7`, мятные карточки `#E5F7F0` / `#EBF9F3`, текст `#1A1A1A` / `#333333` / `#666666`.

### Герои
- **Sunny** — девочка 5–7 лет, каштановые волосы в двух низких хвостиках, джинсовка, бирюзовый свитер, синие джинсы, белые кроссовки.
- **Truey** — мальчик 6–8 лет, крупные карие глаза, тёплые каштановые волосы уложены вверх, оливковая толстовка на молнии, тёмно-серая футболка, брюки-джоггеры цвета тауп, белые кроссовки с зелёными вставками.
- **Crafty** — мальчик 6–8 лет, круглые очки, каштановые волосы зачёсаны вверх, тёмно-зелёная толстовка с большой буквой «M», коричневые вельветовые брюки, белые кроссовки, коричневый кожаный рюкзак.

**Открытый вопрос:** на присланных вами референсах минимум пять разных героев, и часть не совпадает с описанием выше (мальчик в кепке, подросток в танцевальной студии, девочка с короткой стрижкой). Пока сопоставление имя↔картинка не подтверждено, тексты ниже используют старые три имени. Как только пришлёте, какое имя за каким изображением — обновлю описания под реальный ростер одним проходом.

### Тон
Родитель не злодей: уставший, любящий, отвлечённый. Финал даёт надежду и один маленький шаг. Предмет-символ никогда не чинится сам собой.

### Настройки Syntx.ai
Video → Seedance 2.0, режим Pro, 9:16, 15 секунд, 480–720p для теста, 1080p для финала. Референс героя грузится напрямую как `@image1` — никакой раскадровки перед этим не нужно. Kling 3.0 — запасной вариант, если Seedance всё ещё не справляется с эмоциями лица.

---

## 3. Референс героя (если героя ещё нет)

**Если герой уже готов (как в вашем случае) — этот раздел не нужен.** Просто грузите готовое изображение героя напрямую как `@image1` в промпт видео ниже. Требование только одно: герой виден в полный рост или почти в полный рост, лицом к камере, без чужих людей в кадре крупным планом. Фон и свет референса не имеют значения — во всех промптах ниже прямо сказано брать из референса только внешность, а фон игнорировать.

Если героя нужно создать с нуля, вот минимальный промпт (без 3-панельной карты — она больше не нужна, так как раскадровки больше нет):

```text
Create one full-body character portrait, front-facing, on a plain light-gray background, 9:16, high detail, 4K.

STYLE: premium stylized 3D animated feature-film character design, in the spirit of modern high-end animated films — soft rounded facial forms, large expressive eyes, warm cinematic skin shading. Fully 3D-rendered, never photoreal, never a real photo. Original design, no imitation of any named studio or franchise.

CHARACTER: [insert name and description from the "Герои" section, or your own established character description].

POSE: standing straight, arms relaxed, feet shoulder-width apart, full outfit visible, looking directly at camera, calm friendly expression.

REQUIREMENTS: clean plain background, soft even lighting, no shadows on the background, no text, no watermark.
```

---

## 4. Instagram growth-kit для @childfocusai

Это не меняется от того, что сам видео-промпт упростился — весь этот слой применяется уже к готовому чистому видео, в монтажке, и никак не усложняет работу генеративной модели.

### 4.1 Хук и ре-хук
Первый план (0–5s) уже начинается с самого конфликта — отдельного тизера-вставки больше нет, он не пережил тест на качество. При монтаже накладываются два оверлей-текста:
- **0.0–1.5s** — хук, 3–6 слов, крупный контрастный текст.
- **~7–9s (на повороте сюжета)** — короткая фраза-ре-хук, которая возвращает внимание тех, кто досматривает на автомате.

Оба текста не рендерятся AI-моделью — накладываются вручную поверх готового видео.

### 4.2 Формула подписи (caption)
1. Одна строка — что произошло, без объяснений (хук).
2. Одна строка — почему это узнаваемо (без обвинения родителя).
3. Одна строка — мягкий вывод/рефрейм.
4. Жирная строка бренда: **ChildFocus — один маленький шаг к тому, чтобы быть рядом.**
5. CTA на подписку: `Подписывайтесь на @childfocusai — здесь такие истории каждую неделю.`
6. Save/share-триггер: `Сохраните это себе — пригодится в свой момент усталости.`

### 4.3 Хэштег-стратегия
Широкие охватные (`#parenting`, `#momlife`) + нишевые про осознанное родительство (`#mindfulparenting`, `#gentleparenting`) + брендовый (`#ChildFocus`, `#childfocusai`). Полный список — под каждым сценарием.

### 4.4 Закреплённый комментарий
Под каждым сценарием — готовый вопрос для первого комментария от имени аккаунта, чтобы спровоцировать комментарии-признания.

### 4.5 Обложка (cover frame)
Кадр из плана 1 (0–5s), до поворотного момента — момент, где предмет-символ ещё цел и виден крупно.

### 4.6 Публикационный ритм
Не чаще одного сценария в 2–3 дня, чередуя героя/локацию.

---

## 5. Оглавление сценариев

| № | Название | Герой | Локация | Предмет-символ | Поворотный момент |
|---|---|---|---|---|---|
| 1 | Второе место | Truey | школьный спортзал | серебряная лента | лента выпадает из кроссовка |
| 2 | Ещё минуточку | Sunny | ночная прачечная | самодельная закладка | закладка вынимается из книги |
| 3 | Он стёр себя | Crafty | детская поликлиника | семейный рисунок | ластик стирает фигурку до конца |
| 4 | Плитка шоколада | Sunny | ночной супермаркет | открытка для больной подруги | открытка убирается в карман у кассы |
| 5 | Он просто боится | Truey | крытый бассейн | плавательные очки | линза очков наполняется водой под водой |
| 6 | Билет на первый круг | Sunny | каток | самодельный билет | билет падает из кармана на пол |
| 7 | Он хотел сказать сам | Truey | барбершоп | вырезка с причёской | сложенная вырезка падает в стриженые волосы |
| 8 | Кривой росток | Sunny | школьная теплица | росток в стаканчике | рука отдёргивается от второго стаканчика |
| 9 | Порванная лямка | Crafty | платформа метро | лямка рюкзака | шов лямки окончательно рвётся |
| 10 | Сердце в чемодане | Crafty | выход на посадку | бумажное сердечко | молния чемодана закрывается над сердечком |

Общие ограничения для всех десяти (действуют везде, не повторяются в каждом промпте): без других героев из тройки в кадре, без телефона до последнего плана, без злости родителя, без слёз до поворотного момента, без волшебного восстановления предмета-символа, без лишних пальцев/деформированных рук, без любого читаемого текста.

---
---

# Сценарий 1 — «Второе место»

**Герой:** Truey · **Локация:** школьный спортзал · **Предмет-символ:** серебряная лента

## Концепт
Truey занял второе место. Папа искренне радуется победителю и почти не смотрит на ленту в руке сына. Truey складывает ленту и прячет в кроссовок. Когда зал пустеет, лента выпадает на пол — и папа впервые смотрит на неё как на что-то важное.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Он занял второе место. И спрятал ленту.`
~7–9s: `Досмотри — папа ещё не знает, что он держал в кроссовке.`

## Палитра
Пол спортзала `#D9C7A3`, холодный свет `#E8EEF2`, разметка `#2E6E8E`, стены `#C8CCC6`, лента `#B9C2C9` с тесьмой `#4A6FA5`, чужая медаль `#D4AF37`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Truey — take his face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: After a school competition, Truey holds a silver-blue second-place ribbon. His father arrives, genuinely joyful, but his warmth goes to the winning child and family; he gives Truey a quick affectionate head-pat without ever looking at the ribbon. Truey keeps a brave smile, folds the ribbon smaller, and hides it inside his sneaker. When the gym empties, the crumpled ribbon slips out onto the floor. His father sees it, kneels down, and carefully unfolds it — the creases never go away.

SETTING: a modern school gym after a competition, cool daylight from high windows; by the end most families are gone and half the ceiling lights are off.

TRUEY: boy 6–8 years old, large brown eyes, warm brown hair styled upward, olive-green zip hoodie, dark charcoal T-shirt, taupe joggers, white sneakers with green accents — matching @image1 exactly in every shot.

FATHER: warm, energetic man in his mid-30s, short dark hair, light stubble, gray zip jacket, white T-shirt, dark jeans, sports bag on his shoulder. Loving and a little tired, never angry, never mocking.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE MISSED MOMENT: Truey stands holding the ribbon while another child is celebrated nearby with a gold medal. His father arrives with real joy aimed at the winning family, then gives Truey a quick head-pat without looking down. Truey keeps smiling, a little disappointed underneath.

SHOT 2 (5.0s–10.0s) — THE MASK COMES OFF: The gym empties. Truey quietly folds the ribbon smaller and pushes it into his sneaker, smiling whenever someone glances his way. Alone now, he stands up to leave and the crumpled ribbon slips out of his shoe onto the floor — his smile fades and his eyes fill with quiet tears. No sobbing, no loud crying.

SHOT 3 (10.0s–15.0s) — HELD, NOT FIXED: His father notices the ribbon, kneels to Truey's eye level, picks it up, and carefully unfolds it — it stays creased. He looks at Truey, not at the ribbon. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end sitting together on a bench, the creased ribbon resting between them.

EMOTION: Truey is proud and brave in front of people; his sadness shows only once he's alone. His father moves from misplaced excitement to quiet realization to full presence — never scolding, never over-apologizing.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, soft realistic skin and fabric, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: distant fading cheering, sneaker squeaks on the gym floor, a soft fabric rustle as the ribbon unfolds, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Truey and his father appear on screen; the ribbon is a single object, creased once and never smooths itself or becomes a medal; no readable text or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** He didn't lose. He just didn't win — and that was enough for him to hide the ribbon in his shoe. Children read our excitement long before they read our words. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните этот пост — пригодится в день, когда ваш ребёнок придёт домой не первым.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #dadlife #MindfulParenting #ParentingSupport #ChildConfidence #EmotionalIntelligence #RaisingKids`

**Закреплённый комментарий:** «А вы хвалите только победу или сам факт, что ребёнок вышел и попробовал?»

---
---

# Сценарий 2 — «Ещё минуточку»

**Герой:** Sunny · **Локация:** ночная прачечная · **Предмет-символ:** самодельная закладка

## Концепт
Мама стирает поздно вечером. Sunny просит прочитать первую главу — раз, потом второй. Оба раза «минутку». Sunny молча вынимает закладку и больше не просит. Мама видит это в отражении люка машины и садится на пол рядом.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Она попросила два раза. Потом перестала просить.`
~7–9s: `Досмотри — она уже решила больше не просить.`

## Палитра
Корпуса машин `#F2F4F3`, мятное свечение `#CFE9DF`, ночное окно `#1E2A2E`, закладка `#E48A6A`, обложка книги `#5C6E7A`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Sunny — take her face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: Late at night in a laundromat, Sunny holds a book with a handmade bookmark, waiting for the first chapter her mother promised. She asks once; her tired mother smiles and raises one finger — one minute. She asks again; same gentle gesture. Sunny quietly pulls the bookmark out of the first page, closes the book, and puts the bookmark in her pocket, deciding not to ask again. Her mother sees this in the round glass of a washing machine, stops, and sits down on the floor beside her.

SETTING: a small self-service laundromat at night, cold white light and mint machine glow, black night outside the windows; by the end it is empty except for the two of them.

SUNNY: girl 5–7 years old, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, white sneakers — matching @image1 exactly in every shot.

MOTHER: exhausted but loving woman in her early 30s, dark blonde hair in a messy low ponytail, oversized gray cardigan, cream T-shirt, faded jeans, carrying a laundry basket. Tired and kind, never irritated.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — TWO QUIET ASKS: Sunny sits on a plastic chair hugging her book, the bookmark on the first page. She lifts the book toward her mother, who is loading laundry with her arms full; her mother smiles warmly and raises one finger — one minute. Time passes; Sunny asks again the same way; her mother repeats the same gentle gesture while turning a machine dial, never looking at the book.

SHOT 2 (5.0s–10.0s) — SHE STOPS ASKING: The laundromat empties around them. Sunny keeps a small brave smile, then quietly pulls the bookmark out of the first page, closes the book, and slides the bookmark into her jacket pocket. Her brave smile fades and her eyes fill with quiet tears as the machine keeps spinning behind her. No sobbing.

SHOT 3 (10.0s–15.0s) — SHE SITS DOWN: Her mother sees Sunny's reflection in the round glass door of the machine, puts down the basket, and sits on the floor beside her at eye level, calm and open. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end with the mother on the floor, the book open on her knees, Sunny leaning against her shoulder.

EMOTION: Sunny stays hopeful and patient in front of her mother, never whining; her sadness shows only once she decides to stop asking. Her mother moves from tired distraction to quiet realization to full presence — never irritated, never lecturing.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, soft realistic skin and fabric, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: washing machine hum, a spinning drum, distant street sounds, a soft laundry-basket thud, one quiet paper sound as the bookmark slides out, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Sunny and her mother appear on screen; one single book and one single bookmark, never duplicated, never a tablet; no readable text or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** She asked twice. Then she took the bookmark out and stopped asking. "One minute" is honest — but children measure our love in the minutes that actually arrive. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Отправьте это тому родителю, который сейчас разрывается между делами и ребёнком.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #MindfulParenting #WorkingMom #ParentingSupport #QualityTime #GentleParenting #ChildDevelopment`

**Закреплённый комментарий:** «Сколько раз в день вы говорите "минутку"? Честно.»

---
---

# Сценарий 3 — «Он стёр себя»

**Герой:** Crafty · **Локация:** детская поликлиника · **Предмет-символ:** семейный рисунок

## Концепт
Crafty рисует семью, пока мама заслушалась похвалами другой мамы про её сына. Crafty стирает себя с рисунка. Когда чужая семья уходит, мама видит призрачный контур и держит лист, пока он рисует себя обратно.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Он взял ластик и стёр себя из своей семьи.`
~7–9s: `Досмотри — на рисунке его больше нет.`

## Палитра
Стены поликлиники `#DCEDE6`, кресла `#A8C4D4`, бумага `#FAF7F0`, ластик `#E7A9A0`, графит `#4A4A4A`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Crafty — take his face, glasses, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: In a pediatric clinic waiting room, Crafty draws his family — mother, father, and a small boy with round glasses — while his mother talks with another mother whose son seems good at everything. She is not cruel; she gently lowers Crafty's drawing to keep listening, and admires the other boy warmly out loud. Crafty keeps a brave face, then quietly erases his own figure from the drawing. When the other family is called in and the room empties, his mother sees the blank space with a faint outline, kneels down, and holds the paper steady while he draws himself back in, crooked and uneven.

SETTING: a modern pediatric clinic waiting room, even soft daylight, mint walls, light blue chairs; by the end the room is nearly empty and quiet.

CRAFTY: boy 6–8 years old, round glasses, chestnut hair brushed upward, dark green hoodie with one letter "M", brown corduroy trousers, white sneakers, brown leather backpack — matching @image1 exactly in every shot.

MOTHER: warm, slightly anxious woman in her mid-30s, dark hair in a low half-updo, beige knit sweater, dark trousers. Social and kind, never cruel or mocking.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE COMPARISON: Crafty draws his family with visible pride while his mother sits beside him, talking warmly with another mother whose son sits nearby. Crafty lifts his drawing to show her; without looking, she gently lowers his hand and gives him a warm touch on the knee, still listening to the other mother's praise.

SHOT 2 (5.0s–10.0s) — HE ERASES HIMSELF: Crafty keeps a small brave smile as the other family leaves and the room empties. Alone with his mother now, he looks at his drawing, takes an eraser, and slowly rubs out his own figure, leaving a faint ghost outline. His brave smile fades and his eyes fill with quiet tears behind his glasses. No sobbing.

SHOT 3 (10.0s–15.0s) — SHE HOLDS THE PAPER: His mother sees the erased space, understands, and kneels in front of him at his eye level with open hands. A phone appears briefly between them, screen glowing soft mint-green, no legible text. She holds the paper steady while Crafty draws himself back into the family, crooked and uneven — the erased area stays visibly rough.

EMOTION: Crafty stays focused and proud in front of people; his sadness shows only once he decides to erase himself. His mother moves from genuine social warmth toward the other family to quiet realization to full presence — never guilty theatrics, never taking the pencil from him.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, soft realistic skin and fabric, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: quiet waiting-room ambience, distant corridor steps, pencil on paper, a dry eraser sound, the room going quiet after the other family leaves, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Crafty and his mother appear on screen (the other family leaves before the ending); one single drawing on one sheet of paper, the ghost outline never fully disappears; no readable text or logos anywhere except the single letter "M" on the hoodie; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** Nobody shouted at him. Someone just praised another child a little longer — and he quietly erased himself from the family drawing. Comparison doesn't motivate children. It teaches them where they rank. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните — стоит вспомнить перед следующим "а вот у Х получается лучше".

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #StopComparing #MindfulParenting #ChildSelfEsteem #EmotionalIntelligence #ConsciousParenting #ChildPsychology`

**Закреплённый комментарий:** «Сравнивали своего ребёнка с чужим при нём хоть раз? Без осуждения — просто честно.»

---
---

# Сценарий 4 — «Плитка шоколада»

**Герой:** Sunny · **Локация:** ночной супермаркет · **Предмет-символ:** открытка для заболевшей подруги

## Концепт
Sunny хочет купить шоколадку для больной подруги, но мама дважды молча возвращает её на полку, не спрашивая зачем. У кассы Sunny прячет открытку. Мама видит её лицо в тёмном стекле дверей.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Она не хотела шоколадку себе. Никто не спросил, для кого.`
~7–9s: `Досмотри — открытка уже спрятана в кармане.`

## Палитра
Люминесцентный свет `#F7F9F6`, свечение полок `#BFD8C9`, обёртка шоколада `#A63A3A`, открытка `#FFF3E2`, ночное стекло `#1B2320`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Sunny — take her face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: Late at night in a supermarket, Sunny carries a handmade card she drew for a sick friend. She puts a red chocolate bar into the shopping cart; her exhausted mother, moving on autopilot through her errands, quietly puts it back on the shelf without looking. Sunny tries again, pressing the chocolate against the card; her mother returns it again and keeps moving. At the checkout, Sunny watches only adult groceries pass on the belt and slides the card into her pocket. In the dark glass of the exit doors, her mother finally sees her face, stops, kneels, and looks at the drawing.

SETTING: a modern supermarket late at night, cold fluorescent light, long empty aisles; by the end only a cashier and the dark exit doors remain.

SUNNY: girl 5–7 years old, chestnut hair in two low ponytails, denim jacket, turquoise sweater, blue jeans, white sneakers — matching @image1 exactly in every shot.

MOTHER: exhausted woman in her mid-30s, still in work clothes, dark hair in a tight low bun, charcoal coat, plain blouse, pushing a shopping cart. Efficient and tired, never angry or loud.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — RETURNED TWICE: Sunny places a red chocolate bar into the cart; her mother, without looking, lifts it out and puts it back on the shelf, then keeps pushing the cart. Sunny picks it up again, presses it against a handmade card she's carrying, and lifts both toward her mother, who is comparing two other packages and never looks down.

SHOT 2 (5.0s–10.0s) — THE MASK AT THE CHECKOUT: Sunny keeps a small brave smile as they reach the checkout, watching only adult groceries pass on the belt. As the last shopper leaves and the area quiets, she slides the card into her jacket pocket, bending one corner. Her brave smile fades and her eyes fill with quiet tears near the dark exit doors. No sobbing.

SHOT 3 (10.0s–15.0s) — SHE SEES HER FACE: Her mother sees Sunny's reflection in the dark exit glass, stops the cart, and kneels to her eye level with open hands. Sunny takes out the bent card and shows the drawing. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end walking back into the aisle together, chocolate bar and bent card in Sunny's hands.

EMOTION: Sunny stays quietly determined in public, never begging; her sadness shows only once the card is pocketed. Her mother moves from tired autopilot to quiet realization to full presence — never scolding, never over-apologizing.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, soft realistic skin and fabric, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: fluorescent hum, cart wheels on a hard floor, a checkout beep with no voice, quiet late-night ambience, a soft paper sound as the card is pocketed, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Sunny and her mother appear on screen; one single chocolate bar and one single card with a bent corner that never straightens; no readable text, labels, or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** She kept putting one chocolate bar in the cart. Her mother kept putting it back. Nobody knew it wasn't for her — it was for a friend who was sick. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните — и в следующий раз спросите "зачем", прежде чем сказать "нет".

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #MindfulParenting #KindKids #ChildEmpathy #WorkingMom #ConsciousParenting #RaisingGoodHumans`

**Закреплённый комментарий:** «Часто спрашиваете "а зачем тебе это", прежде чем сказать "нет"?»

---
---

# Сценарий 5 — «Он просто боится»

**Герой:** Truey · **Локация:** крытый бассейн · **Предмет-символ:** плавательные очки

## Концепт
Truey боится глубины и молча показывает очки папе. Папа подбадривает — с любовью, но без слов принятия страха. Truey прыгает, под водой очки наполняются водой, он выныривает один. Папа видит его лицо и садится рядом на мокрую плитку.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Он не сказал, что боится. Он просто улыбнулся.`
~7–9s: `Досмотри — под водой он совсем один.`

## Палитра
Вода `#4FB6C4`, глубина `#12657A`, плитка `#EDF3F4`, очки `#E07A3F`, полотенце `#DCE3E0`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Truey — take his face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: At an indoor pool during a children's swim class, Truey is afraid of the deep water. He can't say it in words, so he holds up his orange goggles and looks at his father behind a glass barrier. His father smiles and encourages him warmly — there's nothing to fear. Truey hides his fear, smiles at the other children, and jumps; underwater, one lens fills with water. He surfaces alone at the wall while the group has already swum away. His father sees his face, comes to the edge, and sits down beside him on the wet tiles.

SETTING: a modern indoor swimming pool, cool aquamarine light with moving water reflections; a glass barrier separates a small parents' area.

TRUEY: boy 6–8 years old, large brown eyes, warm brown hair styled upward, plain dark green swim shorts, orange goggles in the water — matching @image1 exactly in every shot.

FATHER: warm, energetic man in his mid-30s, short dark hair, light stubble, gray sports jacket, a towel over his arm. Encouraging and loving, never mocking, never forcing.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE SILENT ASK: Truey looks down into the deep water, then turns to his father behind the glass barrier and lifts his goggles slightly, asking with his eyes. His father smiles broadly and makes a warm encouraging gesture meaning it's easy, never holding a phone.

SHOT 2 (5.0s–10.0s) — ALONE UNDERWATER: Truey nods, smiles at the other children nearby, and pulls his goggles on tight. He jumps; underwater, one lens fills with water as bubbles rise around him. He surfaces alone at the wall, coughing quietly — the rest of the group has already swum away. His brave smile is gone, replaced by quiet distress. No sobbing, no drowning.

SHOT 3 (10.0s–15.0s) — SOMEONE SITS WITH HIM: His father sees the fear on his face through the glass, comes around to the pool edge, and crouches down at his eye level, wrapping a towel around him. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end sitting together on the wet tiles, feet in the water, goggles resting between them.

EMOTION: Truey hides his fear behind quick smiles whenever anyone looks at him; his distress shows only once he's alone at the wall. His father moves from warm encouragement to quiet realization to full presence — the fear isn't cured, just no longer faced alone.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, realistic wet skin and hair, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: indoor pool reverb, distant children's voices with no recognizable words, water splashes, a muffled underwater tone during the jump, dripping water at the wall, gentle restrained instrumental score turning quietly reassuring at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Truey and his father appear on screen; one single pair of orange goggles, hair stays wet after the jump; no readable text or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** He wasn't being difficult. He was scared, and he smiled so nobody would notice. "There's nothing to be afraid of" is meant kindly — but children hear it as "don't bring me this feeling." **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните — и в следующий раз просто сядьте рядом, вместо того чтобы подбадривать.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #ChildhoodFears #MindfulParenting #EmotionalSafety #GentleParenting #ChildPsychology #RaisingKids`

**Закреплённый комментарий:** «Ваш ребёнок чего-то боится, а вы говорите "там нечего бояться"? Как реагируете на самом деле?»

---
---

# Сценарий 6 — «Билет на первый круг»

**Герой:** Sunny · **Локация:** ледовый каток · **Предмет-символ:** самодельный бумажный билет

## Концепт
Sunny делает билет на свой первый самостоятельный круг. Мама берёт его — и в этот же момент отвлекается на подошедшую знакомую. Sunny катает круг одна и машет рукой — мама машет в ответ, не глядя. Билет падает на пол. Мама видит его после сеанса и смотрит второй круг по-настоящему.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Она сделала билет, чтобы её посмотрели. Никто не посмотрел.`
~7–9s: `Досмотри — билет уже лежит на полу.`

## Палитра
Лёд `#EAF2F7`, синева катка `#9FC4DE`, бортик `#D8DEE3`, билет `#F1E3C6`, рисунок на билете `#5A6472`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Sunny — take her face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: At an indoor ice rink, Sunny hands her mother a handmade paper ticket — a drawing of a skater and a star — inviting her to watch her first solo lap. Just then another adult starts a friendly conversation, and her mother slides the ticket into her coat pocket without looking away from it again. Sunny skates the lap alone and opens her arms at the boards; her mother waves back automatically without turning her head. The ticket slips out of her pocket onto the floor. When the session ends and the rink empties, her mother finds the trampled ticket, understands, and watches Sunny skate the lap again.

SETTING: a modern indoor ice rink, cold white and blue light; by the end the rink is nearly empty and the lights are dimmer.

SUNNY: girl 5–7 years old, chestnut hair in two low ponytails, white figure skates, a simple gray knit hat — matching @image1 exactly in every shot.

MOTHER: warm, sociable woman in her mid-30s, chestnut hair in a loose braid, a quilted burgundy coat. Friendly and polite, never dismissive.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE MOMENT IS TAKEN: Sunny excitedly hands her mother a handmade paper ticket with a drawing of a skater and a star. Her mother takes it with a genuine smile, and right then another adult arrives and starts a friendly conversation; her mother turns toward the conversation and slides the ticket into her coat pocket, never looking at the ice again.

SHOT 2 (5.0s–10.0s) — THE LAP NOBODY WATCHED: Sunny pushes off and skates her first solo lap, unsteady but determined, cold breath visible. She completes it and opens her arms toward the boards; her mother, still talking, waves back automatically without turning her head. Sunny's small brave smile fades as the paper ticket slips from her mother's pocket unnoticed and lands on the wet floor. Sunny's eyes fill with quiet tears. No sobbing.

SHOT 3 (10.0s–15.0s) — WATCHED THIS TIME: The session ends and the rink empties; her mother notices the trampled ticket on the floor, picks it up, and understands. She comes to the boards, kneels at Sunny's eye level. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end with her mother standing at the boards, creased ticket in hand, watching Sunny skate the lap again on the quiet ice.

EMOTION: Sunny is excited, then quietly proud even when unseen; her sadness shows only once she realizes no one truly watched. Her mother moves from genuine sociability to quiet realization to full attention — never over-apologizing.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, realistic ice surface, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: skate blades cutting ice, rink reverb, indistinct adult conversation with no recognizable words, a soft paper sound as the ticket lands, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Sunny, her mother, and one brief secondary adult appear on screen; one single paper ticket, permanently creased once trampled; no readable text or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** She made a ticket so we would come and watch. She skated her first lap alone, opened her arms — and got a wave from someone who never looked up. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Отправьте другу с ребёнком — узнает себя за первые пять секунд.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #MindfulParenting #BeThere #ChildConfidence #FirstTimes #QualityTime #IceSkating`

**Закреплённый комментарий:** «Часто машете ребёнку, не поднимая глаз от разговора? Честно.»

---
---

# Сценарий 7 — «Он хотел сказать сам»

**Герой:** Truey · **Локация:** барбершоп · **Предмет-символ:** вырезка из журнала с причёской

## Концепт
Truey несколько дней носил вырезку в кармане, чтобы попросить такую стрижку сам. Мастер спрашивает — папа отвечает быстрее и называет сына «молчуном». Вырезка падает в стриженые волосы. Truey сам отдаёт её мастеру в конце.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Он репетировал эти слова три дня. Мы ответили за него за секунду.`
~7–9s: `Досмотри — вырезка падает прямо в его стриженые волосы.`

## Палитра
Мятная плитка `#CFE7DE`, хром `#B7BEC2`, кресло `#24282A`, бумага вырезки `#F4EFE6`, накидка `#3C4448`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Truey — take his face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: In a barbershop, Truey has carried a magazine cutout of a haircut in his pocket for days, rehearsing asking for it himself. The barber asks him directly what he wants; Truey opens his mouth and starts lifting the cutout, but his father answers first with the usual short cut, and tells another customer warmly that his son is "the quiet one." Truey folds the cutout smaller under the cape. When the cape comes off, the folded paper falls into the cut hair on the floor. His father picks it up, understands, and lets Truey hand it to the barber himself.

SETTING: a modern barbershop with mint tiles, chrome tools, and a large mirror, cool daylight from the window.

TRUEY: boy 6–8 years old, large brown eyes, warm brown hair (slightly longer at the start, shorter after the haircut), a dark barber cape over his clothes — matching @image1 exactly in every shot.

FATHER: friendly, confident man in his mid-30s, short dark hair, light stubble, navy overshirt. Warm but thoughtless in this moment, never cruel.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — ANSWERED FOR: Truey sits in the barber chair, cape on, holding a worn magazine cutout under it. The barber asks him directly what haircut he wants; Truey opens his mouth and starts lifting the cutout, but his father answers first with a quick gesture describing the usual short cut, ruffling Truey's hair affectionately.

SHOT 2 (5.0s–10.0s) — FOLDED AWAY: Truey keeps a small brave smile in the mirror as the barber works and his father chats with another customer, calling him "the quiet one." Truey quietly folds the cutout smaller and smaller under the cape. As the haircut finishes and the cape comes off, the folded paper falls into the cut hair on the floor. Truey's brave smile fades and his eyes fill with quiet tears. No sobbing.

SHOT 3 (10.0s–15.0s) — HE SPEAKS HIMSELF: His father picks up the folded paper, unfolds it, and understands. He crouches at Truey's eye level with open hands. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end with Truey himself holding the unfolded cutout out to the barber while his father stands back, letting him speak.

EMOTION: Truey holds rehearsed courage and then a small brave smile in public; his sadness shows only once the cape comes off. His father moves from sociable warmth to quiet realization to stepping back — never hostile, never dismissive on purpose.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, detailed hair and chrome reflections, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: clipper hum, scissors, hair falling on the cape, quiet shop ambience, indistinct adult conversation with no recognizable words, one soft paper sound as the folded cutout lands, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Truey, his father, the barber, and one brief secondary customer appear on screen; one single magazine cutout, permanently fold-lined; his hair changes length only once and never regrows; no readable text or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** He practiced the words for days. It took us one second to answer for him. "He's the quiet one" isn't a description — it's an instruction children learn to follow. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните — и в следующий раз дайте ребёнку три секунды тишины, чтобы ответить самому.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #LetThemSpeak #MindfulParenting #ChildConfidence #ShyKids #ConsciousParenting #ChildPsychology`

**Закреплённый комментарий:** «Отвечаете за ребёнка, когда его о чём-то спрашивают напрямую? Как часто замечаете это за собой?»

---
---

# Сценарий 8 — «Кривой росток»

**Герой:** Sunny · **Локация:** школьная теплица · **Предмет-символ:** росток в стаканчике

## Концепт
Sunny с гордостью сажает кривой росток грязными руками. Мама искренне хочет помочь — пересаживает его идеально ровно и моет ей руки. Sunny больше не тянется к новому стаканчику. Мама садится рядом и убирает свои руки за спину.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Она гордилась кривым ростком. Мы сделали его "правильным" за 10 секунд.`
~7–9s: `Досмотри — она только что отдёрнула руку.`

## Палитра
Запотевшее стекло `#D6E6DE`, земля `#4A3B2E`, стаканчик `#EFD97A`, росток `#8CC26A`, стол `#7E6B52`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Sunny — take her face, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: During a school planting class in a greenhouse, Sunny proudly plants a crooked sprout in a cup, soil everywhere, hands completely dirty. Her mother, wanting to help, replants it perfectly straight, wipes the cup clean, and gently cleans Sunny's hands. Sunny keeps smiling, then reaches for a second empty cup and pulls her hand back, deciding not to try again. In the emptying greenhouse, her mother notices, kneels beside her, pushes an empty cup toward her, and puts her own hands behind her back.

SETTING: a modern school greenhouse, soft diffused daylight through fogged glass, humid air; by the end most families have left.

SUNNY: girl 5–7 years old, chestnut hair in two low ponytails, denim jacket, turquoise sweater, jeans — matching @image1 exactly in every shot; her hands are dirty at the start, then clean, then dirty again by the end.

MOTHER: caring, well-organized woman in her mid-30s, light brown hair in a neat ponytail, a soft sage cardigan. Helpful and warm, never scolding.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE HELPFUL CORRECTION: Sunny finishes planting her sprout with visible pride, soil everywhere, hands black, the sprout leaning crookedly. Her mother takes the cup with a warm smile, replants the sprout perfectly straight, wipes the cup clean, and gently cleans Sunny's hands — all warm, efficient, and well-meant.

SHOT 2 (5.0s–10.0s) — SHE STOPS TRYING: Sunny keeps a small brave smile as other children keep planting messily nearby. She reaches toward a second empty cup, hesitates, and pulls her hand back, hiding her now-clean hands behind her. Her brave smile fades and her eyes fill with quiet tears as she looks at her own clean palms. No sobbing.

SHOT 3 (10.0s–15.0s) — HANDS BEHIND HER BACK: Her mother notices Sunny's reflection in the fogged glass, kneels beside her, pushes an empty cup and a tray of soil toward her, and deliberately puts her own hands behind her back. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end with two cups side by side — one perfectly straight, one freshly planted and crooked — both of their hands dirty again.

EMOTION: Sunny is proud, then quietly withdrawn once her work is "corrected"; her sadness shows only once she stops reaching for a new cup. Her mother moves from warm helpfulness to quiet realization to deliberate restraint — never hostile, never lecturing.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, detailed soil and plant textures, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: greenhouse ambience, soil crumbling, water drops on glass, distant children with no recognizable words, gentle restrained instrumental score turning quietly hopeful at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Sunny and her mother appear on screen; exactly two cups total, the first stays straight and never repairs itself, nothing blooms instantly; no readable text or logos anywhere; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** She planted it crooked, with soil everywhere and black hands. We fixed it in ten seconds, out of love. Then she stopped reaching for the next cup. Sometimes helping means putting our own hands behind our back. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните — самая узнаваемая вина в этой подборке.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #LetThemTry #MindfulParenting #PerfectionismInParenting #ChildIndependence #GentleParenting #ChildDevelopment`

**Закреплённый комментарий:** «Часто "докручиваете" за ребёнка то, что он сделал сам? По-честному.»

---
---

# Сценарий 9 — «Порванная лямка»

**Герой:** Crafty · **Локация:** платформа метро · **Предмет-символ:** лямка рюкзака

## Концепт
У Crafty оторвалась лямка рюкзака. Он хочет сказать, но видит, что мама на пределе после рабочего дня, и молчит. Держит лямку пальцами и улыбается, когда на него смотрят. Когда платформа пустеет, мама видит и лямку, и его лицо.

## Оверлей-хук (для монтажа)
0.0–1.5s: `У него порвалась лямка. Он промолчал — мама и так на пределе.`
~7–9s: `Досмотри — лямка вот-вот не выдержит.`

## Палитра
Плитка платформы `#2F5F63`, свет ламп `#DCE7E6`, кожа рюкзака `#7A5A3C`, толстовка `#2F4A34`, стекло вагона `#3E5B60`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Crafty — take his face, glasses, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: On an evening metro platform, the strap of Crafty's leather backpack has torn. He wants to tell his mother, but she has just finished an exhausting workday and looks completely worn out. He decides not to add to it, quietly turns the backpack so the tear faces away, and holds the strap together with his fingers, smiling whenever anyone looks at him. As a train arrives and a passenger brushes past him, the tear widens. When the train leaves and the platform empties, his mother sees the torn strap and his face reflected in the dark glass, crouches down, and takes the weight of the backpack from him.

SETTING: a modern metro platform in the evening, cold artificial light, teal tiles; by the end the platform is empty and quiet.

CRAFTY: boy 6–8 years old, round glasses, chestnut hair brushed upward, dark green hoodie with one letter "M", brown leather backpack with a torn strap — matching @image1 exactly in every shot.

MOTHER: deeply exhausted but loving woman in her mid-30s, dark hair in a loosening low bun, a long gray wool coat, a black work bag. Tired and stressed, never angry.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE SWALLOWED SENTENCE: Crafty pinches the torn strap of his backpack together so it doesn't fall, then turns toward his mother and starts to open his mouth. She exhales heavily, closes her eyes for a second, and presses her temples — pure exhaustion, no anger. Crafty closes his mouth and quietly turns the backpack so the tear faces away from her.

SHOT 2 (5.0s–10.0s) — HOLDING IT TOGETHER: Crafty keeps a small brave smile among tired commuters, gripping the strap tighter as a train arrives and wind moves his hair. A passenger brushes past him and the tear widens slightly. As the train leaves and the platform empties, his brave smile fades and his eyes fill with quiet tears behind his glasses. No sobbing.

SHOT 3 (10.0s–15.0s) — SHE TAKES THE WEIGHT: His mother sees the torn strap and his face reflected in the dark glass, her exhaustion softening into quiet realization. She crouches to his eye level and takes the weight of the backpack out of his hand. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end sitting together on a platform bench, the backpack over her shoulder, the tear still visible.

EMOTION: Crafty hides the problem behind quick smiles whenever he's seen; his distress shows only once the platform empties. His mother stays visibly exhausted throughout, never angry, softening into full presence only at the end.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, detailed worn leather, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: metro ambience, an approaching train with wind, brakes and doors, footsteps, deep tunnel reverb after the train leaves, one quiet leather-and-stitching sound as the tear widens, gentle restrained instrumental score turning quietly reassuring at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Crafty and his mother appear on screen (commuters stay background only); one single torn strap, never repaired or taped; no readable text or logos anywhere except the letter "M" on the hoodie; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** His backpack strap tore on the way home. He held it together with his fingers and said nothing. Not because he was afraid of us — because he saw how tired we were. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните — детям не должно приходиться беречь нас.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #ParentalBurnout #MindfulParenting #EmotionalSafety #WorkingParents #GentleParenting #FamilyConnection`

**Закреплённый комментарий:** «Ваш ребёнок когда-нибудь молчал о проблеме, потому что видел, что вы устали?»

---
---

# Сценарий 10 — «Сердце в чемодане»

**Герой:** Crafty · **Локация:** выход на посадку в аэропорту · **Предмет-символ:** бумажное сердечко-брелок

## Концепт
Папа улетает в командировку. Crafty делает бумажное сердечко-брелок. Папа берёт его, не глядя, и машинально убирает в карман чемодана. Crafty машет, пока рядом люди. В очереди папа не находит сердечко в кармане, оборачивается — и видит опущенную руку сына.

## Оверлей-хук (для монтажа)
0.0–1.5s: `Он сделал сердечко сам. Мы убрали его в карман чемодана, не взглянув.`
~7–9s: `Досмотри — папа не может найти сердечко в кармане.`

## Палитра
Серо-голубой свет `#C6D3DC`, терминал `#F1F4F6`, чемодан `#40464C`, бумажное сердечко `#D9614F`, кожа рюкзака `#7A5A3C`.

## Prompt — видео (Seedance 2.0 Pro)

```text
Use @image1 as the only identity reference for Crafty — take his face, glasses, hair, and outfit from it exactly. Ignore the background, lighting, and any other people in the reference image completely.

SCENE: At an airport departure gate, Crafty gives his departing father a handmade paper heart keychain with a drawing on it. His father takes it warmly, slips it into his coat pocket without looking at the drawing, and — while checking his suitcase — absent-mindedly moves it into the suitcase's outer pocket and zips it shut. Crafty waves and smiles while people are around. When the seating area empties, his hand drops. In the boarding line, his father reaches for the heart, finds his pocket empty, turns, sees his son's face, steps out of the line, and finally looks at the drawing.

SETTING: a modern airport departure gate, pale gray-blue morning light through large windows; by the end the seating area is nearly empty.

CRAFTY: boy 6–8 years old, round glasses, chestnut hair brushed upward, dark green hoodie with one letter "M", brown leather backpack — matching @image1 exactly in every shot.

FATHER: warm, slightly rushed man in his mid-30s dressed for business travel, short dark hair, light stubble, a dark gray wool coat, a charcoal cabin suitcase. Loving but distracted by travel, never cold on purpose.

FORMAT: one continuous 15-second vertical 9:16 clip. Only two hard cuts, three shots total. No storyboard grid, no slideshow, no on-screen text anywhere.

SHOT 1 (0.0s–5.0s) — THE GIFT THAT WAS NEVER OPENED: Crafty holds out a handmade paper heart keychain to his father, who takes it with a quick warm smile and slips it into his coat pocket without looking at the drawing. As the boarding line moves, he kneels for a hug, and while checking his suitcase, absent-mindedly moves the heart from his coat into the suitcase's outer pocket and zips it shut.

SHOT 2 (5.0s–10.0s) — THE WAVE THAT DROPS: Crafty keeps a small brave smile and waves as his father joins the boarding line, other travelers around him. As the seating area empties and the line advances, his hand drops mid-wave, his smile fades, and his eyes fill with quiet tears behind his glasses. No sobbing, no running after his father.

SHOT 3 (10.0s–15.0s) — FOUND, TOO LATE TO MATTER LESS: In the line, his father reaches into his coat pocket for the heart, finds it empty, and understands. He steps out of the line, walks back, kneels at Crafty's eye level, opens the suitcase pocket, and takes out the bent paper heart. A phone appears briefly between them, screen glowing soft mint-green, no legible text. They end with his father putting the bent heart into his shirt pocket over his chest, holding Crafty's hand as boarding continues behind them.

EMOTION: Crafty is hopeful and brave in front of people; his sadness shows only once the gate area empties. His father moves from warm distraction to quiet realization to full presence — the trip still happens, nothing is magically undone.

PHONE MOMENT: only a soft glowing mint-green shape on the phone screen, no legible words or icons — the real ChildFocus interface will be added afterward in video editing, not rendered here.

STYLE: premium stylized 3D animated feature-film look, warm expressive faces, detailed coat and paper materials, gentle cinematic light, original character design — not photoreal, not a real photo, not imitating any named studio.

AUDIO: terminal ambience, rolling suitcase wheels, distant aircraft, a boarding chime without words, a zipper closing, thinning crowd noise, gentle restrained instrumental score turning quietly warm at the end. No dialogue, no lyrics, no narration.

KEEP CONSISTENT: only Crafty and his father appear as named characters on screen; one single paper heart, permanently bent once creased; no readable text or logos anywhere except the letter "M" on the hoodie; keep the camera simple and steady, avoid rapid cutting.
```

## Публикация в Instagram
**Подпись:** He made it himself and held it out with both hands. We took it, smiled, and zipped it into a suitcase pocket without ever looking at the drawing. A gift from a child is a sentence — it only counts if someone reads it. **ChildFocus — один маленький шаг к тому, чтобы быть рядом.** Подписывайтесь на @childfocusai. Сохраните этот пост перед следующей командировкой или отъездом.

**Хэштеги:** `#ChildFocus #childfocusai #parenting #momlife #WorkTrip #MindfulParenting #ChildEmotions #LongDistanceParenting #FamilyConnection #RaisingKids`

**Закреплённый комментарий:** «Смотрели по-настоящему на последний подарок, который вам подарил ребёнок?»

---
---

## 6. Финальный чек-лист

1. Если герой уже готов — грузите его изображение напрямую как `@image1`, раздел 3 не нужен.
2. Прогнать видео в Seedance 2.0 Pro одним промптом (без раскадровки), тестировать в 480–720p, финал собирать в 1080p. Если результат всё ещё слабый — переключиться на Kling 3.0 с тем же промптом без изменений.
3. Проверить по каждому ролику: только 2 склейки (3 плана), поворотный момент один и в одной локации, на экране телефона нет текста — только мягкое свечение.
4. Настоящий интерфейс ChildFocus (реальный скриншот из приложения) вклеивается поверх места с телефоном на монтаже — отдельным слоем, после экспорта видео.
5. При слабом результате конкретного плана — просить у модели перегенерировать только этот план отдельным сообщением, а не весь ролик заново.
6. На монтаже: два оверлей-текста (хук + ре-хук), обложка — кадр до поворотного момента.
7. Публиковать не чаще одного сценария в 2–3 дня.
8. Если качество всё ещё низкое даже с упрощённой версией — следующий шаг упрощения: сократить видео до 8–10 секунд (2 плана вместо 3) и оставить только сам поворотный момент плюс финал, без сцены-подводки.
