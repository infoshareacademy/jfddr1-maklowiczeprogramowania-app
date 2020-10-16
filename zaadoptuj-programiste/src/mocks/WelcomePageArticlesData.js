const articlesDB = `[
    {"articleHeading":"Stwórz swoją drużynę", "articleText":"Masz już pomysł, ale brak Ci dobrych dusz do jego realizacji? Znajdź ich teraz!" },
    {"articleHeading":"Realizuj pomysły z innymi", "articleText":"Znalazłeś dobrych kompanów, każdy z kubkiem kawy, czas zacząć podbijać świat!" },
    {"articleHeading":"Wyrusz w przygodę", "articleText":"Wszystko się może zdarzyć, gdy głowa pełna marzeń, nieopisane są doświadczenia, których uświadczysz podczas pracy!" },
    {"articleHeading":"Sprawdź się w boju", "articleText":"Innowacyjne pomysły nie należą do tych najprostszych, postaw sobie prawdziwe wyzwanie i staw mu czoła!" },
    {"articleHeading":"Zbieraj doświadczenie", "articleText":"Z każdym zrealizowanym projektem Twoje doświadczenie rośnie, im trudniejszy projekt, tym hojniej zostaniesz wynagrodzony!" },
    {"articleHeading":"Awansuj na wyższe poziomy", "articleText":"Nabity exp to nie pic na wodę, osiągnij wyższy poziom i pokaż innym kto tutaj jest debeściak!" }
 
]`

export const getWelcomePageArticlesData = () => JSON.parse(articlesDB);
