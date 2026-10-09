const objData = {
    '001': {
        title: 'Half-Life: Alyx',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg',
        price: '14000',
        genre: 'VR / Шутер / Sci-Fi',
        rating: 9.7,
        desc: 'VR-шутер от Valve, действие происходит между Half-Life и Half-Life 2.',
        publisher: 'Valve'
    },
    '002': {
        title: 'Fallout 4 VR',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/611660/header_292x136.jpg',
        price: '20150',
        genre: 'VR / RPG / Открытый мир',
        rating: 8.5,
        desc: 'Постапокалиптическая RPG с полным VR-погружением.',
        publisher: 'Bethesda Softworks'
    },
    '003': {
        title: 'Surgeon Simulator: Experience Reality',
        img: 'https://steamcdn-a.akamaihd.net/steam/apps/518920/header_292x136.jpg',
        price: '1040',
        genre: 'VR / Симулятор / Юмор',
        rating: 7.6,
        desc: 'Абсурдный симулятор хирурга в VR — проведите операции, если осмелитесь!',
        publisher: 'Bossa Studios'
    },
    '004': {
        title: 'Lost Ember VR Edition',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1880890/header_292x136.jpg',
        price: '1170',
        genre: 'VR / Приключение / Инди',
        rating: 8.9,
        desc: 'Путешествуйте по миру в образе разных животных и откройте древние тайны.',
        publisher: 'Mooneye Studios'
    },
    '005': {
        title: 'Townsmen VR',
        img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/749960/header.jpg?t=1762952123',
        price: '8990',
        genre: 'VR / Стратегия / Симулятор',
        rating: 8.2,
        desc: 'Стройте и управляйте средневековым городом своими руками в виртуальной реальности.',
        publisher: 'HandyGames'
    },
    '006': {
        title: 'Population: One',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/691260/header_292x136.jpg',
        price: '6500',
        genre: 'VR / Шутер / Онлайн',
        rating: 8.3,
        desc: 'Королевская битва в VR — строй, летай, сражайся в трёхмерном пространстве.',
        publisher: 'BigBox VR'
    },
    '007': {
        title: 'Torn',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/557520/header.jpg?t=1680629664',
        price: '3100',
        genre: 'VR / Детектив / Приключение',
        rating: 7.9,
        desc: 'Атмосферный научно-фантастический триллер с головоломками и сильной сюжетной линией.',
        publisher: 'Aspyr'
    },
    '008': {
        title: 'Project CARS 3 VR',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/958400/header_292x136.jpg',
        price: '12000',
        genre: 'VR / Гонки / Симулятор',
        rating: 7.0,
        desc: 'Реалистичные гонки с поддержкой VR, динамикой и мощными автомобилями.',
        publisher: 'Bandai Namco'
    },
    '009': {
        title: 'Beat Saber',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620980/header_292x136.jpg',
        price: '4500',
        genre: 'VR / Музыка / Ритм',
        rating: 9.5,
        desc: 'Музыкальная игра, где нужно рубить блоки световыми мечами под ритм музыки.',
        publisher: 'Meta Publishing'
    },
    '010': {
        title: 'The Walking Dead: Saints & Sinners',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/916840/header_292x136.jpg',
        price: '9700',
        genre: 'VR / Хоррор / Экшен',
        rating: 9.0,
        desc: 'Погрузитесь в мрачный мир The Walking Dead и боритесь за выживание в VR.',
        publisher: 'Skydance Interactive'
   },

    '011': {
        title: 'Cyberpunk 2077',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header_292x136.jpg',
        price: '19900',
        genre: 'RPG / Открытый мир / Экшен',
        rating: 9.1,
        desc: 'Исследуйте Найт-Сити в роли наёмника Ви.',
        publisher: 'CD Projekt Red'
    },
    '012': {
        title: 'The Witcher 3: Wild Hunt',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header_292x136.jpg',
        price: '7500',
        genre: 'RPG / Фэнтези / Открытый мир',
        rating: 9.8,
        desc: 'Геральт из Ривии снова в пути — охота на чудовищ и поиски Цири продолжаются.',
        publisher: 'CD Projekt Red'
    },
    '013': {
        title: 'Red Dead Redemption 2',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header_292x136.jpg',
        price: '19500',
        genre: 'Приключение / Открытый мир / Экшен',
        rating: 9.7,
        desc: 'Величественный Дикий Запад от Rockstar Games.',
        publisher: 'Rockstar Games'
    },
    '014': {
        title: 'Grand Theft Auto V',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header_292x136.jpg',
        price: '8500',
        genre: 'Экшен / Открытый мир / Онлайн',
        rating: 9.5,
        desc: 'Три героя, один город, бесконечные возможности.',
        publisher: 'Rockstar Games'
    },
    '015': {
        title: 'Baldur’s Gate 3',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header_292x136.jpg',
        price: '18500',
        genre: 'RPG / Фэнтези / Тактика',
        rating: 9.6,
        desc: 'Эпическая RPG по Dungeons & Dragons.',
        publisher: 'Larian Studios'
    },
    '016': {
        title: 'Elden Ring',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header_292x136.jpg',
        price: '17900',
        genre: 'RPG / Souls-like / Открытый мир',
        rating: 9.8,
        desc: 'Исследуйте Междуземье от создателей Dark Souls.',
        publisher: 'Bandai Namco'
    },
    '017': {
        title: 'Hades',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header_292x136.jpg',
        price: '4500',
        genre: 'Рогалик / Экшен / Инди',
        rating: 9.4,
        desc: 'Выберитесь из Ада, побеждая богов Олимпа.',
        publisher: 'Supergiant Games'
    },
    '018': {
        title: 'Hollow Knight',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header_292x136.jpg',
        price: '3000',
        genre: 'Инди / Метроидвания / Приключение',
        rating: 9.5,
        desc: 'Исследуйте Hallownest и откройте древние тайны.',
        publisher: 'Team Cherry'
    },
    '019': {
        title: 'Stardew Valley',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header_292x136.jpg',
        price: '2500',
        genre: 'Инди / Симулятор / Ферма',
        rating: 9.3,
        desc: 'Создайте ферму своей мечты и заведите друзей.',
        publisher: 'Chucklefish'
    },
    '020': {
        title: 'Dark Souls III',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header_292x136.jpg',
        price: '11000',
        genre: 'RPG / Экшен / Хардкор',
        rating: 9.2,
        desc: 'Каждый бой — испытание, каждая победа — триумф.',
        publisher: 'Bandai Namco'
    },
    '021': {
        title: 'Sekiro: Shadows Die Twice',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header_292x136.jpg',
        price: '13500',
        genre: 'Экшен / Самурай / Souls-like',
        rating: 9.4,
        desc: 'Отрубите всё, что встанет на пути к мести.',
        publisher: 'Activision'
    },
    '022': {
        title: 'Assassin’s Creed Odyssey',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/812140/header_292x136.jpg',
        price: '9990',
        genre: 'RPG / Приключение / Открытый мир',
        rating: 8.7,
        desc: 'Исследуйте Древнюю Грецию и станьте героем мифа.',
        publisher: 'Ubisoft'
    },
    '023': {
        title: 'No Man’s Sky',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header_292x136.jpg',
        price: '8500',
        genre: 'Выживание / Открытый мир / Sci-Fi',
        rating: 8.9,
        desc: 'Исследуйте бесконечную вселенную, полную открытий.',
        publisher: 'Hello Games'
    },
    '024': {
        title: 'Resident Evil 4 Remake',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header_292x136.jpg',
        price: '18900',
        genre: 'Хоррор / Экшен / Приключение',
        rating: 9.6,
        desc: 'Культовый хоррор в современном исполнении.',
        publisher: 'Capcom'
    },
    '025': {
        title: 'Lies of P',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/header_292x136.jpg',
        price: '16900',
        genre: 'RPG / Souls-like / Готика',
        rating: 8.8,
        desc: 'Мрачная сказка в духе Пиноккио с жестокими боями.',
        publisher: 'Neowiz'
    },
    '026': {
        title: 'Forza Horizon 5',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header_292x136.jpg',
        price: '17900',
        genre: 'Гонки / Открытый мир / Симулятор',
        rating: 9.3,
        desc: 'Исследуйте Мексику за рулём сотен автомобилей.',
        publisher: 'Xbox Game Studios'
    },
    '027': {
        title: 'R.E.P.O.',
        img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3241660/1ea445e044a2d5b09cfa8291350b63ebed6e5741/header.jpg?t=1761906910',
        price: '2900',
        genre: 'Хоррор / Онлайн / Юмор',
        rating: 9.0,
        desc: 'Кооперативная компьютерная игра в жанре survival horror',
        publisher: 'semiworks'
    },
    '028': {
        title: 'Terraria',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header_292x136.jpg',
        price: '2200',
        genre: 'Инди / Песочница / Выживание',
        rating: 9.6,
        desc: 'Создайте свой мир и отправьтесь на приключения.',
        publisher: '505 Games'
    },
    '029': {
        title: 'The Forest',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header_292x136.jpg',
        price: '3700',
        genre: 'Выживание / Хоррор / Открытый мир',
        rating: 8.9,
        desc: 'Выживайте в лесу, полном тайн и опасностей.',
        publisher: 'Endnight Games'
    },
    '030': {
        title: 'Hogwarts Legacy',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header_292x136.jpg',
        price: '21900',
        genre: 'RPG / Фэнтези / Приключение',
        rating: 9.2,
        desc: 'Погрузитесь в волшебный мир Гарри Поттера как ученик Хогвартса.',
        publisher: 'Warner Bros. Games'
    },
    '031': {
        title: 'The Lord of the Rings: Gollum',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1265780/header.jpg?t=1716976361',
        price: '2000',
        genre: 'Приключения / Платформер / Стелс',
        rating: 3.4,
        desc: 'Приключенческая игра про Голлума — критики жаловались на скучный геймплей и плохую реализацию сюжета.',
        publisher: 'Daedalic Entertainment'
    },
    '032': {
        title: 'Flashback 2',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2008420/header.jpg?t=1746630292',
        price: '1200',
        genre: 'Платформер / Приключения',
        rating: 3.5,
        desc: 'Сиквел классического Flashback, который не смог оправдать ожидания — критики отметили жалкую графику и устаревший дизайн.',
        publisher: 'Microids'
    },
    '033': {
        title: 'Greyhill Incident',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1905020/header.jpg?t=1730376629',
        price: '1500',
        genre: 'Хоррор / Приключения',
        rating: 3.8,
        desc: 'Психологический хоррор, но критики сочли его слабым и плохо проработанным.',
        publisher: 'Refugium Games'
    },
    '034': {
        title: 'FlatOut 3: Chaos & Destruction',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/201510/header.jpg?t=1750135069',
        price: '2312',
        genre: 'Гонки / Хоррор',
        rating: 2.3,
        desc: 'Аркадная гонка с упором на разрушения, безумные скорости и хаотичные трассы. Игра предлагает множество режимов, где главное — максимально зрелищно крушить всё вокруг.',
        publisher: 'Team6 Game Studios'
    },
    '035': {
        title: 'Testament: The Order of High Human',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2176430/header.jpg?t=1699438869',
        price: '4999',
        genre: 'RPG / Приключения',
        rating: 4.1,
        desc: 'Амбициозная RPG, критикуемая за плохое исполнение и неудобный геймплей.',
        publisher: 'Fairyship Games'
    },
    '036': {
        title: 'Crime Boss: Rockay City',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933080/header.jpg?t=1762432399',
        price: '580',
        genre: 'Экшен / Криминал',
        rating: 4.3,
        desc: 'Криминальный шутер — критики ругали баги и однообразие миссий.',
        publisher: '505 Games'
    },
    '037': {
        title: 'Hellboy: Web of Wyrd',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2160480/header.jpg?t=1728982957',
        price: '6400',
        genre: 'Экшен / Приключения / Комиксы',
        rating: 4.6,
        desc: 'Игра по вселенной Hellboy, получившая критику за скучный бой и слабый сюжет.',
        publisher: 'Good Shepherd Entertainment'
    },
    '038': {
        title: 'Gangs of Sherwood',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1351000/header.jpg?t=1729671615',
        price: '11300',
        genre: 'Экшен / Стелс',
        rating: 4.7,
        desc: 'Экшен в стиле Робин Гуда — критики отмечали плохую оптимизацию и слабый ИИ.',
        publisher: 'Nacon'
    },
    '039': {		
        title: 'NieR:Automata™',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1760991364',
        price: '4733',
        genre: 'RPG / Экшен',
        rating: 6.7,
        desc: 'Экшен-RPG с сильной историей, но критики указывали на слабый геймплей и графику.',
        publisher: 'Square Enix'
    },
    '040': {
        title: 'Valorant',
        img: 'https://pbs.twimg.com/media/Gw-FMNUWsAA12O5.jpg',  
        price: '0',
        genre: 'Шутер / Онлайн / Командная',
        rating: 8.9,
        desc: 'Тактический соревновательный шутер от Riot Games с уникальными агентами и абилити.',
        publisher: 'Riot Games'
    },
    '041': {
        title: 'League of Legends',
        img: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab?resize=1&w=480&h=270&quality=medium',
        price: '0',
        genre: 'MOBA / Онлайн',
        rating: 9.1,
        desc: 'Одна из самых популярных MOBA-игр в мире с соревновательным геймплеем и огромным пулом чемпионов.',
        publisher: 'Riot Games'
    },
    '042': {
        title: 'Genshin Impact',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202508/2602/cc615ad198b2727cea3aa9f63c68577d5aa322f4ec974905.jpg',  
        price: '0',
        genre: 'RPG / Открытый мир / Аниме',
        rating: 9.0,
        desc: 'Открытый мир, сильная история и активная боевая система в аниме-стилистике.',
        publisher: 'HoYoverse'
    },
    '043': {
        title: 'Warframe',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/230410/ca234beed5a53ae4237a67f345316710ed2a37d6/capsule_616x353.jpg?t=1762366502', 
        price: '0',
        genre: 'Экшен / Онлайн / Sci-Fi',
        rating: 8.8,
        desc: 'Динамичный шутер с паркуром, космическими ниндзя и огромным количеством контента.',
        publisher: 'Digital Extremes'
    },
    '044': {
        title: 'Fortnite',
        img: 'https://overclockers.ru/st/legacy/blog/429624/693846_O.jpg',  
        price: '0',
        genre: 'Шутер / Королевская битва / Онлайн',
        rating: 8.5,
        desc: 'Королевская битва с уникальным стилем, постройкой и регулярными обновлениями.',
        publisher: 'Epic Games'
    },
    '045': {
        title: 'Call of Duty: Warzone Mobile',
        img: 'https://the-tech.kz/wp-content/uploads/2024/03/wzm_meta-6-14.jpg',  
        price: '0',
        genre: 'Шутер / Королевская битва',
        rating: 7.9,
        desc: 'Мобильная версия Warzone с динамичными боями и крупными картами.',
        publisher: 'Activision'
    }
}
