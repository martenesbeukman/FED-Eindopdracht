Voor deze opdracht heb ik een textbased RPG spel ontwikkelen.
Hierin zijn er views voor 
-De enemy 
-De inventory
-De character creation screen
-Het hoofdmenu

De objecten die ik heb gebruikt zijn vrijwel exclusief aan de controllers gebind:
-De character
-De wapenset
-De enemy

Hierbij wordt de wapenset on runtime met de character gemerged.

Aangezien Angular geen models gebruikt heb ik een service toegepast.
Services in Angular zijn eigenlijk singletons, 
met als enige eis dat ze een object returnen.
Dit heb ik toegepast door een character service te maken,
zodat elke controller toegang heeft tot de huidige character.

In de app gebruik ik voornamelijk click en destroy events.
De destroy events zijn erg cool. 
Deze callen een functie op het moment dat de actieve controller gedestroyed wordt.
Oftewel, wanneer de view verlaten wordt.

Ik heb geprobeerd om mijn routing logisch op te zetten. 
Routing in Angular kan gebruikt worden om views en controllers te koppelen.
Zo kan er afhankelijk van de URI een andere controller aan dezelfde view gekoppeld worden,
en vice versa.


Services kunnen gebruikt worden als een Angular alternatief voor models.
Ze zijn uitermate geschikt om objecten te bewaren, 
en ze zijn vrijwel overal in je app bereikbaar.
Daarnaast heeft Angular Controllers toegevoegd.
Deze controllers worden gebruikt om de logica aan de views te koppelen.
Dit maakt Angular eigenlijk meer een *VC framework.


