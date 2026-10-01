// ================================
// Language
// ================================
let currentLang = "en";
try { currentLang = localStorage.getItem("lang") === "ru" ? "ru" : "en"; } catch { /* Storage is optional. */ }

// ================================
// Translations (UI text)
// ================================
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            courses: "Courses",
            teachers: "Teachers",
            testimonials: "Testimonials",
            contact: "Contact"
        },
        hero: {
            name: "Tatra Talk",
            tagline: "Master Slovak Language with Expert Guidance",
            description: "Tatra Talk is a premier Slovak language school dedicated to helping students of all levels achieve fluency."
        },
        buttons: {
            contactBtn: "Contact Us",
            explore: "Explore Courses",

        },
        sections: {
            aboutTitle: "About Tatra Talk",
            coursesTitle: "Our Courses",
            teachersTitle: "Meet Our Teachers",
            testimonialsTitle: "Student Testimonials",
            contactTitle: "Get In Touch"
        },
        about: {
            mission: "Our mission is to provide high-quality Slovak language education in a welcoming and supportive environment.",
            established: "2025"
        },
        footer: {
            tagline: "Learn Slovak with confidence",
            rights: "All rights reserved."
        }
    },

    ru: {
        nav: {
            home: "Главная",
            about: "О нас",
            courses: "Курсы",
            teachers: "Преподаватели",
            testimonials: "Отзывы",
            contact: "Контакты"
        },
        hero: {
            name: "Tatra Talk",
            tagline: "Изучайте словацкий язык с профессионалами",
            description: "Tatra Talk — современная школа словацкого языка для студентов любого уровня."
        },
        buttons: {
            explore: "Посмотреть курсы",
            contactBtn: "Связаться с нами",
        },
        sections: {
            aboutTitle: "О школе Tatra Talk",
            coursesTitle: "Наши курсы",
            teachersTitle: "Наши преподаватели",
            testimonialsTitle: "Отзывы студентов",
            contactTitle: "Свяжитесь с нами"
        },
        about: {
            mission: "Наша миссия — предоставлять качественное обучение словацкому языку в комфортной и дружелюбной атмосфере.",
            established: "2025"
        },
        footer: {
            tagline: "Изучайте словацкий язык уверенно",
            rights: "Все права защищены."
        }
    }
};

// ================================
// Courses
// ================================
const courses = [
    {
        id: 1,
        title: {
            en: "Beginner Slovak (A1–A2)",
            ru: "Словацкий для начинающих (A1–A2)"
        },
        description: {
            en: "Perfect for those starting their Slovak language journey.",
            ru: "Идеально для тех, кто только начинает изучение словацкого языка."
        },
        level: {
            en: "Beginner",
            ru: "Начальный"
        },
        duration: {
            en: "12 weeks",
            ru: "12 недель"
        },
        sessions: {
            en: "2 sessions per week",
            ru: "2 занятия в неделю"
        }
    },
    {
        id: 2,
        title: {
            en: "Intermediate Slovak (B1–B2)",
            ru: "Словацкий среднего уровня (B1–B2)"
        },
        description: {
            en: "Build on your foundation with more complex grammar and vocabulary.",
            ru: "Развивайте навыки с более сложной грамматикой и расширенным словарным запасом."
        },
        level: {
            en: "Intermediate",
            ru: "Средний"
        },
        duration: {
            en: "16 weeks",
            ru: "16 недель"
        },
        sessions: {
            en: "2 sessions per week",
            ru: "2 занятия в неделю"
        }
    },
    {
        id: 3,
        title: {
            en: "Advanced Slovak (C1–C2)",
            ru: "Продвинутый словацкий (C1–C2)"
        },
        description: {
            en: "Achieve near-native fluency with advanced grammar and communication.",
            ru: "Достигните уровня носителя с углубленной грамматикой и разговорной практикой."
        },
        level: {
            en: "Advanced",
            ru: "Продвинутый"
        },
        duration: {
            en: "20 weeks",
            ru: "20 недель"
        },
        sessions: {
            en: "2 sessions per week",
            ru: "2 занятия в неделю"
        }
    },
    {
        id: 4,
        title: {
            en: "Business Slovak",
            ru: "Деловой словацкий"
        },
        description: {
            en: "Professional Slovak for business communication.",
            ru: "Профессиональный словацкий для делового общения."
        },
        level: {
            en: "Intermediate+",
            ru: "Выше среднего"
        },
        duration: {
            en: "10 weeks",
            ru: "10 недель"
        },
        sessions: {
            en: "1 session per week",
            ru: "1 занятие в неделю"
        }
    }
];

// ================================
// Teachers
// ================================
const teachers = [
    {
        id: 1,
        name: {
            en: "Slavka",
            ru: "Славка"
        },
        title: {
            en: "Senior Slovak Language Instructor",
            ru: "Старший преподаватель словацкого языка"
        },
        bio: {
            en: "Slavka teaches Czech and Slovak, specializing in individual lessons and small groups (up to 12 students). She emphasizes a creative approach. Her lessons are based on her own materials, which are designed with an emphasis on effectiveness and appeal, ensuring not only knowledge transfer but also maximum enjoyment. Slavka received her education at Charles University in Prague, where she completed a course in teaching Czech, and at Masaryk University in Brno.",
            ru: "Славка преподает чешский и словацкий языки, причем специализируется на индивидуальных занятиях и на маленьких группах (до 12 человек). При своей работе акцентирует креативный подход. Ее уроки основаны на ее собственных материалах, которые созданы с акцентом на эффективность и привлекательность материалов там, чтобы не только передавать знания, но и достигать максимального удовольствия от уроков. Образование Славка получила на Карловом университете в Праге, где закончила курсы преподавателя чешского языка, и на Масарыковом университете в городе Брно.  Опыт преподавания получила в частных организациях в Братиславе, где кроме преподавания создавала экзамены на уровни А1-Б1. Славка закончила высшее образование по специальности Русский язык и литература, поэтому ее знания русского языка на уровне носителя. "
        },
        experience: {
            en: "12+ years experience",
            ru: "Опыт преподавания более 12 лет"
        },
        specialization: {
            en: "Beginner & Intermediate Levels",
            ru: "Начальный и средний уровни"
        },
        imageUrl: "https://via.placeholder.com/400x400/D4A373/FFFFFF?text=Teacher+1"
    },
    {
        id: 2,
        name: {
            en: "Kristina",
            ru: "Кристина"
        },
        title: {
            en: "Senior Slovak Language Instructor",
            ru: "Старший преподаватель словацкого языка"
        },
        bio: {
            en: "Kristina specializes in teaching Slovak to Russian-speaking clients. She also prepares students for Slovak language and literature exams held in Slovak schools. Her lessons are based on the textbook 'Krížom Krážom,' supplemented by additional exercises. Her lessons emphasize topics such as correct pronunciation and spelling. She also teaches lessons on complex topics such as word order. Her knowledge of Russian at level A1 makes her the ideal teacher for those who want to force themselves to speak exclusively Slovak from the start.",
            ru: "Кристина специализируется на преподавании словацкого языка русскоязычным клиентам. Кроме того готовит к экзаменам в словацких школах по словацкому языку и литературе. Основой ее уроков является учебник Krížom Krážom, к которым делает дополнительные упражнения. При своих уроках акцентирует такие темы как правильное произношение и написание. Ведет также уроки по сложным темам, таким как порядок слов. Ее знания русского языка на уровне А1 делают ее идеальным преподавателем для тех, кто хочет заставить себя говорить с самого начала исключительно по-словацки. "
        },
        experience: {
            en: "12+ years experience",
            ru: "Опыт преподавания более 12 лет"
        },
        specialization: {
            en: "Beginner & Intermediate Levels",
            ru: "Начальный и средний уровни"
        },
        imageUrl: "https://via.placeholder.com/400x400/D4A373/FFFFFF?text=Teacher+1"
    },
    {
        id: 3,
        name: {
            en: "Petra",
            ru: "Петра"
        },
        title: {
            en: "Senior Slovak Language Instructor",
            ru: "Старший преподаватель словацкого языка"
        },
        bio: {
            en: "Petra has been teaching Slovak and Czech as native speakers since 2009, and since 2013, almost exclusively online, individually and in small groups. She completed higher education in the Czech Republic, Slovakia, and Germany (PhD in Russian). She has worked as a teacher at universities in the Czech Republic and Germany She is the author of several textbooks and dictionaries, including the Russian-Czech-Slovak dictionary of phraseological synonyms. She is fluent in Russian, German, and Polish. We can explain in both Russian and Slovak. In her lessons, she uses her own method, developed based on her experience teaching German, Czech, and Polish. This method focuses on a cyclical approach (repetition of topics with the addition of new ones) and conversational practice – this allows for better speaking skills than using the Krížom Krážom textbook.",
            ru: "Петра преподает словацкий и чешский языки как свои родные с 2009 года, с 2013 года почти исключительно онлайн индивидуально и в маленьких группах. Закончила высшего образование в Чехии, Словакии и Германии (степень доктора наук по русскому языку). Работала преподавателем в вузах в Чехии и Германии.  Является автором нескольких учебников и словарей, в том числе русско-чешско-словацкого словаря фразеологических синонимов.  Свободно владеет русским, немецким, но также польским языками. Можем объяснять как на русском, так и на словацком языках. На уроках использует свой собственный метод, разработанный на базе преподавания немецкого, чешского и польского языков. Метод сосредоточен на циклическом подходе (повторение тем с добавлением новых) и разговорной практике – это позволяет получить лучше навыки говорения чем использование учебника Krížom Krážom. "
        },
        experience: {
            en: "12+ years experience",
            ru: "Опыт преподавания более 12 лет"
        },
        specialization: {
            en: "Beginner & Intermediate Levels",
            ru: "Начальный и средний уровни"
        },
        imageUrl: "https://via.placeholder.com/400x400/D4A373/FFFFFF?text=Teacher+1"
    }
];

// ================================
// Testimonials
// ================================
const testimonials = [
    {
        id: 1,
        name: "Maria K.",
        country: {
            en: "Germany",
            ru: "Германия"
        },
        text: {
            en: "Amazing teachers and friendly atmosphere!",
            ru: "Потрясающие преподаватели и дружелюбная атмосфера!"
        },
        course: {
            en: "Intermediate Slovak",
            ru: "Словацкий среднего уровня"
        },
        rating: 5
    }
];

// ================================
// Contact Info
// ================================
const contactInfo = {
    email: "info@tatratalk.sk",
    phone: "+421 XXX XXX XXX",
    address: {
        en: "Bratislava, Slovakia",
        ru: "Братислава, Словакия"
    },
    hours: {
        en: "Mon–Fri: 9:00–19:00",
        ru: "Пн–Пт: 9:00–19:00"
    },
    instagram: "https://www.instagram.com/tatratalk.sk/"
};
