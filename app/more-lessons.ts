import type { Chapter } from './lessons';
const entries: Omit<Chapter, 'source'>[] = [
  {
    id: 1,
    name: 'Arjuna Vishada Yoga',
    title: 'When the path feels unclear',
    kidTitle: 'Even heroes have questions',
    summary: 'Meet Arjuna, and make room for honest questions.',
    lesson:
      'The Gita begins on the battlefield of Kurukshetra. Arjuna sees family and teachers on both sides and is overwhelmed by the consequences of war. Before answers arrive, he describes his confusion to Krishna. His distress starts the dialogue. An everyday takeaway is to notice a difficult feeling, put it into words and seek thoughtful guidance before choosing what to do.',
    kids: 'Arjuna is a skilled warrior, but he feels upset when he sees people he loves facing a battle. He tells Krishna how he feels. Being brave does not mean never feeling afraid. Sometimes bravery begins with saying, “I need help understanding this.”',
    practice:
      'Name a feeling you are having. Talk about it with someone you trust.',
    exampleTitle: 'Two responsibilities, one difficult choice',
    example:
      'Dev has promised to help a friend move, but a family need comes up. Rather than making a rushed promise he cannot keep, he explains the situation and discusses another way to help.',
    kidExampleTitle: 'The two best friends',
    kidExample:
      'Two friends ask Tara to choose a side in their argument. Her stomach feels tight. Tara asks her teacher how to help without hurting anyone. They discuss listening kindly without joining the argument.',
    reflect: 'Who could help you think when a choice feels confusing?',
    question: 'What is a helpful first step when you feel confused?',
    options: [
      'Pretend you already know everything.',
      'Make a choice before thinking.',
      'Name your feelings and ask someone trustworthy for guidance.',
    ],
    correct: 2,
    explanation:
      'Arjuna speaks honestly about his distress. Asking for guidance can begin a wiser conversation.',
    verse: '28',
    sanskrit:
      'अर्जुन उवाच।\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्॥\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति।',
    transliteration:
      'arjuna uvāca: dṛṣṭvemaṁ sva-janaṁ kṛṣṇa yuyutsuṁ samupasthitam; sīdanti mama gātrāṇi mukhaṁ ca pariśuṣyati.',
    meaning:
      'Arjuna tells Krishna that seeing his own people ready for battle makes his limbs weaken and his mouth grow dry.',
  },
  {
    id: 3,
    name: 'Karma Yoga',
    title: 'Make your actions matter',
    kidTitle: 'Be a quiet helper',
    summary: 'Discover the value of doing your part with care.',
    lesson:
      'Karma Yoga explores action performed without selfish attachment. Krishna encourages Arjuna to carry out his responsibilities rather than escape them. The spirit behind an action matters: we can contribute because it is worth doing, instead of making praise the condition for our help.',
    kids: 'Imagine everyone waiting for someone else to tidy up after a game. Nothing gets done! Karma Yoga reminds us to do our helpful part. You can put things away because it helps everyone, even if nobody gives you a sticker.',
    practice: 'Do one useful thing today without asking for praise.',
    exampleTitle: 'The invisible contribution',
    example:
      'A colleague notices that shared instructions are confusing. She rewrites them so the next person can work more easily. Her name may not appear on an announcement, but her action still improves the team’s day.',
    kidExampleTitle: 'After the art party',
    kidExample:
      'The painting is finished and everyone runs off to play. Kabir washes the brushes and asks a friend to help. He does not need to be called the best artist to make a useful contribution.',
    reflect: 'What small task would make life easier for someone nearby?',
    question: 'Which action best reflects selfless effort?',
    options: [
      'Helping because the task benefits others.',
      'Helping only when a reward is promised.',
      'Waiting for everyone else to act.',
    ],
    correct: 0,
    explanation:
      'Doing needed work with care, without making personal reward the main motive, reflects the spirit of Karma Yoga.',
    verse: '19',
    sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥',
    transliteration:
      'tasmād asaktaḥ satataṁ kāryaṁ karma samācara; asakto hy ācaran karma param āpnoti pūruṣaḥ.',
    meaning:
      'Keep doing the work that ought to be done, without attachment. Such action leads toward the highest spiritual goal.',
  },
  {
    id: 4,
    name: 'Jnana Karma Sannyasa Yoga',
    title: 'Let curiosity lead',
    kidTitle: 'Ask a wonderful question',
    summary: 'Learn through humility, questions and practice.',
    lesson:
      'This chapter connects spiritual knowledge with action. Krishna describes how understanding can change the way we act. Verse 4.34 highlights approaching those who know with humility, sincere questions and service. Learning requires listening carefully and putting understanding into practice.',
    kids: 'You do not have to know everything already. A good learner listens, asks “why?” and tries again. Krishna encourages sincere questions. Being respectful and being curious can go together.',
    practice: 'Ask one sincere question about something you do not understand.',
    exampleTitle: 'The beginner who learns faster',
    example:
      'Nisha joins a community garden. Instead of pretending to know how much water each plant needs, she asks the gardener and helps with the work. Questions and practice teach her more than guessing would.',
    kidExampleTitle: 'The paper bridge experiment',
    kidExample:
      'Isha’s paper bridge falls down. She asks her teacher why folded paper holds more weight, then builds another version. Her question turns disappointment into a discovery.',
    reflect: 'What is a question you have been too shy to ask?',
    question: 'What is a strong way to learn from a knowledgeable teacher?',
    options: [
      'Agree with everything without thinking.',
      'Listen respectfully, ask sincere questions and practise.',
      'Pretend you understand to look clever.',
    ],
    correct: 1,
    explanation:
      'The verse combines humility, inquiry and service. Thoughtful questions are part of learning.',
    verse: '34',
    sanskrit:
      'तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः॥',
    transliteration:
      'tad viddhi praṇipātena paripraśnena sevayā; upadekṣyanti te jñānaṁ jñāninas tattva-darśinaḥ.',
    meaning:
      'Seek understanding through humility, sincere questioning and service. Those who have seen the truth can guide you.',
  },
  {
    id: 5,
    name: 'Karma Sannyasa Yoga',
    title: 'Look beyond the labels',
    kidTitle: 'Different faces, equal respect',
    summary: 'Practise seeing the dignity in every living being.',
    lesson:
      'Krishna compares renunciation with action offered without attachment. Verse 5.18 describes the wise as seeing with an equal spiritual vision across differences of learning, social standing and species. An everyday application is to refuse to make someone’s status the measure of their dignity.',
    kids: 'People have different clothes, jobs, abilities and ways of speaking. Those differences do not decide who deserves kindness. Look beyond labels and treat living beings with care.',
    practice:
      'Notice someone whose work is often overlooked, and thank them respectfully.',
    exampleTitle: 'The same warm greeting',
    example:
      'At an event, Aman greets the cleaner with the same attention he gives the speaker. He notices what both people contribute instead of deciding whose presence matters by their job title.',
    kidExampleTitle: 'A place on the team',
    kidExample:
      'A new child speaks differently from the rest of the class. Riya invites them into the game and explains the rules patiently. Being new does not make someone less worthy of friendship.',
    reflect: 'What label could you look beyond today?',
    question: 'What does equal respect mean here?',
    options: [
      'Everyone must have the same skills.',
      'Only successful people deserve attention.',
      'Differences do not cancel anyone’s dignity.',
    ],
    correct: 2,
    explanation:
      'Equal vision concerns underlying spiritual worth, not identical abilities or needs.',
    verse: '18',
    sanskrit:
      'विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥',
    transliteration:
      'vidyā-vinaya-sampanne brāhmaṇe gavi hastini; śuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ.',
    meaning:
      'The wise see with equal spiritual vision across learned people, animals and those treated as social outsiders.',
  },
  {
    id: 6,
    name: 'Dhyana Yoga',
    title: 'Befriend your wandering mind',
    kidTitle: 'Bring your attention back',
    summary: 'Build focus gently, one return at a time.',
    lesson:
      'Dhyana Yoga discusses meditation, self-discipline and balanced living. A wandering mind is not a surprising failure. Verse 6.26 instructs the practitioner to bring it back again and again to its spiritual focus. An everyday parallel is patient attention: notice distraction, then return without giving up.',
    kids: 'Your mind sometimes hops from one idea to another like a little bird. When you notice it has wandered, gently bring it back. You do not have to get angry with yourself. Each return is another chance to practise.',
    practice:
      'Spend a quiet minute noticing your breathing. If distracted, gently return your attention.',
    exampleTitle: 'One paragraph at a time',
    example:
      'While reading, Sana reaches for her phone repeatedly. She moves it out of reach, rereads the paragraph and returns to her task. Each noticed distraction is a chance to begin again.',
    kidExampleTitle: 'The butterfly mind',
    kidExample:
      'While drawing, Neel thinks about snacks and tomorrow’s game. He notices, smiles and returns to the next line. His mind wandered, and he brought it back: that is practice.',
    reflect: 'What could make it easier to return to one task?',
    question: 'When your attention wanders, what should you practise?',
    options: [
      'Notice it and gently return your attention.',
      'Decide you can never concentrate.',
      'Get angry with yourself.',
    ],
    correct: 0,
    explanation:
      'The verse teaches repeated return. Distraction is a reason to practise, not abandon the effort.',
    verse: '26',
    sanskrit: 'यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥',
    transliteration:
      'yato yato niścarati manaś cañcalam asthiram; tatas tato niyamyaitad ātmany eva vaśaṁ nayet.',
    meaning:
      'Whenever the restless mind wanders, guide it back to the Self. Some devotional translations describe this focus as God.',
  },
  {
    id: 7,
    name: 'Jnana Vijnana Yoga',
    title: 'Wonder in the ordinary',
    kidTitle: 'A world full of wonder',
    summary: 'Find reminders of the divine in daily life.',
    lesson:
      'Krishna introduces knowledge of the divine and its presence throughout existence. In verse 7.8, he points to water, sunlight, moonlight, sacred sound and human ability. Familiar experiences can become reminders of the sacred rather than things we rush past.',
    kids: 'A sip of water after playing. Warm sunlight on a cool morning. Krishna uses simple things like these to describe his presence. Slow down and notice the wonderful things that help life grow.',
    practice:
      'Pause over a glass of water and appreciate what makes it possible.',
    exampleTitle: 'The ordinary glass of water',
    example:
      'After a long walk, Priya drinks water and notices its value. She remembers the rain and the people maintaining the water supply. She realises how easily she usually overlooks this daily gift.',
    kidExampleTitle: 'The wonder walk',
    kidExample:
      'Meera and her grandfather notice light on leaves and the sound of birds. Grandfather explains how ordinary things can remind a person of the divine.',
    reflect:
      'What familiar thing would feel extraordinary if you noticed it closely?',
    question:
      'Which experience does Krishna use as a reminder of his presence?',
    options: [
      'Only expensive objects.',
      'The taste of water and the light of the sun and moon.',
      'Only distant places.',
    ],
    correct: 1,
    explanation:
      'Verse 7.8 uses familiar experiences, including water and light, to teach recognition of the divine.',
    verse: '8',
    sanskrit: 'रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः।\nप्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु॥',
    transliteration:
      'raso ’ham apsu kaunteya prabhāsmi śaśi-sūryayoḥ; praṇavaḥ sarva-vedeṣu śabdaḥ khe pauruṣaṁ nṛṣu.',
    meaning:
      'Krishna identifies himself with water’s taste, the sun and moon’s radiance, Om in the Vedas, sound in space and human ability.',
  },
  {
    id: 8,
    name: 'Akshara Brahma Yoga',
    title: 'Remember what guides you',
    kidTitle: 'Keep goodness in mind',
    summary: 'Bring a deeper purpose into the things you do.',
    lesson:
      'This chapter considers the imperishable divine, remembrance and the end of life. Verse 8.7 asks Arjuna to remember Krishna while carrying out his battlefield responsibility. A daily-life application is to keep spiritual purpose present while acting, rather than separating reflection from the rest of life.',
    kids: 'It is easy to remember kindness when everything is quiet. Can you remember it during a busy game too? Krishna asks Arjuna to remember him while doing his work. Practise keeping good intentions with you as you act.',
    practice:
      'Before a familiar task, choose an intention such as patience or care.',
    exampleTitle: 'A reminder before a busy day',
    example:
      'Before work, Leela remembers why she wants to serve people well. During a stressful conversation, that intention helps her slow down and respond patiently.',
    kidExampleTitle: 'A kind game captain',
    kidExample:
      'Before football, Anaya decides to encourage her team. When someone misses a shot, she remembers her intention and says, “Let’s try again together.”',
    reflect: 'What intention would you like to remember during a busy moment?',
    question: 'What does verse 8.7 bring together?',
    options: [
      'Avoiding every responsibility.',
      'Thinking about rewards alone.',
      'Remembering Krishna while carrying out one’s responsibility.',
    ],
    correct: 2,
    explanation:
      'The verse joins remembrance and action. In its original setting, Krishna speaks to Arjuna about his battlefield duty.',
    verse: '7',
    sanskrit: 'तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्॥',
    transliteration:
      'tasmāt sarveṣu kāleṣu mām anusmara yudhya ca; mayy arpita-mano-buddhir mām evaiṣyasy asaṁśayam.',
    meaning:
      'Krishna tells Arjuna to remember him always while fulfilling his battlefield duty, with mind and understanding offered to him.',
  },
  {
    id: 9,
    name: 'Raja Vidya Raja Guhya Yoga',
    title: 'A small gift, a sincere heart',
    kidTitle: 'Love makes a gift special',
    summary: 'Explore devotion through simple, sincere offerings.',
    lesson:
      'Krishna presents intimate teachings about devotion and the divine. Verse 9.26 makes the lesson approachable: a leaf, flower, fruit or water can be an offering when given with devotion. The emphasis is on sincerity, not the price or grandeur of the object.',
    kids: 'A gift does not have to be big to carry love. Krishna says that even a leaf, a flower, a fruit or water can be offered with devotion. What matters is the caring heart behind the offering.',
    practice: 'Offer a small act of care with your full attention.',
    exampleTitle: 'An hour of attention',
    example:
      'Rohan cannot buy an expensive present for a family celebration. He cooks a simple meal and spends time listening. This modern example illustrates how sincerity can matter more than display.',
    kidExampleTitle: 'The handmade card',
    kidExample:
      'Tia makes a card with a crooked flower. She worries it is not fancy enough. Her grandmother smiles because Tia made it with care. The love behind it is the part she treasures.',
    reflect: 'What simple thing could you give with real care?',
    question: 'What matters most in the offering described in verse 9.26?',
    options: [
      'Its sincerity and devotion.',
      'Its expensive packaging.',
      'Whether other people admire it.',
    ],
    correct: 0,
    explanation:
      'The verse names very simple offerings and places the emphasis on devotion.',
    verse: '26',
    sanskrit:
      'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥',
    transliteration:
      'patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati; tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ.',
    meaning:
      'Krishna accepts a leaf, flower, fruit or water offered by a sincere person with devotion.',
  },
  {
    id: 10,
    name: 'Vibhuti Yoga',
    title: 'See the larger connection',
    kidTitle: 'A spark in every heart',
    summary: 'Recognise divine presence throughout living beings.',
    lesson:
      'Vibhuti Yoga describes expressions of divine splendour. Krishna names examples that help Arjuna recognise a reality greater than his limited perspective. Verse 10.20 begins with the divine present in every being and as the beginning, middle and end of their existence.',
    kids: 'A forest has many different living things. This chapter helps us look at life with wonder. Krishna describes himself as present in the hearts of all beings. Remembering this can help us act with more care.',
    practice:
      'Notice one connection between your life and another living being.',
    exampleTitle: 'The shared neighbourhood',
    example:
      'Residents plan a garden. They consider children, older neighbours, birds and pollinating insects. Looking at the wider web of life changes what they choose to plant.',
    kidExampleTitle: 'More than just a tree',
    kidExample:
      'Arun spots a bird, tiny insects and a dog resting in a tree’s shade. What seemed like one tree is part of many lives. He learns to notice those connections.',
    reflect: 'Who or what is affected by one of your everyday choices?',
    question: 'How does Krishna describe his presence in verse 10.20?',
    options: [
      'As belonging to only one group of people.',
      'As present in all beings.',
      'As absent from ordinary life.',
    ],
    correct: 1,
    explanation:
      'Krishna speaks of the Self present in all beings and their beginning, middle and end.',
    verse: '20',
    sanskrit: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥',
    transliteration:
      'aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ; aham ādiś ca madhyaṁ ca bhūtānām anta eva ca.',
    meaning:
      'Krishna is the Self within all beings, and their beginning, middle and end.',
  },
  {
    id: 11,
    name: 'Vishvarupa Darshana Yoga',
    title: 'A bigger view of life',
    kidTitle: 'See the bigger picture',
    summary: 'Let a wider perspective inspire humility and care.',
    lesson:
      'Arjuna is granted a vision of Krishna’s universal form. It reveals a vastness beyond ordinary sight, including creation and destruction. At the chapter’s close, Krishna returns to devotion, action offered to him and freedom from hostility toward living beings. Awe can lead back to how we live.',
    kids: 'Arjuna sees a form of Krishna that holds far more than he could imagine. The experience is huge and powerful. A small daily lesson is to remember that we are part of something bigger and treat others with care.',
    practice: 'In a disagreement, consider a perspective beyond your own.',
    exampleTitle: 'From my desk to the whole team',
    example:
      'A designer is frustrated by a requested change. After hearing from people who will use the product, she understands needs she had not considered. A wider view helps her respond with less defensiveness.',
    kidExampleTitle: 'The puzzle piece',
    kidExample:
      'Vihaan thinks his blue puzzle piece is the most important one. When he sees the whole picture, he realises every piece belongs. His small view becomes a bigger one.',
    reflect:
      'What might you notice if you stepped back from your own viewpoint?',
    question: 'Which quality appears in the closing teaching of chapter 11?',
    options: [
      'Winning every disagreement.',
      'Feeling superior to other people.',
      'Devotion without hostility toward living beings.',
    ],
    correct: 2,
    explanation:
      'Verse 11.55 combines dedicated action, devotion, freedom from attachment and freedom from malice.',
    verse: '55',
    sanskrit:
      'मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः।\nनिर्वैरः सर्वभूतेषु यः स मामेति पाण्डव॥',
    transliteration:
      'mat-karma-kṛn mat-paramo mad-bhaktaḥ saṅga-varjitaḥ; nirvairaḥ sarva-bhūteṣu yaḥ sa mām eti pāṇḍava.',
    meaning:
      'Those who act for Krishna, hold him as their highest aim, are devoted and free from attachment and hostility come to him.',
  },
  {
    id: 12,
    name: 'Bhakti Yoga',
    title: 'Let kindness become a habit',
    kidTitle: 'Kindness you can practise',
    summary: 'Discover devotion expressed through compassion.',
    lesson:
      'Bhakti Yoga explores devotion and the qualities of a devoted person. Verse 12.13 describes friendliness, compassion, freedom from hatred, humility and patience through pleasure and pain. These qualities connect spiritual learning with our treatment of others.',
    kids: 'Kindness is something we can practise. Krishna describes someone friendly, caring and not full of hatred. Be kind when sharing, listening or helping someone feel included. Kindness can also mean asking a trusted adult for help when someone is being hurt.',
    practice: 'Offer one specific act of kindness to someone today.',
    exampleTitle: 'A generous response',
    example:
      'A coworker makes an honest mistake. Farah helps fix it and explains what went wrong calmly. She can maintain a good standard without humiliating the person.',
    kidExampleTitle: 'The lonely lunch table',
    kidExample:
      'A new classmate eats alone. Sia asks if they would like company and listens to their answer. Her invitation makes room for friendship without forcing it.',
    reflect: 'How could you be kind while still being honest?',
    question: 'Which choice shows compassion?',
    options: [
      'Helping someone respectfully when they struggle.',
      'Laughing at someone’s mistake.',
      'Being friendly only to get something back.',
    ],
    correct: 0,
    explanation:
      'Friendliness and compassion are among the qualities described in verse 12.13.',
    verse: '13',
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥',
    transliteration:
      'adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca; nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī.',
    meaning:
      'A devotee is without hatred toward beings, friendly and compassionate, free from possessiveness and ego, steady in joy and sorrow, and forgiving.',
  },
  {
    id: 13,
    name: 'Kshetra Kshetrajna Vibhaga Yoga',
    title: 'Notice the one who notices',
    kidTitle: 'You can notice your feelings',
    summary: 'Explore experience and the awareness of it.',
    lesson:
      'This chapter distinguishes the field of experience from the knower of the field. Krishna calls the body the field and the one who knows it the field-knower. A simple starting point is observing experience: notice sensations and thoughts before acting on them. This is an introduction, not the whole philosophical teaching.',
    kids: 'You might say, “I notice I feel angry.” The anger is a feeling you can notice. Pause before choosing what to do. This is a small way to explore the difference between an experience and being aware of it.',
    practice:
      'Quietly name one sensation, one feeling and one thought you notice.',
    exampleTitle: 'A pause before replying',
    example:
      'After criticism, Anil notices heat in his face and an urge to argue. He names the feeling, pauses and asks which part of the feedback could help. Noticing creates room for choice.',
    kidExampleTitle: 'The weather inside',
    kidExample:
      'Pihu feels cross when a game ends. She says, “There is a stormy feeling inside me.” She notices it without throwing the game pieces, then asks for a break.',
    reflect: 'What changes when you say “I notice this feeling” before acting?',
    question: 'What is the body called in the selected verse?',
    options: [
      'The final answer to every question.',
      'The field, known by the field-knower.',
      'Something that never changes.',
    ],
    correct: 1,
    explanation:
      'The field and its knower introduce a distinction between the body and the one aware of it. Verse numbering varies by edition.',
    verse: '2',
    sanskrit:
      'श्रीभगवानुवाच।\nइदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते।\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः॥',
    transliteration:
      'śrī-bhagavān uvāca: idaṁ śarīraṁ kaunteya kṣetram ity abhidhīyate; etad yo vetti taṁ prāhuḥ kṣetra-jña iti tad-vidaḥ.',
    meaning:
      'Krishna calls this body the field; those who understand call the one who knows it the field-knower. This is 13.2 in the linked edition, 13.1 in some others.',
  },
  {
    id: 14,
    name: 'Gunatraya Vibhaga Yoga',
    title: 'Understand your inner weather',
    kidTitle: 'Find your clearer mind',
    summary: 'Notice clarity, restlessness and dullness without labels.',
    lesson:
      'Krishna describes three gunas, or qualities of nature: sattva, rajas and tamas, associated with clarity, restless activity and dullness. They are shifting influences, not fixed labels for good and bad people. Verse 14.6 adds a subtle point: even clarity can bind when we cling to happiness or the pride of knowing.',
    kids: 'Some moments feel clear, some busy and jumpy, and some foggy. This chapter describes qualities that shape experience. We can notice them and choose a helpful next step. A foggy moment does not make you a bad person.',
    practice:
      'Notice your current state, then choose a helpful action: a pause, a focused task or needed rest.',
    exampleTitle: 'The crowded browser',
    example:
      'Ravi has twenty tabs open and keeps switching tasks. He notices his restlessness, chooses one priority and closes distractions. Later he remembers not to look down on others just because he feels organised.',
    kidExampleTitle: 'Three kinds of afternoon',
    kidExample:
      'After school, Jai feels sleepy, then rushes between games. After a snack and a pause, he can listen to a story. He notices changing states instead of calling himself “always distracted.”',
    reflect: 'What helps you approach a task with a clearer mind?',
    question: 'What is the subtle warning about sattva in verse 14.6?',
    options: [
      'Clarity is impossible.',
      'People belong forever to one category.',
      'Even clarity can bind through attachment to happiness and knowledge.',
    ],
    correct: 2,
    explanation:
      'The verse praises sattva’s clarity while noting that attachment to its happiness and knowledge can also bind.',
    verse: '6',
    sanskrit: 'तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्।\nसुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ॥',
    transliteration:
      'tatra sattvaṁ nirmalatvāt prakāśakam anāmayam; sukha-saṅgena badhnāti jñāna-saṅgena cānagha.',
    meaning:
      'Sattva is clear and illuminating, yet can bind through attachment to happiness and knowledge.',
  },
  {
    id: 15,
    name: 'Purushottama Yoga',
    title: 'Remember your deeper roots',
    kidTitle: 'What helps you grow?',
    summary: 'Reflect on the divine source that sustains life.',
    lesson:
      'Purushottama Yoga uses an inverted tree to point beyond changing existence to the Supreme Person. Verse 15.15 describes Krishna as present in every heart and as the source of memory, knowledge and forgetfulness. The teaching invites humility about capacities we may otherwise treat as entirely our own.',
    kids: 'A tree needs roots even when we cannot see them. This chapter asks us to think about a deeper source of life. Krishna describes himself as present in every heart. Learn with gratitude instead of believing you did everything alone.',
    practice: 'Name three sources of support that help you learn or grow.',
    exampleTitle: 'More than a personal achievement',
    example:
      'After earning a qualification, Asha remembers her teachers, family and opportunities to study. She celebrates her effort while acknowledging support and, in her spiritual practice, the divine source of her abilities.',
    kidExampleTitle: 'The thank-you tree',
    kidExample:
      'Rehan draws a tree and writes a helper’s name on each root: his teacher, a friend and his family. The picture reminds him that growing takes effort and support.',
    reflect: 'What support might you be taking for granted?',
    question: 'What response fits this lesson about a deeper source?',
    options: [
      'Gratitude and humility about our abilities.',
      'Believing we never need to make an effort.',
      'Taking credit for absolutely everything.',
    ],
    correct: 0,
    explanation:
      'Recognising support and the divine source of capacities can encourage humility without cancelling personal effort.',
    verse: '15',
    sanskrit:
      'सर्वस्य चाहं हृदि सन्निविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च।\nवेदैश्च सर्वैरहमेव वेद्यो\nवेदान्तकृद्वेदविदेव चाहम्॥',
    transliteration:
      'sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca; vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham.',
    meaning:
      'Krishna is present in every heart, the source of memory, knowledge and forgetfulness, and the one to be known through the Vedas.',
  },
  {
    id: 16,
    name: 'Daivasura Sampad Vibhaga Yoga',
    title: 'Choose what helps you grow',
    kidTitle: 'Pause before you react',
    summary: 'Recognise harmful impulses and choose a wiser response.',
    lesson:
      'This chapter contrasts qualities supporting spiritual growth with destructive tendencies. Verse 16.21 names craving, anger and greed as dangerous pathways. Recognise an impulse before it directs your behaviour. Feeling a difficult emotion is a moment to pause and choose, not a reason to condemn yourself.',
    kids: 'Wanting something very badly or feeling angry can make it hard to think. Pause before grabbing or shouting. Take a breath, use words and ask for help if you need it. You are still learning how to choose.',
    practice:
      'When a strong impulse appears, pause before deciding how to act.',
    exampleTitle: 'Before pressing send',
    example:
      'Noor writes an angry reply to an upsetting message but waits before sending. Later she removes the insults and explains the issue clearly. Her anger is noticed, but it does not write the final message.',
    kidExampleTitle: 'The last piece of cake',
    kidExample:
      'Two children want the last piece of cake. One starts to grab it, then pauses and suggests sharing. Wanting more did not have to decide the action.',
    reflect: 'What could you do between feeling angry and responding?',
    question: 'What is a wise response to a harmful impulse?',
    options: [
      'Act immediately whenever you feel it.',
      'Pause, notice it and choose a less harmful action.',
      'Decide that having a feeling makes you a bad person.',
    ],
    correct: 1,
    explanation:
      'The teaching warns against being driven by destructive tendencies. Noticing an impulse creates room for a wiser response.',
    verse: '21',
    sanskrit:
      'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥',
    transliteration:
      'tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ; kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet.',
    meaning:
      'Craving, anger and greed are described as three gates to a destructive state, which one should leave behind.',
  },
  {
    id: 17,
    name: 'Shraddhatraya Vibhaga Yoga',
    title: 'Give your words some care',
    kidTitle: 'Words can be kind and true',
    summary: 'Practise speech that is truthful, kind and useful.',
    lesson:
      'Chapter 17 explores faith and the qualities behind habits, offerings and discipline. Verse 17.15 describes disciplined speech: truthful, beneficial, considerate words, together with sacred study. Applying it does not mean avoiding difficult conversations. It means caring about how and why we speak.',
    kids: 'Words can help someone learn, or make them feel small. Before speaking, ask: Is it true? Is it kind? Will it help? Tell the truth gently, including telling a trusted adult when something is wrong.',
    practice: 'Rephrase one harsh sentence so it is both honest and helpful.',
    exampleTitle: 'Feedback someone can use',
    example:
      'Instead of saying “Your work is terrible,” a reviewer says, “The main point is unclear. Could you add an example here?” The second sentence is honest and gives a useful next step.',
    kidExampleTitle: 'The wobbly drawing',
    kidExample:
      'A friend asks what you think of their drawing. Instead of laughing at a mistake, you notice the bright colours and offer a helpful idea if they want one. Kindness and honesty can work together.',
    reflect:
      'How could you make a difficult truth easier to hear without hiding it?',
    question: 'Which sentence best fits thoughtful speech?',
    options: [
      '“You are hopeless at this.”',
      '“I will say anything to get my way.”',
      '“This part is unclear; could we work through an example?”',
    ],
    correct: 2,
    explanation:
      'The last response is truthful, considerate and helpful. It focuses on the work and a possible improvement.',
    verse: '15',
    sanskrit: 'अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥',
    transliteration:
      'anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ ca yat; svādhyāyābhyasanaṁ caiva vāṅ-mayaṁ tapa ucyate.',
    meaning:
      'Discipline of speech includes words that are truthful, considerate and beneficial, along with regular sacred study.',
  },
  {
    id: 18,
    name: 'Moksha Sannyasa Yoga',
    title: 'Reflect. Choose. Begin.',
    kidTitle: 'Turn wisdom into a choice',
    summary: 'Bring what you have learned into your next action.',
    lesson:
      'The final chapter draws together action, knowledge, devotion, renunciation and liberation. In verse 18.63, Krishna asks Arjuna to reflect fully on the teaching and then choose how to act. Further teachings on devotion follow. Learning becomes meaningful when understanding informs a responsible choice.',
    kids: 'You have explored effort, kindness, focus and thoughtful choices. Krishna invites Arjuna to think deeply and choose. Pick one small idea to try in your own day. Learning grows when we put it into practice.',
    practice:
      'Choose one lesson from this journey and one action you will try today.',
    exampleTitle: 'From reading to doing',
    example:
      'After learning about thoughtful speech, Kiran notices a tense conversation at home. He chooses to listen before answering. One small action turns a remembered lesson into a lived practice.',
    kidExampleTitle: 'Your next tiny adventure',
    kidExample:
      'Naina has learned about helping without a prize. Today she puts away shared toys without waiting to be asked. It is her way of practising what she learned.',
    reflect: 'Which idea from the Gita will guide your next small choice?',
    question: 'What does Krishna invite Arjuna to do in verse 18.63?',
    options: [
      'Reflect deeply on the teaching, then choose how to act.',
      'Memorise without understanding.',
      'Wait for someone else to make every choice.',
    ],
    correct: 0,
    explanation:
      'The verse invites full reflection followed by choice. Wisdom is something to understand and apply.',
    verse: '63',
    sanskrit: 'इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया।\nविमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥',
    transliteration:
      'iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā; vimṛśyaitad aśeṣeṇa yathecchasi tathā kuru.',
    meaning:
      'Krishna says he has shared profound knowledge. He asks Arjuna to consider it fully, then act according to his choice.',
  },
];
export const moreChapters: Chapter[] = entries.map((c) => ({
  ...c,
  source: `https://www.holy-bhagavad-gita.org/chapter/${c.id}/verse/${c.id === 12 ? '13-14' : c.verse}/`,
}));
