const tips = [
   { 
      "id": 1, 
      "texte": "Utilisez des sacs réutilisables lorsque vous faites vos courses." },
    { 
      "id": 2, 
      "texte": "Privilégiez les transports en commun ou le vélo pour vos déplacements." },
    { 
      "id": 3, 
      "texte": "Éteignez les lumières lorsque vous quittez une pièce pour économiser de l'énergie." },
   { 
      "id": 4, 
      "texte": "Réduisez votre consommation d'eau en prenant des douches plus courtes." 
   },
   { 
      "id": 5, 
      "texte": "Utilisez des ampoules LED à faible consommation d'énergie pour l'éclairage." 
   },
   { 
      "id": 6, 
      "texte": "Recyclez vos déchets autant que possible pour réduire la quantité de déchets envoyés en décharge." 
   },
   { 
      "id": 7, 
      "texte": "Plantez des arbres pour compenser votre empreinte carbone." 
   },
   { 
      "id": 8, 
      "texte": "Utilisez des produits de nettoyage écologiques pour réduire les produits chimiques nocifs dans l'environnement." 
   },
   { 
      "id": 9, 
      "texte": "Évitez les produits jetables comme les assiettes en plastique et les ustensiles." 
   },
   { 
      "id": 10, 
      "texte": "Optez pour des produits locaux et de saison pour réduire les émissions liées au transport." 
   },
   { 
      "id": 11, 
      "texte": "Utilisez des tasses réutilisables plutôt que des gobelets en plastique jetables." 
   },
   { 
      "id": 12, 
      "texte": "Réduisez votre consommation de viande pour diminuer votre empreinte carbone." 
   },
   { 
      "id": 13, 
      "texte": "Utilisez des piles rechargeables plutôt que des piles jetables." 
   },
   { 
      "id": 14, 
      "texte": "Évitez les emballages excessifs en achetant en vrac lorsque c'est possible." 
   
   },
   { 
      "id": 15, 
      "texte": "Privilégiez les produits électroniques économes en énergie et facilement recyclables." 
   
   },
   { 
      "id": 16, 
      "texte": "Utilisez des bouteilles d'eau réutilisables plutôt que des bouteilles en plastique jetables." 
   
   },
   { 
      "id": 17, 
      "texte": "Pratiquez le covoiturage ou partagez des trajets pour réduire les émissions de gaz à effet de serre." 
   
   },
   { 
      "id": 18, 
      "texte": "Installez des thermostats programmables pour réduire la consommation d'énergie de votre chauffage et de votre climatisation." 
   
   },
   { 
      "id": 19, 
      "texte": "Favorisez les entreprises qui adoptent des pratiques durables et respectueuses de l'environnement." 
   
   },
   { 
      "id": 20, 
      "texte": "Éteignez les appareils électroniques lorsqu'ils ne sont pas utilisés pour réduire la consommation d'énergie en veille." 
   
   },
   { 
      "id": 21, 
      "texte": "Utilisez des serviettes en tissu plutôt que des serviettes en papier pour réduire les déchets." 
   
   },
   { 
      "id": 22, 
      "texte": "Réparez plutôt que de jeter et racheter lorsque c'est possible." 
   
   },
   { 
      "id": 23, 
      "texte": "Participez à des opérations de nettoyage de l'environnement dans votre communauté." 
   },
   { 
      "id": 24, 
      "texte": "Utilisez des sacs en toile ou en jute pour faire vos courses plutôt que des sacs en plastique jetables." 
   },
   { 
      "id": 25, 
      "texte": "Soutenez les initiatives de reforestation et de conservation de la biodiversité." 
   },
   { 
      "id": 26, 
      "texte": "Réduisez la consommation de papier en optant pour des factures électroniques et en limitant l'impression." 
   },
   { 
      "id": 27, 
      "texte": "Évitez les produits jetables comme les mouchoirs en papier et utilisez des alternatives lavables." 
   },
   { 
      "id": 28, 
      "texte": "Investissez dans des appareils électroménagers économes en énergie pour réduire votre empreinte carbone." 
   },
   { 
      "id": 29, 
      "texte": "Utilisez des applications et des services en ligne pour réduire la consommation de papier." 
   },
   { 
      "id": 30, 
      "texte": "Achetez des produits d'occasion plutôt que neufs lorsque cela est possible." 
   },
   { 
      "id": 31, 
      "texte": "Installez des panneaux solaires pour produire de l'énergie renouvelable à domicile." 
   },
   { 
      "id": 32, 
      "texte": "Utilisez des outils de jardinage manuels plutôt que des outils motorisés pour réduire la consommation d'énergie." 
   },
   { 
      "id": 33, 
      "texte": "Adoptez une approche minimaliste en réduisant la consommation de biens matériels." 
   },
   { 
      "id": 34, 
      "texte": "Favorisez les pratiques agricoles durables et respectueuses de l'environnement." 
   },
   { 
      "id": 35, 
      "texte": "Compostez vos déchets alimentaires pour réduire les déchets et enrichir le sol." 
   },
   { 
      "id": 36, 
      "texte": "Utilisez des filtres à eau réutilisables plutôt que des bouteilles d'eau en plastique." 
   },
   { 
      "id": 37, 
      "texte": "Privilégiez les matériaux de construction écologiques et durables lors de la rénovation de votre maison." 
   },
   { 
      "id": 38, 
      "texte": "Encouragez les autres à adopter des comportements respectueux de l'environnement en partageant vos connaissances et votre expérience." 
   },
   { 
      "id": 39, 
      "texte": "Organisez des événements éco-responsables en réduisant les déchets et en favorisant le recyclage." 
   },
   { 
      "id": 40, 
      "texte": "Participez à des programmes de compensation carbone pour compenser vos émissions de CO2." 
   },
   { 
      "id": 41, 
      "texte": "Utilisez des produits de beauté et des produits d'hygiène naturels et écologiques." 
   },
   { 
      "id": 42, 
      "texte": "Utilisez des alternatives écologiques pour le jardinage, comme le paillage et les engrais naturels." 
   },
   { 
      "id": 43, 
      "texte": "Réduisez la consommation de plastique en optant pour des emballages réutilisables et des contenants en verre." 
   },
   { 
      "id": 44, 
      "texte": "Préférez les vêtements fabriqués à partir de matériaux durables et recyclés." 
   },
   { 
      "id": 45, 
      "texte": "Évitez les pestices et les produits chimiques nocifs dans votre jardin en optant pour des méthodes de lutte biologique." 
   },
   { 
      "id": 46, 
      "texte": "Participez à des actions de sensibilisation à l'environnement dans votre communauté." 
   },
      { 
      "id": 46, 
      "texte": "Participez à des actions de sensibilisation à l'environnement dans votre communauté." 
   }
]