# Product Requirement Document & Blueprint: My Big Feelings Quest

> Source design document for the **My Big Feelings Quest** app (`big-feelings/index.html`).
> Kept in the repo as the reference spec for future iterations.

## 1. Executive Summary & Vision

### 1.1 Product Overview
**"My Big Feelings Quest"** is an interactive, gamified social-emotional learning (SEL) application designed specifically for children aged 4 to 6 years old. The app serves as a safe psychological laboratory where young children can build a highly customized digital twin (avatar) and test-drive different behavioral responses to everyday frustrating, irritating, or overwhelming situations.

By mapping deep psychological frameworks—specifically the 16 Myers-Briggs Type Indicator (MBTI) personality dimensions—into simplified, kid-friendly "Play Styles," the app dynamically tailors its narration, somatic regulation coaching, and branching outcomes to align with each individual child's natural behavioral tendencies.

### 1.2 Core Educational & Psychological Objectives
* **Somatic Awareness:** Help children identify the physical sensations of anger, frustration, and anxiety (e.g., tight tummy, hot cheeks, pounding heart).
* **Impulse Control & Habituation:** Provide a low-stakes digital environment where children can choose negative reactions (outbursts/shutdowns) without real-world shame, witness the natural consequences, and voluntarily pivot toward healthy regulation.
* **Co-Regulation to Self-Regulation:** Act as a digital bridge, transitioning children from needing adult intervention to utilizing internal self-soothing mechanics (e.g., controlled breathing, emotional labeling).
* **Empathy Development:** Teach children to observe and interpret the facial expressions, body language, and feelings of peers and family members.

---

## 2. Phase 1: Onboarding & The Dynamic Avatar Creator

To maximize emotional projection and buy-in, the onboarding sequence allows the child to build an avatar that serves as their digital reflection. The entire sequence is non-text-dependent, driven completely by expressive animations and high-quality voiceover engineering.

### 2.1 Visual Customization Matrix
The character creator provides an inclusive array of features, allowing every child to feel represented. All items are represented by clean, easily tappable visual tokens.

* **Skin & Face Styles:** 8 distinct skin tones (spanning across cool, warm, and neutral spectrums), options for freckles, rosy cheeks, birthmarks, and inclusive options such as pediatric glasses, eye patches, and hearing aids.
* **Hair Textures & Styles:** Spiky, straight, wavy, curly, and coily (afro, cornrows, twists, puffs) textures. Color palettes include natural tones (black, brown, blonde, red) and highly requested whimsical tones (blue, pink, green).
* **Expressive Clothing & Assistive Devices:** Adaptable options including everyday hoodies, overalls, star-patterned capes, dinosaur onesies, space suits, and visual integration for specialized equipment like wheelchairs or custom walking crutches.

### 2.2 The Kid-Friendly MBTI Quiz (The "Play Style" Finder)
Once the visual avatar is finalized, an animated guide (e.g., a friendly, glowing firefly) appears to guide the child through three forced-choice questions to determine their behavioral archetype. Each choice is accompanied by a short, looping animation showing the action.

```
[Question 1: Introversion vs. Extraversion]
   ├── Option A (Extraversion): Big sandbox with many kids laughing.
   └── Option B (Introversion): Cozy blanket fort with a single plush toy.

[Question 2: Thinking vs. Feeling]
   ├── Option A (Thinking): Finding a towel/tool to clean a spilled mess.
   └── Option B (Feeling): Running over to give a crying friend a big hug.

[Question 3: Judging vs. Perceiving]
   ├── Option A (Judging): Laying out building blocks in a strict, neat row.
   └── Option B (Perceiving): Grabbing a bucket of blocks and throwing them in the air happily.
```

#### Voiceover Scripts for the Quiz:
1.  **Energy Direction (E vs. I):** *"Let’s power up your magic avatar! Where do you like to recharge your super-batteries? Do you love playing in a big, noisy sandbox with lots of friends? Or do you love sitting in a quiet, cozy blanket fort with your favorite toy?"*
2.  **Decision Style (T vs. F):** *"Oh no, your friend's yummy ice cream cone fell on the floor! What does your heart want to do first? Do you want to find a clean towel to help fix the mess? Or do you want to run over and give your friend a big, warm hug?"*
3.  **Environmental Structure (J vs. P):** *"It's time to build a castle! How do you like to start? Do you like to line up all your blocks perfectly by color and size before you build? Or do you like to flip the whole toy box upside down and see what happens?"*

---

## 3. The 16 Kid-Friendly Personality Archetypes

Behind the user interface, the system calculates the three inputs from the quiz (the fourth dimension, Sensing vs. Intuition, defaults to an age-appropriate blend of sensory grounding and imaginative play tailored per scenario). The child is assigned one of 16 profiles grouped into four distinct "Feelings Squads."

### 3.1 The Spark Squad (Diplomats / Idealists)
Focused on harmony, imagination, and deep feelings. They are highly empathetic but easily bruised by harsh words or perceived unkindness.

* **The Cheerleader (ENFP):** High energy, highly imaginative.
    * *Irritation Profile:* Gets loudly explosive, exaggerates the situation (*"This is the worst day ever in my whole life!"*), but is easily redirected by creative, whimsical alternatives.
* **The Team Captain (ENFJ):** Caring, inclusive, organized.
    * *Irritation Profile:* Becomes intensely frustrated or bossy when other children refuse to follow the "kindness rules" or share properly.
* **The Dreamy Poet (INFP):** Quiet, highly sensitive, creative.
    * *Irritation Profile:* Takes things deeply personally. Retreats into extreme sadness, crying quietly or giving up entirely on their creative projects.
* **The Gentle Guardian (INFJ):** Quiet, intuitive, protective.
    * *Irritation Profile:* Absorbs the negative energy of the room. Shuts down completely, refusing to speak or interact if the environment feels tense.

### 3.2 The Action Squad (Explorers / Artisans)
Focused on physical movement, immediate sensory engagement, and freedom. They struggle heavily with transitions and physical containment.

* **The Party Planner (ESFP):** Social, energetic, fun-loving.
    * *Irritation Profile:* Throws dramatic tantrums designed to capture the room's attention or forcefully change the emotional vibe of the group.
* **The Action Hero (ESTP):** Bold, physical, immediate.
    * *Irritation Profile:* Highest statistical risk for physical dysregulation—throwing toys, slamming doors, stomping feet, or pushing when crossed.
* **The Free Artist (ISFP):** Sensory, gentle, quiet creator.
    * *Irritation Profile:* When frustrated by an imperfect drawing or broken item, they will swiftly rip up the paper or smash their own work out of pure internal disappointment.
* **The Quiet Builder (ISTP):** Hands-on, logical, independent.
    * *Irritation Profile:* Snaps pieces together with aggressive strength, walks away abruptly without warning, or ignores adults entirely when a task fails.

### 3.3 The Guard Squad (Sentinels / Guardians)
Focused on routine, rules, fairness, and predictability. They experience high irritation when expectations shift unexpectedly.

* **The Grand Boss (ESTJ):** Natural organizer, literal, vocal.
    * *Irritation Profile:* Stomps their feet, quotes rules aggressively to peers, and shouts when items are not in their correct, designated places.
* **The Kind Neighbor (ESFJ):** Social, community-focused, structured.
    * *Irritation Profile:* Externalizes anxiety through crying, repetitive validation-seeking, or complaining that *"Nobody wants to be my friend anymore."*
* **The Truth Detective (ISTJ):** Rule-follower, highly literal, observant.
    * *Irritation Profile:* Becomes the classic "tattletale." Fixates entirely on who broke the rule (*"Teacher, they used the blue crayon without asking!"*) and refuses to move past the infraction.
* **The Loyal Sidekick (ISFJ):** Helpful, quiet, routine-driven.
    * *Irritation Profile:* Retreats into heavy pouting, harbors silent grudges, and uses closed-off body language (crossed arms, averted eyes) for long stretches.

### 3.4 The Brain Squad (Analysts / Intellectuals)
Focused on logic, problem-solving, mastery, and systems. They get irritated by incompetence, failure of mechanics, or arbitrary restrictions.

* **The Great Inventor (ENTP):** Analytical, argumentative, clever.
    * *Irritation Profile:* Turns behavioral corrections into a circular debate. Argues intensely about why their actions were logically justified or why the rule is silly.
* **The Big Director (ENTJ):** Assertive, strategic, commanding.
    * *Irritation Profile:* Takes over the classroom or play scenario forcefully. Becomes intensely bossy, dictating everyone's exact role and shouting if control is lost.
* **The Rocket Scientist (INTJ):** Independent, strategic planner.
    * *Irritation Profile:* Employs a silent, piercing glare. Completely detaches, stone-walls adults, and crossly refuses to participate in any group activities.
* **The Puzzle Master (INTP):** Introspective, conceptual solver.
    * *Irritation Profile:* Melts down inward. Retreats deeply into their mind, tunes out external voices entirely, and can become completely non-verbal when overwhelmed.

---

## 4. The Core Gameplay Loop

Every interactive scenario inside the app leverages a standard five-step behavioral modification loop. This consistency establishes psychological safety and predictability for the young user.

```
+---------------------------------------+
|        1. TRIGGER SCENARIO            |
|  (15-second high-relatability clip)   |
+-------------------+-------------------+
                    |
                    v
+---------------------------------------+
|         2. THE FEELING PAUSE          |
|  (Somatic scanning & heartbeat pulse) |
+-------------------+-------------------+
                    |
                    v
+---------------------------------------+
|         3. THE CHOICE MATRIX          |
|    [FIRE]   │   [ICE]   │   [STAR]    |
+--------+--------+----+--+-----+-------+
         |             |        |
         v             v        v
+---------------------------------------+
|         4. DYNAMIC OUTCOME            |
|  (Plays out natural consequence of    |
|   the selected emotional reaction)    |
+-------------------+-------------------+
                    |
                    v
+---------------------------------------+
|         5. COACHING & REWARD          |
|  (Customized archetype advice, stars) |
+---------------------------------------+
```

### 4.1 Detailed Breakdown of the Loop Steps
1.  **The Trigger Scenario:** A beautifully rendered, fluid 15-second character animation depicts a common childhood irritation. (e.g., A favorite toy is snatched away).
2.  **The Feeling Pause:** The background environment desaturates and slows down. The child's chosen avatar moves to the foreground. A glowing heart icon pulses on the avatar's chest accompanied by haptic vibrations on the device. The narrator models a somatic body scan: *"Oh oh! Look at your avatar's face. Your tummy feels super hot, and your hands want to squeeze tight! The Mad Monster is visiting. Let’s look at our options."*
3.  **The Choice Matrix:** The child is presented with three large, glowing, highly illustrative behavior buttons:
    * **The Fire Button (The Aggressive Outburst):** Icon of a burning flame / screaming face.
    * **The Ice Button (The Emotional Shutdown):** Icon of an icicle / hiding turtle.
    * **The Star Button (The Somatic Regulator):** Icon of a glowing star / breathing mouth.
4.  **The Dynamic Outcome:** The app plays out the uncensored, realistic social consequence of the choice.
5.  **Coaching & Reward:** The narrator breaks down the interaction using the child's MBTI profile logic, practices a physical self-regulation tool, and awards "Bravery Stars."

---

## 5. Comprehensive Content Matrix: Irritation Scenarios

The initial launch version contains 4 immersive worlds, each targeting a foundational pillar of early childhood social-emotional friction.

### World 1: The Sunnyside Playground (Focus: Sharing & Social Boundaries)

#### Scenario A: The Snatched Toy
* **The Trigger:** The avatar is happily pushing a toy dump truck through woodchips. An NPC child dashes into frame, rips the truck away without asking, and runs to the sandbox.
* **The Choices & Branching Outcomes:**
    * *Fire Choice (Aggressive Outburst):* The avatar tackles the NPC, screams *"Mine!"*, and shoves them. *Outcome:* The playground monitor rushes over, confiscates the truck entirely, and points the avatar to the time-out bench. The NPC cries bitterly.
    * *Ice Choice (Emotional Shutdown):* The avatar drops their head, collapses onto the woodchips, and cries silently, refusing to move or pick another toy. *Outcome:* The avatar remains alone and miserable while the NPC enjoys the truck.
    * *Star Choice (Somatic Regulator):* The avatar puts their hands on their hips, takes a deep belly breath, and says in a firm, loud, non-screaming voice: *"Stop! I was playing with that truck. You can have it when I am done!"* *Outcome:* The NPC pauses, looks surprised, hands the truck back, and asks, *"Can I have it next?"*
* **Archetype Coaching Script (Example for "The Truth Detective" - ISTJ):** *"You chose the Star Button! Fantastic job. You felt mad because a playground rule was broken. Ripping toys is not okay! But instead of physical fighting, you used your strong, firm talking voice. Look! The truck is safe, and you followed the best rule of all: being a problem solver!"*

#### Scenario B: The Swing Snatcher
* **The Trigger:** The avatar waits patiently in a designated line for the big swing. Just as the current rider gets off, a new child cuts the line entirely and hops onto the seat.
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar runs up and aggressively twists the swing chains, trying to dump the cutter off the seat. *Outcome:* The swing twists erratically, nearly hitting the avatar in the face. Everyone is shouting and unsafe.
    * *Ice Choice:* The avatar immediately walks away from the playground area, crossly kicking dirt, and sits behind a bush by themselves. *Outcome:* The playtime ends while the child is still hidden away, missing out on fun.
    * *Star Choice:* The avatar walks up to the swing, uses a hand signal to signal a pause, and says: *"Hey, I am next in line. You need to wait your turn behind me."* *Outcome:* The child sighs but steps off, allowing the avatar to swing happily.

---

### World 2: The Cozy Living Room (Focus: Transitions & Routine Disruptions)

#### Scenario A: Screen Time Shutdown
* **The Trigger:** The avatar is deeply locked into watching a colorful cartoon on a tablet. A parent NPC steps into the room and says, *"Okay sweetie, screen time is over. Five, four, three, two, one... tablet off."* The screen turns black.
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar screeches, throws the tablet forcefully onto the soft couch, and begins kicking the floor pillows. *Outcome:* The parent NPC looks sad and calm, picks up the tablet, puts it in a high locked cabinet, and says: *"Because we threw the tablet, there will be no screen time tomorrow at all."*
    * *Ice Choice:* The avatar slumps into a ball on the rug, hides their face under a pillow, and refuses to move or put on their shoes for park time. *Outcome:* The clock ticks down. The parent says: *"We wasted our outside time waiting for your body to move. Now we don’t have time to go to the park."*
    * *Star Choice:* The avatar presses the built-in "Breathe Bubble," inhales for 3 seconds, closes the tablet case gently, and says: *"Can I play with my racecars now?"* *Outcome:* The parent smiles warmly, gives the avatar a high-five, and unlocks the premium racecar toy track set.
* **Archetype Coaching Script (Example for "The Cheerleader" - ENFP):** *"Wow! Turning off the tablet felt super-duper hard because your imagination was having so much fun. It made your heart feel sad! But you pressed your Star Power. Instead of letting the Mad Monster take away tomorrow's fun, you transitioned your big energy into racecars. Look at that happy parent!"*

#### Scenario B: The Wrong Dinner Plate
* **The Trigger:** The avatar sits down at the kitchen table, expecting their favorite food on their favorite blue plate. The parent places down a green plate containing a new vegetable mix.
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar sweeps their arm across the table, knocking the green plate onto the floor, sending food flying everywhere. *Outcome:* The meal is ruined. The avatar is sent directly to their room to wait while the parent cleans up with an exhausted look.
    * *Ice Choice:* The avatar crossly slides down under the kitchen table, wrapping their hands tightly around their knees, refusing to eat a single bite or speak. *Outcome:* The family eats dinner together laughing, while the avatar sits lonely and hungry in the dark underneath.
    * *Star Choice:* The avatar points at the plate and says: *"I don't want to eat this new food yet. Can I have three small testing bites first, and a slice of bread?"* *Outcome:* The parent appreciates the compromise, adds a piece of bread, and praises their adventurous eating attempt.

---

### World 3: The Creative Craft Room (Focus: Mistakes, Failure & Perfectionism)

#### Scenario A: The Ripped Masterpiece
* **The Trigger:** The avatar spends a long time coloring a detailed rocket ship drawing. While trying to erase a small mistake outside the lines, the eraser catches, and the paper rips right down the middle.
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar crumples the entire paper into a tight ball, throws it across the room, and aggressively breaks their crayons in half. *Outcome:* The craft table is ruined, the drawing is unsalvageable in the trash, and there are no good crayons left to use.
    * *Ice Choice:* The avatar drops their chin to their chest, pushes the chair away, tears up, and mutters, *"I am bad at drawing. I am never drawing ever again."* *Outcome:* The creative energy freezes. The character sits in self-pity while the other kids finish their fun art projects.
    * *Star Choice:* The avatar takes a long, slow breath, walks over to the teacher's desk, and asks: *"Can I please have a piece of magic tape to heal my drawing?"* *Outcome:* The teacher applies shiny tape to the back of the paper. The rip becomes a cool "space lightning bolt" artifact on the rocket ship.
* **Archetype Coaching Script (Example for "The Rocket Scientist" - INTJ):** *"It is so irritating when our plans don't work out perfectly! Your brain wanted a flawless rocket ship. When it ripped, you wanted to freeze. But look at what you did! You treated the rip like a puzzle. By asking for tape, you solved the error and turned a mistake into an awesome lightning design. Brilliant thinking!"*

#### Scenario B: The Fallen Block Tower
* **The Trigger:** The child uses 30 complex wooden blocks to construct a skyscraper that matches a diagram perfectly. A clumsy peer walks by, trips over a rug, and crashes headfirst into the tower, sending it scattering across the floor.
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar grabs a heavy leftover block and hurls it directly at the peer who tripped. *Outcome:* The block hits the peer, who starts crying loudly. The avatar is immediately escorted away by a teacher for unsafe physical behavior.
    * *Ice Choice:* The avatar sits flat on the floor amidst the wreckage, covers their ears, and refuses to respond to the peer's apologies, locking up emotionally. *Outcome:* The peer walks away feeling awkward and rejected, leaving the avatar alone in the rubble.
    * *Star Choice:* The avatar clenches their fists, closes their eyes, counts to three, accepts the peer's apology, and says: *"That made me mad, but it was an accident. Will you help me rebuild it faster?"* *Outcome:* The peer happily agrees, and working together as a team, they build a tower twice as tall in half the time.

---

### World 4: The Family Game Night (Focus: Loss, Frustration & Good Sportsmanship)

#### Scenario A: The Last-Place Race
* **The Trigger:** The family is playing a colorful, interactive digital board game on the TV. The avatar rolls the virtual dice, hoping for a 6 to win. Instead, they roll a 1, landing on a mud trap. A sibling avatar slides past them into the finish line, cheering, *"I won! I won!"*
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar swipes the game board pieces off the table or slams the controller down, shouting: *"You cheated! This game is stupid and unfair!"* *Outcome:* The family shuts off the console immediately. The game night is cancelled, and the sibling thinks the avatar is a sore loser.
    * *Ice Choice:* The avatar bursts into tears, storms off to their bedroom, and slams the door, ruining the happy family atmosphere. *Outcome:* The avatar spends the rest of the evening alone in their room feeling miserable while hearing family laughter from the other room.
    * *Star Choice:* The avatar takes a deep "Superpower Breath," shakes their sibling's hand, and says: *"Good game! Next time I am going to catch you!"* *Outcome:* The parent praises their maturity, crowns them the "Sportsmanship Champion," and awards them a special golden sticker.
* **Archetype Coaching Script (Example for "The Action Hero" - ESTP):** *"Losing feels like a punch to the tummy for an Action Hero like you! You wanted to be the fastest and win the prize. But losing is just the setup for your next big comeback! By shaking hands and staying calm, you proved you have the strongest heart in the room. That is real superpower control!"*

#### Scenario B: Not Picking the Movie
* **The Trigger:** It's Friday night movie selection time. The avatar desperately wants to watch a cartoon about dinosaurs. After a family vote, the sibling's choice—a movie about magical sea animals—is selected instead.
* **The Choices & Branching Outcomes:**
    * *Fire Choice:* The avatar stands directly in front of the TV screen, blocking the view, screaming and crying until parents threaten to remove privileges. *Outcome:* The avatar is removed to a quiet space, missing out on any movie night or snacks.
    * *Ice Choice:* The avatar sits on the extreme edge of the couch, turns their back completely to the screen, crosses their arms tightly, and pouts aggressively throughout the entire feature. *Outcome:* The child misses a genuinely funny movie and spoils the family vibe.
    * *Star Choice:* The avatar takes a deep breath, grabs a bowl of popcorn, and says: *"Okay, we can watch the sea animals tonight, but next Friday is my dinosaur night, deal?"* *Outcome:* The parents enthusiastically agree to the deal, and the child discovers that the sea animal movie actually features a hilarious secret dinosaur character.

---

## 6. Mechanics, Somatic Tools & Parent Integration

### 6.1 The "Cool Down" Somatic Superpower Button
Positioned permanently in the top-right corner of every active scenario is the glowing **Breathe Bubble**. At any point during a high-tension scenario, a child can tap this button to pause the narrative action and enter an immersive, physiological co-regulation mini-game.

* **The Microphone Pinwheel:** The child is instructed via voiceover to take a deep breath through their nose and blow steadily into the device's microphone. The app translates the audio amplitude into real-time visual output, making an on-screen holographic pinwheel spin rapidly or causing a beautiful field of dandelions to scatter their seeds across the sky.
* **The Expandable Haptic Bubble:** Alternatively, children can place their thumb on a central orb that grows and shrinks in sync with a rhythmic breathing prompt (3 seconds inhale, 1 second hold, 3 seconds exhale), driving rhythmic haptic pulses into the child’s hand to anchor their physical nervous system.

```
+--------------------------------------------------------+
|                      [BREATHE BUBBLE]                  |
|                                                        |
|      ( ) -> Inhale Deeply  (Bubble Grows visually)     |
|     (   ) -> Hold Breath    (Haptic Vibration Pulses)   |
|      ( ) -> Exhale Slowly  (Pinwheel Spins on Screen)  |
|                                                        |
+--------------------------------------------------------+
```

### 6.2 Visual Reward Framework & The "Room of Resilience"
To prevent emotional shame loops, the app avoids negative indicators. Selecting a "Fire" or "Ice" outcome does not issue a red "X" or deduct points. Instead, the game demonstrates the natural consequence, handles it with gentle coaching, and smoothly loops the child back to the choice matrix to try again.

* **Bravery Stars:** Awarded exclusively when the child discovers or executes the "Star" (regulated) pathway.
* **The Room of Resilience:** A personal sandbox space where children can spend their Bravery Stars to unlock fun interactive elements (e.g., interactive toys, custom wallpapers, emotional pet companions) to decorate their avatar's home base, driving continuous engagement.

### 6.3 The Analytical Parent Dashboard
Accessible only via a secure parent gate (numerical calculation lock), this dashboard translates gameplay telemetry into actionable psychological insights for caregivers.

```
+------------------------------------------------------------+
|                  PARENT METRIC OVERVIEW                    |
|                                                            |
|  * Detected Kid Style: THE TRUTH DETECTIVE (ISTJ)          |
|  * Primary Stress Trigger: World 3 - Routine/Error Shifts   |
|  * Preferred Reaction Vector: ICE (64% Initial Selections) |
|                                                            |
+------------------------------------------------------------+
```

* **Behavioral Diagnostics:** The dashboard monitors the child's initial choice vectors. It generates alerts such as: *"Tommy tends to choose 'Ice/Shutdown' behaviors (64% of the time) when dealing with artistic errors or mistakes, indicating a fear of failure."*
* **Tailored Co-Regulation Scripts:** The system generates specific verbal phrasing for parents to use at home based on their child's unique archetype profile:

> **Real-World Parenting Script for an ISTJ ("Truth Detective") Child:**
> *"Next time your child experiences a meltdown over a broken rule or a ruined drawing at home, avoid saying 'It's no big deal.' Instead, validate their structure first: 'I see that your plan didn't work out, and that feels really unfair. Your body feels tight. Let’s take a star breath together and figure out how to repair the pieces like a puzzle team.'"*
