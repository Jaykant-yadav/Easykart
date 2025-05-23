const chatData = [
    {
        title: 'Tech Discussion',
        image: 'https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Discussing the latest tech trends.',
        category: 'Technology',
        profileImage: 'https://example.com/images/tech-group.png',
        location: 'Silicon Valley',
        country: 'USA',
        // users: [user1Id, user2Id],
        // messages: [{ sender: user1Id, content: 'What are your thoughts on AI?' }],
    },
    {
        title: 'Foodie Friends',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Sharing recipes and restaurant recommendations.',
        category: 'Food',
        profileImage: 'https://example.com/images/foodie-group.png',
        location: 'Rome',
        country: 'Italy',
        // users: [user2Id, user3Id],
        // messages: [{ sender: user2Id, content: 'Anyone tried the new pizzeria?' }],
    },
    {
        title: 'Travel to Asia',
        image: '//images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dges/asia.jpg',
        description: 'Planning a trip to Southeast Asia.',
        category: 'Travel',
        profileImage: 'https://example.com/images/travel-asia-group.png',
        location: 'Bangkok',
        country: 'Thailand',
        // users: [user3Id, user4Id],
        // messages: [{ sender: user3Id, content: 'Best places to visit in Thailand?' }],
    },
    {
        title: 'Gaming Community',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Discussing the latest games and strategies.',
        category: 'Gaming',
        profileImage: 'https://example.com/images/gaming-group.png',
        location: 'Online',
        country: 'Global',
        // users: [user1Id, user3Id],
        // messages: [{ sender: user1Id, content: 'Anyone playing the new RPG?' }],
    },
    {
        title: 'Book Club',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Discussing our favorite books.',
        category: 'Books',
        profileImage: 'https://example.com/images/book-club.png',
        location: 'London',
        country: 'UK',
        // users: [user2Id, user4Id],
        // messages: [{ sender: user2Id, content: 'Thoughts on the latest book?' }],
    },
    {
        title: 'Fitness Fanatics',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Sharing workout routines and fitness tips.',
        category: 'Fitness',
        profileImage: 'https://example.com/images/fitness-group.png',
        location: 'Los Angeles',
        country: 'USA',
        // users: [user1Id, user4Id],
        // messages: [{ sender: user1Id, content: 'Best workout for beginners?' }],
    },
    {
        title: 'Movie Buffs',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Discussing the latest movies and TV shows.',
        category: 'Movies',
        profileImage: 'https://example.com/images/movie-group.png',
        location: 'Hollywood',
        country: 'USA',
        // users: [user2Id, user3Id],
        // messages: [{ sender: user2Id, content: 'Did anyone see that new sci-fi movie?' }],
    },
    {
        title: 'Coding Challenges',
        image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Sharing coding challenges and solutions.',
        category: 'Coding',
        profileImage: 'https://example.com/images/coding-group.png',
        location: 'Online',
        country: 'Global',
        // users: [user1Id, user2Id],
        // messages: [{ sender: user1Id, content: 'Anyone solved this LeetCode problem?' }],
    },
    {
        title: 'Art Lovers',
        image: 'https://example.com/images/art.jpg',
        description: 'Discussing art and sharing creations.',
        category: 'Art',
        profileImage: 'https://example.com/images/art-group.png',
        location: 'Paris',
        country: 'France',
        // users: [user3Id, user4Id],
        // messages: [{ sender: user3Id, content: 'What are your favorite art styles?' }],
    },
    {
        title: 'Music Fans',
        image: 'https://example.com/images/music.jpg',
        description: 'Sharing music recommendations and discussing artists.',
        category: 'Music',
        profileImage: 'https://example.com/images/music-group.png',
        location: 'London',
        country: 'UK',
        // users: [user1Id, user3Id],
        // messages: [{ sender: user1Id, content: 'Anyone listening to the new album?' }],
    },
    {
        title: 'Digital Art Community',
        image: 'https://example.com/images/digital-art.jpg',
        description: 'Sharing digital art creations and techniques.',
        category: 'Art',
        profileImage: 'https://example.com/images/digital-art-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Classical Music Appreciation',
        image: 'https://example.com/images/classical-music.jpg',
        description: 'Discussing classical music and composers.',
        category: 'Music',
        profileImage: 'https://example.com/images/classical-music-group.png',
        location: 'Vienna',
        country: 'Austria',
    },
    {
        title: 'Minimalist Living',
        image: 'https://example.com/images/minimalism.jpg',
        description: 'Sharing tips for minimalist living.',
        category: 'Lifestyle',
        profileImage: 'https://example.com/images/minimalism-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Street Photography',
        image: 'https://example.com/images/street-photography.jpg',
        description: 'Sharing street photography and techniques.',
        category: 'Photography',
        profileImage: 'https://example.com/images/street-photography-group.png',
        location: 'New York City',
        country: 'USA',
    },
    {
        title: 'Urban Gardening',
        image: 'https://example.com/images/urban-gardening.jpg',
        description: 'Sharing tips for urban gardening and balcony gardens.',
        category: 'Gardening',
        profileImage: 'https://example.com/images/urban-gardening-group.png',
        location: 'Urban Area',
        country: 'Global',
    },
    {
        title: 'Exotic Pets',
        image: 'https://example.com/images/exotic-pets.jpg',
        description: 'Discussing exotic pets and their care.',
        category: 'Pets',
        profileImage: 'https://example.com/images/exotic-pets-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Polyglot Practice',
        image: 'https://example.com/images/polyglot.jpg',
        description: 'Practicing multiple languages together.',
        category: 'Language',
        profileImage: 'https://example.com/images/polyglot-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Mountain Climbing',
        image: 'https://example.com/images/mountain-climbing.jpg',
        description: 'Sharing mountain climbing experiences and tips.',
        category: 'Outdoor',
        profileImage: 'https://example.com/images/mountain-climbing-group.png',
        location: 'Himalayas',
        country: 'Nepal',
    },
    {
        title: 'Interior Design Ideas',
        image: 'https://example.com/images/interior-design.jpg',
        description: 'Sharing interior design ideas and tips.',
        category: 'Decor',
        profileImage: 'https://example.com/images/interior-design-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Investment Strategies',
        image: 'https://example.com/images/investment.jpg',
        description: 'Discussing investment strategies and market trends.',
        category: 'Finance',
        profileImage: 'https://example.com/images/investment-group.png',
        location: 'Wall Street',
        country: 'USA',
    },
    {
        title: 'Mindfulness Practices',
        image: 'https://example.com/images/mindfulness.jpg',
        description: 'Sharing mindfulness practices and techniques.',
        category: 'Wellness',
        profileImage: 'https://example.com/images/mindfulness-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Zero Waste Living',
        image: 'https://example.com/images/zero-waste.jpg',
        description: 'Sharing tips for zero waste living.',
        category: 'Sustainability',
        profileImage: 'https://example.com/images/zero-waste-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Strategy Board Games',
        image: 'https://example.com/images/strategy-games.jpg',
        description: 'Discussing strategy board games and tactics.',
        category: 'Games',
        profileImage: 'https://example.com/images/strategy-games-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Science Fiction Writing',
        image: 'https://example.com/images/science-fiction.jpg',
        description: 'Sharing science fiction writing prompts and stories.',
        category: 'Writing',
        profileImage: 'https://example.com/images/science-fiction-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'African Wildlife Safari',
        image: 'https://example.com/images/african-safari.jpg',
        description: 'Planning an African wildlife safari.',
        category: 'Travel',
        profileImage: 'https://example.com/images/african-safari-group.png',
        location: 'Serengeti',
        country: 'Tanzania',
    },
    {
        title: 'AI Ethics',
        image: 'https://example.com/images/ai-ethics.jpg',
        description: 'Discussing ethical implications of AI.',
        category: 'Technology',
        profileImage: 'https://example.com/images/ai-ethics-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Abandoned Places Exploration',
        image: 'https://example.com/images/abandoned-places.jpg',
        description: 'Exploring and documenting abandoned places.',
        category: 'Exploration',
        profileImage: 'https://example.com/images/abandoned-places-group.png',
        location: 'Local',
        country: 'Global',
    },
    {
        title: 'Cosmology Discussions',
        image: 'https://example.com/images/cosmology.jpg',
        description: 'Discussing cosmology and the universe.',
        category: 'Astronomy',
        profileImage: 'https://example.com/images/cosmology-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Jazz Music Fans',
        image: 'https://example.com/images/jazz.jpg',
        description: 'Sharing and discussing jazz music.',
        category: 'Music',
        profileImage: 'https://example.com/images/jazz-group.png',
        location: 'New Orleans',
        country: 'USA',
    },
    {
        title: 'Urban Planning',
        image: 'https://example.com/images/urban-planning.jpg',
        description: 'Discussing urban planning and development.',
        category: 'Urban',
        profileImage: 'https://example.com/images/urban-planning-group.png',
        location: 'Online',
        country: 'Global',
    },
    {
        title: 'Wildlife Photography',
        image: 'https://example.com/images/wildlife-photography.jpg',
        description: 'Sharing wildlife photography and techniques.',
        category: 'Photography',
        profileImage: 'https://example.com/images/wildlife-photography-group.png',
        location: 'National Parks',
        country: 'Global',
    },
    {
        title: 'Hydroponic Gardening',
        image: 'https://example.com/images/hydroponic-gardening.jpg',
        description: 'Sharing tips for hydroponic gardening.',
        category: 'Gardening',
        profileImage: 'https://example.com/images/hydroponic-gardening-group.png',
        location: 'Online',
        country: 'Global',
    },
];



module.exports = { data: chatData };