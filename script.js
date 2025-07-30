function zodiacPrediction(){
    function rand (num){
        return Math.floor(Math.random() * num)
    };
    const zodiacSigns = [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces'
    ];
    const period = [
        'today',
        'tomorrow',
        'on this week',
        'in this month',
        'in this year' 
    ];
    const prediction = [
        'The stars are aligning in your favor', 
        'A surprising opportunity will come your way',
        'Trust your intuition; it won’t lead you astray',
        'Perfect for new beginnings and bold moves', 
        'Patience will bring you the rewards you seek', 
        'Someone close to you has good news to share',
        'Your energy is contagious spread it wisely',
        'Challenges will test you, but you will emerge stronger',
        'A change of perspective will open new doors',
        'Your creativity is your greatest asset',
        'Focus on your goals, but don’t forget to relax',
        'A meaningful connection is on the horizon',
        'Embrace the unknown—it holds exciting possibilities',
        'Your persistence will soon pay off in big ways',
        'Good things are coming your way'
    ];
    return 'Its prediction for ' + zodiacSigns[rand(11)] + ' ' + period[rand(4)] + ' - ' + prediction[rand(14)]
};
console.log(zodiacPrediction())