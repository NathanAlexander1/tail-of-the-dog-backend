const sequelize = require("../config/connection");
const {
    User,
    Dog,
    DogGuess,
    CocktailIngredient,
    DogBreed,
    CocktailIngredientList
  } = require("../models");

  const userData = [
    {
      name: "Jack Sparrow",
      email: "jack@sparrow.com",
      password: "Iamthecaptain",
    }
  ];

  const dogData = [
    {
        name: "Orlie",
        dog_image: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000",
        isPrivate: false,
        UserId: 1
    },
    {
        name: "Bailey",
        dog_image: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/69621513_2337136243170399_7896453289598779392_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=2VnOmQ3INO0AX_gfmpY&_nc_ht=scontent-lga3-1.xx&oh=00_AfC3w9HQhA55H9gaePl4GdXihJh4KzKl0HUJMuCXnPdqtg&oe=64F73114",
        isPrivate: true,
        UserId: 1
    },
  ]

  const dogGuessData = [
    {
        breed: "German Shephard",
        percentage: 47,
        DogId: 1,
        UserId: 1
    },
    {
        breed: "Chihuahua",
        percentage: 13,
        DogId: 1,
        UserId: 1
    },
    {
        breed: "American Cocker Spaniel",
        percentage: 40,
        DogId: 1,
        UserId: 1
    },
    {
        breed: "Austrailian Shephard",
        percentage: 100,
        DogId: 2,
        UserId: 1
    }
  ]

  const cocktailIngredientsData = [
    {
        ingredient_name: "Vodka",
        ingredient_percentage: 47,
        DogGuessId: 1
    },
    {
        ingredient_name: "Orange Juice",
        ingredient_percentage: 13,
        DogGuessId: 1
    },
    {
        ingredient_name: "Crankberry Juice",
        ingredient_percentage: 40,
        DogGuessId: 1
    },
    {
        ingredient_name: "Whiskey",
        ingredient_percentage: 100,
        DogGuessId: 2
    },
  ]

  const dogBreedsData = [
    {
      name: "Other",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Question_Mark_1.svg/2026px-Question_Mark_1.svg.png",
    },
    {
      name: "Affenpinscher",
      image: "https://www.dog.com/Breeds/images/AllBreeds/21.jpg",
    },
    {
      name: "Afghan Hound",
      image:
        "https://m8r6w9i6.rocketcdn.me/wp-content/uploads/2017/01/Afghan-Hound.jpeg",
    },
    {
      name: "Africanis",
      image: "https://dogell.b-cdn.net/uploads/breed/thumb_africanis.jpg",
    },
    {
      name: "Aidi",
      image:
        "https://www.worldlifeexpectancy.com//images/a/d/d/b/aidi/aidi_1.min.jpg",
    },
    {
      name: "Airedale Terrier",
      image:
        "https://a-z-animals.com/media/2019/10/shutterstock_1031650777-e1658352294248.jpg",
    },
    {
      name: "Akbash",
      image: "https://breed-assets.wisdompanel.com/dog/akbash/Akbash1.jpg",
    },
    {
      name: "Akita",
      image:
        "https://t3.ftcdn.net/jpg/02/84/14/44/360_F_284144477_s3FAYbNDEVQpqhNE9zTfVXquYHwKCFQv.jpg",
    },
    {
      name: "Aksaray Malaklisi",
      image:
        "https://www.shutterstock.com/image-photo/kangal-shepherd-dog-front-white-260nw-2123077307.jpg",
    },
    {
      name: "Alano Español",
      image:
        "https://biodog.es/wp-content/uploads/2018/12/Alano-espanol_razas-de-perro.jpg",
    },
    {
      name: "Alapaha Blue Blood Bulldog",
      image:
        "https://ckcusa.com/media/147400/alapaha-blue-blood-bulldog.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Alaskan Husky",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg",
    },
    {
      name: "Alaskan Klee Kai",
      image:
        "https://www.thesprucepets.com/thmb/GLetQ7F27j92vM_YAWKqT9Bbqx8=/2800x0/filters:no_upscale():strip_icc()/GettyImages-466104988-85c4d45e5954464d867aee66d0285dc3.jpg",
    },
    {
      name: "Alaskan Malamute",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/837/911/large_2x/alaskan-malamute-photo.jpg",
    },
    {
      name: "Alopekis",
      image:
        "https://www.mydog.pet/wp-content/uploads/2021/06/Alopekis-Price.jpg",
    },
    {
      name: "Alpine Dachsbracke",
      image:
        "https://as1.ftcdn.net/v2/jpg/02/18/98/84/1000_F_218988445_TGAurU1673HaWTwQ1ynE0IEPilFCMmGg.jpg",
    },
    {
      name: "American Bulldog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/American_Bulldog..jpg",
    },
    {
      name: "American Bully",
      image:
        "https://static.wixstatic.com/media/4cbc05_91616bae87d4463aa38fede17530f69a~mv2.jpg/v1/crop/x_1,y_0,w_587,h_587/fill/w_468,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ukbkc-standard-bully_edited.jpg",
    },
    {
      name: "American Cocker Spaniel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/American_Cocker_Spaniel_portrait..jpg",
    },
    {
      name: "American English Coonhound",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/american-english-coonhound-breed/american-coonhound-4.jpg",
    },
    {
      name: "American Eskimo Dog",
      image:
        "https://www.thesprucepets.com/thmb/rs7lG8vh-NOthJdu1v2M5SilSTo=/2819x0/filters:no_upscale():strip_icc()/American_Eskimo_Dog_1-2ae6659955ec4885b25bfb25220e7f60.jpg",
    },
    {
      name: "American Foxhound",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/01/American-Foxhound-Profilbild.jpg",
    },
    {
      name: "American Hairless Terrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2020/04/american-hairless-terrier-dog-breed-pictures-cover.jpg",
    },
    {
      name: "American Leopard Hound",
      image:
        "https://www.hepper.com/wp-content/uploads/2021/11/American-Leopard-Hound-adult-dog.jpg",
    },
    {
      name: "American Pit Bull Terrier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/11/American-Pitbull-liegt.jpg",
    },
    {
      name: "American Staffordshire Terrier",
      image:
        "https://breed-assets.wisdompanel.com/dog/american-staffordshire-terrier/American_Staffordshire_Terrier1.jpg",
    },
    {
      name: "American Water Spaniel",
      image:
        "https://www.101dogbreeds.com/wp-content/uploads/2016/09/American-Water-Spaniel.jpg",
    },
    {
      name: "Anglo-Français de Petite Vénerie",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Anglo-fran%C3%A7ais_de_petite_v%C3%A9nerie%2C_Derrida-101.jpg",
    },
    {
      name: "Appenzeller Sennenhund",
      image:
        "https://ckcusa.com/media/147428/appenzeller-sennenhund.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Ariège Pointer",
      image:
        "https://doglime.com/wp-content/uploads/2019/10/Ariege-Pointer-Information.jpg.webp",
    },
    {
      name: "Ariegeois",
      image:
        "https://st3.depositphotos.com/8776626/35077/i/450/depositphotos_350770932-stock-photo-ariegeois-hound-dog-standing-grass.jpg",
    },
    {
      name: "Armant",
      image:
        "https://nationalpurebreddogday.com/wp-content/uploads/2017/12/ef105db20a73e585ec58ea203d9d07e3.jpg",
    },
    {
      name: "Armenian Gampr",
      image:
        "https://www.peopleofar.com/wp-content/uploads/Armenian-gampr-dog.jpg",
    },
    {
      name: "Artois Hound",
      image:
        "https://i.pinimg.com/originals/fc/46/91/fc46917a936fa1d6a2a8452a08e837f3.jpg",
    },
    {
      name: "Assyrian Mastiff",
      image: "https://pbs.twimg.com/media/EGV3um8X0AAFAYP.jpg",
    },
    {
      name: "Australian Cattle Dog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5thIgrBRmVNRGDC_crzCVDZ8gv9tYFs1QRP4NaQd0Yw&usqp=CAU&ec=48665701",
    },
    {
      name: "Australian Kelpie",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Australien_Kelpie.jpg",
    },
    {
      name: "Australian Shepherd",
      image:
        "https://simg.nicepng.com/png/small/281-2813082_few-breeds-are-more-at-home-on-the.png",
    },
    {
      name: "Australian Stumpy Tail Cattle Dog",
      image:
        "https://www.akc.org/wp-content/uploads/2018/07/Australian-Stumpy-Tail-Cattle-Dog-Slideshow-04.jpg",
    },
    {
      name: "Australian Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Australian-Terrier-standing-in-the-garden.jpg",
    },
    {
      name: "Austrian Black and Tan Hound",
      image:
        "https://i.pinimg.com/originals/85/17/dc/8517dcd300ac1601ff4a6127d47f866b.jpg",
    },
    {
      name: "Austrian Pinscher",
      image:
        "https://d83vwgwvylun0.cloudfront.net/img/s/289-austrian-pinscher.jpg",
    },
    {
      name: "Azawakh",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Azawakh_178091272.jpg",
    },
    {
      name: "Bắc Hà dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/B%E1%BA%AFc_H%C3%A0_dog_side.jpg/800px-B%E1%BA%AFc_H%C3%A0_dog_side.jpg",
    },
    {
      name: "Bakharwal dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bakharwal.jpg/220px-Bakharwal.jpg",
    },
    {
      name: "Banjara Hound",
      image:
        "https://i.pinimg.com/736x/ff/0c/a5/ff0ca517befdfc893039ea662ac7c55b.jpg",
    },
    {
      name: "Bankhar Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hotosho-2.jpg/220px-Hotosho-2.jpg",
    },
    {
      name: "Barak hound",
      image: "https://fello.pet/wp-content/uploads/2020/12/bosnijskaya-1.jpg",
    },
    {
      name: "Barbado da Terceira",
      image:
        "https://i.pinimg.com/736x/ca/5c/fa/ca5cfa59de7e31205a62a8347ef8d04f--barbados.jpg",
    },
    {
      name: "Barbet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Barbet_suka_2009_pl4.jpg/220px-Barbet_suka_2009_pl4.jpg",
    },
    {
      name: "Basenji",
      image: "https://www.hundeo.com/wp-content/uploads/2019/01/Basenji-7.jpg",
    },
    {
      name: "Basque Shepherd Dog",
      image:
        "https://a.storyblok.com/f/92981/800x570/525f7bf91a/basque-shepherd-dog-primary.jpg",
    },
    {
      name: "Basset Artésien Normand",
      image:
        "https://ckcusa.com/media/147446/basset-artesian-normand.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Basset Bleu de Gascogne",
      image:
        "https://www.purina-arabia.com/sites/default/files/breed_library/basset_bleu_de_gascogne.jpg",
    },
    {
      name: "Basset Fauve de Bretagne",
      image:
        "https://www.purina.co.uk/sites/default/files/breed_library/basset_fauve_de_bretagne.jpg",
    },
    {
      name: "Basset Hound",
      image:
        "https://www.petbarn.com.au/petspot/app/uploads/2014/12/43.-Basset-Hound.jpg",
    },
    {
      name: "Bavarian Mountain Hound",
      image:
        "https://www.purina.co.uk/sites/default/files/breed_library/bavarian_mountain_hound.jpg",
    },
    {
      name: "Beagle",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23012_beagle.jpg",
    },
    {
      name: "Beagle-Harrier",
      image:
        "https://i-10b32.kxcdn.com/ppbr/breeds/beagle-harrier_profile_350x400.jpg",
    },
    {
      name: "Bearded Collie",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Bearded-Collie.jpg?itok=lHnJHD40",
    },
    {
      name: "Beauceron",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Beauceron.jpg?itok=zTc5ZQtM",
    },
    {
      name: "Bedlington Terrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23056_bedlington-terrier.jpg",
    },
    {
      name: "Belgian Shepherd",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Belgian-Shepherd-Dog-Malinois.jpg?itok=sG3hHbOd",
    },
    {
      name: "Bergamasco Shepherd",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ortensia_di_Valle_Scrivia.jpg",
    },
    {
      name: "Berger Picard",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23290_berger-picard.jpg",
    },
    {
      name: "Bernese Mountain Dog",
      image:
        "https://media.istockphoto.com/id/1346381655/photo/tricolor-bernese-mountain-dog-sitting-looking-at-camera-and-panting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=WyEzimxAgxEzTut4bDbi5gvqO8WiKMzSI7aZ2tv72Hs=",
    },
    {
      name: "Bichon Frisé",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Bichon_Fris%C3%A9_-_studdogbichon.jpg",
    },
    {
      name: "Billy",
      image:
        "https://as2.ftcdn.net/v2/jpg/02/85/17/71/1000_F_285177145_bwRuc7sMW0UtMpdi9S6UEYqm9wy8gsn7.jpg",
    },
    {
      name: "Black and Tan Coonhound",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Black-and-Tan-Coonhound.jpg?itok=bWcYPJ88",
    },
    {
      name: "Black Norwegian Elkhound",
      image:
        "https://i.pinimg.com/originals/73/2c/eb/732cebeeaa6ce98302b5615b5f42f8a3.jpg",
    },
    {
      name: "Black Russian Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Black-Russian-Terrier-Illo-3.jpg",
    },
    {
      name: "Black Mouth Cur",
      image:
        "https://petkeen.com/wp-content/uploads/2021/06/closeup-of-a-Black-Mouth-Cur-in-a-park_Wirestock-Creators_Shutterstock.jpg",
    },
    {
      name: "Bloodhound",
      image:
        "https://www.shutterstock.com/image-photo/portrait-thoroughbred-bloodhound-dog-on-260nw-664033078.jpg",
    },
    {
      name: "Blue Lacy",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/Blue_lacy_working.jpg",
    },
    {
      name: "Blue Picardy Spaniel",
      image:
        "https://cdn-images.vetstreet.com/58/c1/658046ee4423ab5f9e5ef667d51f/blue-picardy-spaniel-ap-fv9k9t-645-x-380.jpg",
    },
    {
      name: "Bluetick Coonhound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/BluetickCoonhound.jpg",
    },
    {
      name: "Boerboel",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Boerboel-On-White-01.jpg",
    },
    {
      name: "Bohemian Shepherd",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2020/04/Bohemian-Shepherd-dog-breed-pictures-cover.jpg",
    },
    {
      name: "Bolognese",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23240_bolognese.jpg",
    },
    {
      name: "Border Collie",
      image:
        "https://media.istockphoto.com/id/536505777/photo/border-collie.jpg?s=612x612&w=0&k=20&c=h3-9PBUC13KfotCaOTVKlwd2mpg4A1Uuhzen-9ZiR9o=",
    },
    {
      name: "Border Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Border-Terrier-On-White-03.jpg",
    },
    {
      name: "Borzoi",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23018_borzoi.jpg?w=460",
    },
    {
      name: "Boston Terrier",
      image:
        "https://canna-pet.com/wp-content/uploads/2016/01/boston-terrier.jpg",
    },
    {
      name: "Bouvier des Ardennes",
      image:
        "https://nationalpurebreddogday.com/wp-content/uploads/2019/08/b9f80b8bd9f26a46ff3a273faa203c8e.jpg",
    },
    {
      name: "Bouvier des Flandres",
      image:
        "https://static9.depositphotos.com/1594920/1087/i/950/depositphotos_10873338-stock-photo-bouvier-des-flandres-2-years.jpg",
    },
    {
      name: "Boxer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Boxer_Fond_Blanc.jpg",
    },
    {
      name: "Boykin Spaniel",
      image:
        "https://www.animalsaroundtheglobe.com/wp-content/uploads/2023/02/nick-russill-ddDdRo8OhtQ-unsplash-1200x800.jpg.webp",
    },
    {
      name: "Bracco Italiano",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Bracco%20Italiano1.jpg?h=c17eaee4&itok=7A1GMZuj",
    },
    {
      name: "Braque d'Auvergne",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Braque-D-Auvergne.jpg?itok=gv8Wkyda",
    },
    {
      name: "Braque du Bourbonnais",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/55/Braque_Du_Bourbonnais.jpg",
    },
    {
      name: "Braque Français",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/braque-fran%C3%A7ais.jpg",
    },
    {
      name: "Braque Saint-Germain",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Braque_Saint-Germain.jpg",
    },
    {
      name: "Briard",
      image:
        "https://thumbs.dreamstime.com/b/side-view-briard-dog-sitting-12909672.jpg",
    },
    {
      name: "Briquet Griffon Vendéen",
      image:
        "https://www.easypetmd.com/sites/default/files/imagecache/Portrait/Briquet%20Griffon%20Vendeen_0.jpg",
    },
    {
      name: "Brittany",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_22956_brittany.jpg",
    },
    {
      name: "Broholmer",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2019/09/Broholmer-dog-breed-pictures-cover.jpg?w=760",
    },
    {
      name: "Bruno Jura Hound",
      image:
        "https://nationalpurebreddogday.com/wp-content/uploads/2017/07/bruno-saint-hubert-francais-131015-131202.jpg",
    },
    {
      name: "Brussels Griffon",
      image:
        "https://hellobark.com/wp-content/uploads/brussels-griffon-1200-1.jpg",
    },
    {
      name: "Bucovina Shepherd Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/dd/Bucovina_Sheepdog.jpg",
    },
    {
      name: "Bull Arab",
      image:
        "https://lirp.cdn-website.com/856893f0/dms3rep/multi/opt/1594_DOGS+-+BULL+ARAB-640w.jpg",
    },
    {
      name: "Bull Terrier",
      image:
        "https://static9.depositphotos.com/1594920/1086/i/950/depositphotos_10864018-stock-photo-bull-terrier.jpg",
    },
    {
      name: "Bulldog",
      image:
        "https://media.istockphoto.com/id/855841098/photo/english-bulldog.jpg?s=612x612&w=0&k=20&c=MH8THQVlDgsnFVgmlAD2PtsYC08FSiKKmuSIa2UkmFs=",
    },
    {
      name: "Bullmastiff",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Bullmastiff.jpg?itok=T_-crxca",
    },
    {
      name: "Bully Kutta",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bully_Kutta_Male.jpg/640px-Bully_Kutta_Male.jpg",
    },
    {
      name: "Burgos Pointer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/28/Burgos_Pointer_or_Perdiguero_de_Burgos.JPG",
    },
    {
      name: "Ca Mè Mallorquí",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Ca_m%C3%A8_mallorqu%C3%AD_03a.jpg",
    },
    {
      name: "Ca de Bou",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/dogue-de-majorque.jpg",
    },
    {
      name: "Cairn Terrier",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Cairn-Terrier.jpg?itok=fydT0sUW",
    },
    {
      name: "Calupoh",
      image:
        "https://www.dogmal.com/wp-content/uploads/2018/10/calupoh-dog-photo.jpg",
    },
    {
      name: "Campeiro Bulldog",
      image:
        "https://thebulldogaddict.com/wp-content/uploads/2020/11/Campeiro-Bulldog-Picture.jpg",
    },
    {
      name: "Can de Chira",
      image:
        "https://i.pinimg.com/736x/e0/6d/f6/e06df671054abc2614f54a3aa8a1651c.jpg",
    },
    {
      name: "Can de Palleiro",
      image: "https://live.staticflickr.com/3858/14518132605_df9e534cbe_b.jpg",
    },
    {
      name: "Canaan Dog",
      image: "https://cdn.britannica.com/74/123274-004-F01BE1A3/Canaan-dog.jpg",
    },
    {
      name: "Canadian Eskimo Dog",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spoonsced.jpg",
    },
    {
      name: "Cane Corso",
      image:
        "https://img.pixers.pics/pho_wat(s3:700/FO/73/21/04/2/700_FO7321042_71009b227c912f6e5099d3e0343581a0.jpg,700,698,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,482,650,jpg)/posters-cane-corso-2-years.jpg.jpg",
    },
    {
      name: "Cane di Oropa",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pastore_biellese_%28kahlua%29_%28cropped%29.JPG/640px-Pastore_biellese_%28kahlua%29_%28cropped%29.JPG",
    },
    {
      name: "Cane Paratore",
      image:
        "https://i.pinimg.com/736x/ae/48/63/ae48639d11820205e6b48fd6d0760509.jpg",
    },
    {
      name: "Cantabrian Water Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Perro_de_Agua_del_Cant%C3%A1brico_Macho_Exposici%C3%B3n.jpg",
    },
    {
      name: "Cão da Serra de Aires",
      image:
        "https://web5.lifelearn.com/glenlakeah/wp-content/uploads/2014/10/CaoDeSerraDeAires1of2.jpg",
    },
    {
      name: "Cão de Castro Laboreiro",
      image:
        "https://www.cpc.pt/wp-content/uploads/2021/01/castro_laboreiro_01.jpg",
    },
    {
      name: "Cão de Gado Transmontano",
      image:
        "https://ter-ra.pt/imagens/galeria/cao_de_gado_transmontano_61657310bd62b_60_3.jpg",
    },
    {
      name: "Cão Fila de São Miguel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_1pl.jpg/1200px-Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_1pl.jpg",
    },
    {
      name: "Cardigan Welsh Corgi",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Cardigan-Welsh-Corgi-on-White-111.jpg",
    },
    {
      name: "Carea Castellano Manchego",
      image:
        "https://i.pinimg.com/736x/19/46/90/19469041bdc0b146424cce4420df5e4a--cadillac-spain.jpg",
    },
    {
      name: "Carea Leonés",
      image:
        "https://64.media.tumblr.com/2e2e9050b37546bb7f16969619d58f76/tumblr_oskfccwP1W1voe2ymo1_640.jpg",
    },
    {
      name: "Carolina Dog",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/carolina-dog-breed-pictures/carolina-dog-breed-pictures-5.jpg",
    },
    {
      name: "Carpathian Shepherd Dog",
      image:
        "https://i.pinimg.com/222x/f9/1a/2d/f91a2df6a86b9876be85d6095ed2f8a4.jpg",
    },
    {
      name: "Catahoula Leopard Dog",
      image:
        "https://media.istockphoto.com/id/1175747011/photo/louisiana-catahoula-leopard-dog.jpg?s=612x612&w=0&k=20&c=wwMUVc9Iro-1TpM2hvDYj_j2FTQBXTR3nQRdEjiXtJ8=",
    },
    {
      name: "Catalan Sheepdog",
      image:
        "https://www.omlet.us/images/cache/397/512/Dog-Catalan_Sheepdog-A_young_Catalan_Sheepdog_with_an_incredible_soft_thick_coat.jpg",
    },
    {
      name: "Caucasian Shepherd Dog",
      image:
        "https://a.storyblok.com/f/92981/1200x900/180ab49eef/caucasian-shepherd-dog-primary.jpg",
    },
    {
      name: "Cavalier King Charles Spaniel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Cavalier_King_Charles_Spaniel_02.jpg",
    },
    {
      name: "Central Asian Shepherd Dog",
      image:
        "https://media.istockphoto.com/id/1308116891/photo/large-dog-alabai-lies-on-the-sawdust-on-the-street-in-winter-white-and-brown-central-asian.jpg?s=612x612&w=0&k=20&c=eYfgGzLw0GmN2VzZQBREpek7T_NTLjMP1MZnZQduZlk=",
    },
    {
      name: "Cesky Fousek",
      image:
        "https://www.worldlifeexpectancy.com//images/a/d/d/b/cesky_fousek/cesky_fousek_1.min.jpg",
    },
    {
      name: "Cesky Terrier",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Cesky-Terrier.jpg?itok=owDoG1lf",
    },
    {
      name: "Chesapeake Bay Retriever",
      image:
        "https://www.thesprucepets.com/thmb/tuLRNw4FhF1Mp36EuVNfMM6rYAg=/2689x0/filters:no_upscale():strip_icc()/GettyImages-531551412-fa1000021b9d44f298a08b5cc676c495.jpg",
    },
    {
      name: "Chien Français Blanc et Noir",
      image:
        "https://www.easypetmd.com/sites/default/files/Chien%20Francais%20Blanc%20et%20Noir_0.jpg",
    },
    {
      name: "Chien Français Blanc et Orange",
      image:
        "https://i.pinimg.com/originals/91/b4/73/91b4737cd3a66b84029d2b21747264ba.jpg",
    },
    {
      name: "Chien Français Tricolore",
      image:
        "https://i.pinimg.com/550x/3f/6b/b7/3f6bb727c4c79eccaad61d1392eea70b.jpg",
    },
    {
      name: "Chihuahua",
      image:
        "https://img.freepik.com/premium-photo/chihuahua-sitting-looking-up-isolated-whit_191971-6801.jpg?w=2000",
    },
    {
      name: "Chilean Terrier",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Toy_Fox_Terrier_2.jpg/640px-Toy_Fox_Terrier_2.jpg",
    },
    {
      name: "Chinese Crested Dog",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Chinese-Crested-On-White-01.jpg",
    },
    {
      name: "Chinook",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Chinook-On-White-03.jpg",
    },
    {
      name: "Chippiparai",
      image: "https://www.inetfarms.com/uploads/Dogs/chippiparai.jpg",
    },
    {
      name: "Chongqing dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chinese_Chongqing_Dog_R%C3%BCde.jpg",
    },
    {
      name: "Chortai",
      image: "https://fello.pet/wp-content/uploads/2020/12/hortaya-borzaya-3.jpg",
    },
    {
      name: "Chow Chow",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/04/Chow-Chow-Profil.jpg",
    },
    {
      name: "Chukotka sled dog",
      image:
        "https://fello.pet/wp-content/uploads/2020/12/chukotskaya-ezdovaya3-1024x684.jpg",
    },
    {
      name: "Cimarrón Uruguayo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/C%C3%A3o_Cimarron_Uruguayo.jpg/640px-C%C3%A3o_Cimarron_Uruguayo.jpg",
    },
    {
      name: "Cirneco dell'Etna",
      image:
        "https://www.omlet.co.uk/images/cache/512/427/Cirneco-Dell-Etna-Dog-on-white-background.jpg",
    },
    {
      name: "Classic Dingo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZruQd0L-ReIzXDSj5hLnL1LMbwaWv9rEa1deSAiM1LB71QPl3xzZmsU-Z6muDWiOfSeCVPPkgzQ&usqp=CAU&ec=48665701",
    },
    {
      name: "Clumber Spaniel",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Clumber-Spaniel-On-White-011.jpg",
    },
    {
      name: "Colombian fino hound",
      image: "https://finohoundsusa.dog/wp-content/uploads/2017/09/Coral-2.jpg",
    },
    {
      name: "Continental bulldog",
      image:
        "https://i.pinimg.com/originals/e1/e2/71/e1e271beef9fa369af7b36cc72e7699d.jpg",
    },
    {
      name: "Coton de Tuléar",
      image:
        "https://ckcusa.com/media/147543/coton-de-tulear.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Cretan Hound",
      image:
        "https://www.101dogbreeds.com/wp-content/uploads/2017/03/Cretan-Tracing-Dog.jpg",
    },
    {
      name: "Croatian Sheepdog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdsYfbGNMJbtt27ciCQGFU5G6AqTIwzBQXHnIR_O1-Q&usqp=CAU&ec=48665701",
    },
    {
      name: "Curly-Coated Retriever",
      image:
        "https://www.thekennelclub.org.uk/media/1301/retriever-curly-coated-standing.jpg?mode=pad&width=1000&rnd=132140431010000000",
    },
    {
      name: "Cursinu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cursinu_beauty.jpg/768px-Cursinu_beauty.jpg",
    },
    {
      name: "Czechoslovakian Wolfdog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TWH-jolly.JPG/640px-TWH-jolly.JPG",
    },
    {
      name: "Dachshund",
      image:
        "https://st2.depositphotos.com/1004199/6205/i/600/depositphotos_62051697-stock-photo-miniature-dachshund.jpg",
    },
    {
      name: "Dalmatian",
      image:
        "https://st.depositphotos.com/1594920/3493/i/450/depositphotos_34932407-stock-photo-dalmatian-sitting-looking-at-the.jpg",
    },
    {
      name: "Dandie Dinmont Terrier",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAqgfjq0-EZeNewA0OLNTYBKYNMQdC18LMtjzRB8_Kg&usqp=CAU&ec=48665701",
    },
    {
      name: "Danish Spitz",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Danish_spitz.jpg/1200px-Danish_spitz.jpg",
    },
    {
      name: "Danish-Swedish Farmdog",
      image:
        "https://previews.123rf.com/images/bigandt/bigandt1504/bigandt150400029/38795764-purebred-danish-swedish-farmdog-isolated-on-white-background-in-studio.jpg",
    },
    {
      name: "Denmark Feist",
      image: "https://ckcusa.com/media/147585/feist.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Dingo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Dingo_-_Katy_Platt_%28cropped%29.jpg",
    },
    {
      name: "Dobermann",
      image:
        "https://ckcusa.com/media/147553/doberman-pinscher.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Dogo Argentino",
      image: "https://www.akc.org/wp-content/uploads/2017/11/Dogo-Argentino.jpg",
    },
    {
      name: "Dogo Guatemalteco",
      image:
        "https://i.pinimg.com/originals/75/28/00/752800545f69058eec2af7eeb7f226d8.jpg",
    },
    {
      name: "Dogo Sardesco",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Xavier_XL_Style_da_Casa_da_Praia.jpg",
    },
    {
      name: "Dogue Brasileiro",
      image:
        "https://static.wixstatic.com/media/db516d_f7be846980e54149aacc3fe567aef355~mv2.jpg/v1/fill/w_560,h_350,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/dogue-brasileiro.jpg",
    },
    {
      name: "Dogue de Bordeaux",
      image:
        "https://st.depositphotos.com/1594920/4596/i/600/depositphotos_45968393-stock-photo-dogue-de-bordeaux-sitting-14.jpg",
    },
    {
      name: "Donggyeongi",
      image:
        "https://lp-cms-production.imgix.net/2022-01/Korea%20Donggyeongyi%20dog%20BIT%202022%20Hyungwon%20Kang%20RM%2053k5wm5ma2a-1638864847460-3000s3.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    },
    {
      name: "Drentse Patrijshond",
      image:
        "https://szh.nl/wp-content/uploads/2019/02/Drentse-patrijs-Djenaa-Sanne-foto-fam-Bosing-e1550503068281.jpg",
    },
    {
      name: "Drever",
      image:
        "https://img.favpng.com/5/11/19/beagle-chihuahua-pet-sitting-dog-walking-png-favpng-rJb7hUx2RVLW0vvzcwKf8qwd2_t.jpg",
    },
    {
      name: "Dunker",
      image: "https://fello.pet/wp-content/uploads/2020/12/dunker2.jpg",
    },
    {
      name: "Dutch Shepherd",
      image:
        "https://media.istockphoto.com/id/1271492244/photo/pretty-young-dutch-shepherd-dog-lying-down-looking-at-the-camera-isolated-on-a-white.jpg?s=612x612&w=0&k=20&c=n3VOGCUVOhczU4ikef47REW2k7o_aDNZUGHbyepbIhw=",
    },
    {
      name: "Dutch Smoushond",
      image:
        "https://petkeen.com/wp-content/uploads/2021/06/dutch-smoushound_Wirestock-Creators_Shutterstock.jpg",
    },
    {
      name: "East Siberian Laika",
      image:
        "https://www.bil-jac.com/media/tujj54h1/east-siberian-laika-1166692610.jpg?center=0.56825078065519863,0.73959523969609353&mode=crop&width=600&height=400&rnd=132167273930770000",
    },
    {
      name: "East European Shepherd",
      image:
        "https://ckcusa.com/media/147561/east-european-shepherd.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Ecuadorian Hairless Dog",
      image:
        "https://i.pinimg.com/originals/0f/06/eb/0f06eb3a93985b723b891ece9cad0487.jpg",
    },
    {
      name: "English Cocker Spaniel",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Cocker-Spaniel-English.jpg?itok=VzijSHjN",
    },
    {
      name: "English Foxhound",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23022_english-foxhound.jpg",
    },
    {
      name: "English Mastiff",
      image:
        "https://previews.123rf.com/images/fotojagodka/fotojagodka1311/fotojagodka131101577/24014468-english-mastiff-dog-on-white-background.jpg",
    },
    {
      name: "English Setter",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/English_Setter_running_through_grass.jpg",
    },
    {
      name: "English Shepherd",
      image:
        "https://www.petfinder.com/static/2e21e7bf546531934f6c88aa3a0f5330/06ecf/English-Shepherd-600x260.jpg",
    },
    {
      name: "English Springer Spaniel",
      image:
        "https://ckcusa.com/media/147571/english-springer-spaniel.jpg?preset=ckcBreedImage375",
    },
    {
      name: "English Toy Terrier (Black & Tan)",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/English%20Toy%20Terrier%20%28Black%20%26%20Tan%292.jpg?h=dd3e07f5&itok=VhCPrd4Z",
    },
    {
      name: "Entlebucher Mountain Dog",
      image:
        "https://ckcusa.com/media/147580/entlebucher-mountain-dog.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Estonian Hound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Estonian_Hound_02.jpg/1200px-Estonian_Hound_02.jpg",
    },
    {
      name: "Estrela Mountain Dog",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Estrela-Mountain-Dog.jpg?itok=YD42IpDK",
    },
    {
      name: "Eurasier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/08/Eurasier-Hunderasse-Profil.jpg",
    },
    {
      name: "Field Spaniel",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0127_spaniel_field.jpg",
    },
    {
      name: "Fila Brasileiro",
      image:
        "https://ckcusa.com/media/147588/fila-brasileiro.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Finnish Hound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Finnish_Hound.jpg",
    },
    {
      name: "Finnish Lapphund",
      image:
        "https://www.omlet.us/images/cache/366/512/Dog-Finnish_Lapphund-A_Finnish_Lapphund_with_an_amazing_thick_black_and_white_coat.jpg",
    },
    {
      name: "Finnish Spitz",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Finnish-Spitz-On-White-01.jpg",
    },
    {
      name: "Flat-Coated Retriever",
      image:
        "https://www.purina.ph/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0041_retriever_flat_coated.jpg?itok=n83-1jlj",
    },
    {
      name: "French Bulldog",
      image:
        "https://media.istockphoto.com/id/823771350/photo/french-bulldog-sitting-and-looking-at-the-camera-isolated-on-white.jpg?s=612x612&w=0&k=20&c=vvPPCDP8Dlo0yXqd1wxS7aIScTZwzAqNegQzTTmS680=",
    },
    {
      name: "French Spaniel",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2019/08/french-spaniel-dog-breed-picture-cover.jpg?w=760",
    },
    {
      name: "Galgo Español",
      image:
        "https://previews.123rf.com/images/cynoclub/cynoclub1702/cynoclub170200021/71103191-galgo-espanol-in-front-of-white-background.jpg",
    },
    {
      name: "Garafian Shepherd",
      image:
        "https://i.pinimg.com/236x/03/37/de/0337def9e516a5d026f0a1456c5b8dd8--life-goals-farm-dogs.jpg",
    },
    {
      name: "Gascon Saintongeoi",
      image:
        "https://i.pinimg.com/originals/71/b0/19/71b019395983ce7564a2c3d840e43057.jpg",
    },
    {
      name: "Georgian Shepherd",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0d/Georgia_Shepherd.jpg",
    },
    {
      name: "German Hound",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/09/Deutsche-Bracke-Profil.jpg",
    },
    {
      name: "German Longhaired Pointer",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/GettyImages-1307362538_0.jpg?h=e704f29b&itok=3BUEgNvP",
    },
    {
      name: "German Pinsch",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20183655/German-Pinscher-standing-near-a-lake.jpg",
    },
    {
      name: "German Roughhaired Pointer",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/01/Deutsch-Stichelhaar-am-Wasser.jpg",
    },
    {
      name: "German Shepherd",
      image:
        "https://media.istockphoto.com/id/120526947/photo/side-view-of-german-shepherd-standing-white-background.jpg?s=612x612&w=0&k=20&c=B4FS9jr3DYfUHc-nNurQ03igQIvV4keloUnYH78GTxA=",
    },
    {
      name: "German Shorthaired Pointer",
      image:
        "https://st2.depositphotos.com/1004199/8981/i/950/depositphotos_89814830-stock-photo-german-shorthaired-pointer.jpg",
    },
    {
      name: "German Spaniel",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/chien-doysel.jpg",
    },
    {
      name: "German Spitz",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2019/10/german-spitz-dog-breed-pictures-cover.jpg",
    },
    {
      name: "German Wirehaired Pointer",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/German-Wire-Haired-Pointer.jpg?itok=zg2JE_IK",
    },
    {
      name: "Giant Schnauzer",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/01/Riesenschnauzer_3.jpg",
    },
    {
      name: "Glen of Imaal Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Glen-of-Imaal-Terrier-On-White-01.jpg",
    },
    {
      name: "Golden Retriever",
      image:
        "https://img.freepik.com/premium-photo/golden-retriever-sitting-front-white-wall_191971-19102.jpg?w=2000",
    },
    {
      name: "Gończy Polski",
      image:
        "https://ckcusa.com/media/147626/gonczy-polski.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Gordon Setter",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Gordon-Setter.jpg?itok=xcLDJY5_",
    },
    {
      name: "Grand Anglo-Français Blanc et Noir",
      image:
        "https://i.pinimg.com/originals/1d/12/30/1d12302d4becb8848eacc310b9d977ed.jpg",
    },
    {
      name: "Grand Anglo-Français Blanc et Orange",
      image: "https://www.worldlydogs.com/uploads/5/2/2/3/52234445/7896973.png",
    },
    {
      name: "Grand Anglo-Français Tricolore",
      image: "https://www.worldlydogs.com/uploads/5/2/2/3/52234445/3502498.png",
    },
    {
      name: "Grand Basset Griffon Vendéen",
      image:
        "https://www.thekennelclub.org.uk/media/2116/basset-griffon-vendeen-grand-standing.jpg?mode=pad&width=1000&rnd=132140453670000000",
    },
    {
      name: "Grand Bleu de Gascogne",
      image:
        "https://www.purina-arabia.com/sites/default/files/breed_library/grand_bleu_de_gascogne.jpg",
    },
    {
      name: "Grand Griffon Vendéen",
      image: "https://georgiapuppiesfromheaven.com/dog-breed-photos/grbagrve.jpg",
    },
    {
      name: "Great Dane",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Great-Dane.jpg?itok=593KgkUQ",
    },
    {
      name: "Greater Swiss Mountain Dog",
      image:
        "https://www.dogbreedinfo.com/images11/Greater%20Swiss%20Mountain%20DogHarryBackYard4.JPG",
    },
    {
      name: "Greek Harehound",
      image:
        "https://www.petmapz.com/wp-content/uploads/2015/05/Greek-Harehound.jpg",
    },
    {
      name: "Greek Shepherd",
      image:
        "https://i.pinimg.com/originals/e4/39/fa/e439fa271640b31545e6ebbf88f0d986.jpg",
    },
    {
      name: "Greenland Dog",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-09/greenland%20dog.jpg?h=4cab99cc&itok=FYhMbN8S",
    },
    {
      name: "Greyhound",
      image:
        "https://www.shutterstock.com/image-photo/italian-greyhoundnature-260nw-523160830.jpg",
    },
    {
      name: "Griffon Bleu de Gascogne",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/10/Griffon-Bleu-De-Gascogne-Profilbild.jpg",
    },
    {
      name: "Griffon Fauve de Bretagne",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Griffon_Fauve_De_Bretagne.jpg",
    },
    {
      name: "Griffon Nivernais",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Griffon_Nivernais.jpg",
    },
    {
      name: "Gull Dong",
      image:
        "https://www.kget.com/wp-content/uploads/sites/2/2019/12/5f1ef9db34ff4671875b7ff4b9f36e51.jpg?strip=1",
    },
    {
      name: "Gull Terrier",
      image:
        "https://www.mascotarios.org/wp-content/uploads/2011/08/Bullterrier.jpg.webp",
    },
    {
      name: "Hällefors Elkhound",
      image: "https://c8.alamy.com/comp/G9PPA0/hllefors-hund-G9PPA0.jpg",
    },
    {
      name: "Halden Hound",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/chien-courant-de-halden.jpg",
    },
    {
      name: "Hamiltonstövare",
      image:
        "https://www.purina.co.uk/sites/default/files/breed_library/hamiltonstovare.jpg",
    },
    {
      name: "Hanover Hound",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/10/Hannoverscher-Schwei%C3%9Fhund-Profilbild.jpg",
    },
    {
      name: "Harrier",
      image:
        "https://breed-assets.wisdompanel.com/dog/harrier/Harrier_Rev_Color_Small_File.png",
    },
    {
      name: "Havanese",
      image:
        "https://ckcusa.com/media/147641/havanese.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Himalayan Sheepdog",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNA560SlChTROR3vM8aQHZk4TffI-TkiI0_Mbsfri9g&usqp=CAU&ec=48665701",
    },
    {
      name: "Hierran Wolfdog",
      image:
        "https://images.saymedia-content.com/.image/t_share/MTc0OTY5Nzg1MzgwMzgyMTQ4/7-dog-breeds-bred-to-look-like-real-wolves.jpg",
    },
    {
      name: "Hmong bobtail dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hmong_Bobtail_1.jpg",
    },
    {
      name: "Hokkaido",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Hokkaidou_inu.jpg",
    },
    {
      name: "Hovawart",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Hovawart.jpg?itok=Stjf6J_N",
    },
    {
      name: "Huntaway",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Huntaway.JPG/1200px-Huntaway.JPG",
    },
    {
      name: "Hygen Hound",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/chien-courant-de-hygen.jpg",
    },
    {
      name: "Ibizan Hound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Podenco_z_ibizy_645.jpg",
    },
    {
      name: "Icelandic Sheepdog",
      image: "https://www.hundeo.com/wp-content/uploads/2019/01/Islandhund.jpg",
    },
    {
      name: "Indian pariah dog",
      image:
        "https://images.hindustantimes.com/img/2022/09/07/550x309/ashwini-chaudhary-monty-fSGSAaxzXfM-unsplash_1662535327381_1662535398649_1662535398649.jpg",
    },
    {
      name: "Indian Spitz",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/Indian_Spitz_Dog.jpg",
    },
    {
      name: "Irish Red and White Setter",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Irish-Red-and-White-Setter.jpg?itok=8PjaUR1G",
    },
    {
      name: "Irish Setter",
      image: "https://canna-pet.com/wp-content/uploads/2016/01/irish-setter.jpg",
    },
    {
      name: "Irish Terrier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/03/Irish-Terrier-Profil.jpg",
    },
    {
      name: "Irish Water Spaniel",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Irish-Water-Spaniel-On-White-01.jpg",
    },
    {
      name: "Irish Wolfhound",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Irish-Wolfhound.jpg?itok=ZmZKhNtU",
    },
    {
      name: "Istrian Coarse-haired Hound",
      image:
        "https://cdn-fastly.petguide.com/media/2022/02/16/8228119/istrian-coarse-haired-hound.jpg?size=720x845&nocrop=1",
    },
    {
      name: "Istrian Shorthaired Hound",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/chien-courant-distrie-%C3%A0-poil-ras.jpg",
    },
    {
      name: "Jack Russell Terrier",
      image:
        "https://img.freepik.com/premium-photo/jack-russell-terrier-puppy-6-months-old-standing_191971-3938.jpg?w=2000",
    },
    {
      name: "Jagdterrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2020/08/jagdterrier-dog-breed-pictures-cover-1.jpg?w=760",
    },
    {
      name: "Jämthund",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Swedish_Elkhound.jpg",
    },
    {
      name: "Japanese Chin",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Japanese-Chin-puppy.jpg",
    },
    {
      name: "Japanese Spitz",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Japanese-Spitz.jpg?itok=ZnSCJuSQ",
    },
    {
      name: "Japanese Terrier",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/terrier-japonais.jpg",
    },
    {
      name: "Jindo",
      image:
        "https://www.hundeo.com/wp-content/uploads/2022/05/Koreanischer-Jindo-Titelbild.jpg",
    },
    {
      name: "Jonangi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jonangi_worked_out.jpg/220px-Jonangi_worked_out.jpg",
    },
    {
      name: "Kai Ken",
      image:
        "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5cb5a9047fa1b446999986.jpg",
    },
    {
      name: "Kaikadi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImyMQN-dQFTGQU2UhVWKjPf7-SI8UjFDkFqkxAXSw2g&usqp=CAU&ec=48665701",
    },
    {
      name: "Kangal Shepherd Dog",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2022/05/kangal-shepherd-dog-cover.jpg",
    },
    {
      name: "Kanni",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paal_kanni_a.k.a_Fawn_with_black_coloured_Kanni.jpg/1252px-Paal_kanni_a.k.a_Fawn_with_black_coloured_Kanni.jpg",
    },
    {
      name: "Karakachan dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Karakatschan.jpg",
    },
    {
      name: "Karelian Bear Dog",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/09/Karelischer-Ba%CC%88renhund-seitlich.jpg",
    },
    {
      name: "Kars",
      image:
        "https://i.pinimg.com/736x/64/49/02/6449024bfcf257cb67b4b8a5350ec1ee.jpg",
    },
    {
      name: "Karst Shepherd",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/berger-du-massif-du-karst.jpg",
    },
    {
      name: "Keeshond",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Keeshond.jpg?itok=gNXAwBJs",
    },
    {
      name: "Kerry Beagle",
      image:
        "https://www.letsgoireland.com/wp-content/uploads/2022/12/Kerry-Beagle-By-mark-hosny-Own-work-CC-BY-SA-3.0-wiki-cropped.jpg.webp",
    },
    {
      name: "Kerry Blue Terrier",
      image:
        "https://ckcusa.com/media/147668/kerry-blue-terrier.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Khala",
      image: "https://ckcusa.com/media/147670/khala.jpg?preset=ckcBreedImage375",
    },
    {
      name: "King Charles Spaniel",
      image:
        "https://media.istockphoto.com/id/503301774/photo/cavalier-king-charles-spaniel-dog-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=39nPD5-SAMoWBV0EWQeVPFMbB-prpZb6Y2_GwoNNAGU=",
    },
    {
      name: "King Shepherd",
      image:
        "https://germanshepherdcountry.com/wp-content/uploads/2021/11/king-shepherd.jpg",
    },
    {
      name: "Kintamani",
      image: "https://fello.pet/wp-content/uploads/2020/12/kintamani_2.jpg",
    },
    {
      name: "Kishu",
      image:
        "https://breed-assets.wisdompanel.com/dog/kishu-ken/AKC_Kishu_Ken_Color_Small_File.png",
    },
    {
      name: "Kokoni",
      image:
        "https://www.dogbreedinfo.com/images26/KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg",
    },
    {
      name: "Kombai",
      image:
        "https://di7dud5r8j0ls.cloudfront.net//new/breed_engine/images/dog_images/kombai.jpg",
    },
    {
      name: "Komondor",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/10/Komondor-Profilbild.jpg",
    },
    {
      name: "Kooikerhondje",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23266_kooikerhondje.jpg",
    },
    {
      name: "Koolie",
      image:
        "https://cdn-fastly.petguide.com/media/2022/02/16/8258194/koolie.jpg?size=1200x628",
    },
    {
      name: "Koyun dog",
      image:
        "https://www.researchgate.net/publication/282005963/figure/fig5/AS:649285255315463@1531813076100/A-long-coated-grey-Rize-Koyun-dog-Photo-Orhan-Yilmaz.png",
    },
    {
      name: "Kromfohrländer",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Kromfohrlander.6.jpg",
    },
    {
      name: "Kuchi",
      image:
        "https://101dogbreeds.com/wp-content/uploads/2017/04/Kuchi-Dog-Images.jpg",
    },
    {
      name: "Kunming dog",
      image:
        "https://101dogbreeds.com/wp-content/uploads/2017/04/Kuchi-Dog-Images.jpg",
    },
    {
      name: "Kurdish Mastiff",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Pshdar_Dog-Kurdish_Dog-Kurd_Mastiff.jpg",
    },
    {
      name: "Kuvasz",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Kuvasz-standing-outdoors.jpg",
    },
    {
      name: "Labrador Retriever",
      image:
        "https://a-z-animals.com/media/Labrador-Retriever-Canis-familiaris-isolated.jpg",
    },
    {
      name: "Lagotto Romagnolo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lagotto_romagnolo_322.jpg/640px-Lagotto_romagnolo_322.jpg",
    },
    {
      name: "Lakeland Terrier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/09/Lakeland-Terrier-Hund-Profil.jpg",
    },
    {
      name: "Lancashire Heeler",
      image:
        "https://www.purina.co.uk/sites/default/files/breed_library/lancashire_heeler.jpg",
    },
    {
      name: "Landseer",
      image: "https://www.hundeo.com/wp-content/uploads/2019/01/Landseer_2.jpg",
    },
    {
      name: "Lapponian Herder",
      image: "https://brit-petfood.com/file/nodes/product/lapinporokoira.JPG",
    },
    {
      name: "Large Münsterländer",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Munsterlander-Large.jpg?itok=p_1mW1FE",
    },
    {
      name: "Leonberger",
      image:
        "https://ckcusa.com/media/147686/leonberger.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Levriero Sardo",
      image:
        "https://media-animals.earth.com/images/2022/08/17/31186799980089996/levrierosardo_3555561920340138.jpg",
    },
    {
      name: "Lhasa Apso",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Lhasa-Apso-On-White-01-400x267.jpg",
    },
    {
      name: "Liangshan Dog",
      image:
        "https://breed-assets.wisdompanel.com/dog/liangshan-hound/Liangshan_Hound_Color.png",
    },
    {
      name: "Lithuanian Hound",
      image:
        "https://media-animals.earth.com/images/2022/08/17/6562777934227264/lithuanianhound_6754235639124953.jpg",
    },
    {
      name: "Lobito Herreño",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Kinha.jpg",
    },
    {
      name: "Löwchen",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23156_lowchen.jpg",
    },
    {
      name: "Lupo Italiano",
      image:
        "https://101dogbreeds.com/wp-content/uploads/2017/09/Lupo-Italiano-Pictures.jpg",
    },
    {
      name: "Mackenzie River husky",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/MackenzieRiverHusky.jpg",
    },
    {
      name: "Magyar agár",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/10/Magyar-Aga%CC%81r-Profilbild.jpg",
    },
    {
      name: "Mahratta Greyhound",
      image:
        "https://i.pinimg.com/originals/7f/0a/20/7f0a206b4d72dd618e355751ff0c9c05.jpg",
    },
    {
      name: "Maltese",
      image:
        "https://media.istockphoto.com/id/824883238/photo/dog-running.jpg?s=612x612&w=0&k=20&c=oRw8ZvtMZ5Y4l8szrHvRbQbAgx0HSGkDA7sXZp4SP2s=",
    },
    {
      name: "Manchester Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2018/04/Manchester-Terrier-Slide-01.jpg",
    },
    {
      name: "Maneto",
      image:
        "https://img3.stockfresh.com/files/i/ivonnewierink/m/96/5769550_stock-photo-andalusian-hound.jpg",
    },
    {
      name: "Maremmano-Abruzzese Sheepdog",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/09/Maremmen-Abruzzen-Scha%CC%88ferhund-Profilbild-1.jpg",
    },
    {
      name: "McNab dog",
      image: "https://ckcusa.com/media/147701/mcnab.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Miniature American Shepherd",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Miniature-American-Shepherd-On-White-01.jpg",
    },
    {
      name: "Miniature Bull Terrier",
      image:
        "https://www.petfinder.com/sites/default/files/images/content/miniature-bull-terrier-detail-scaled.jpg",
    },
    {
      name: "Miniature Fox Terrier",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/Miniature_Fox_Terrier.jpg",
    },
    {
      name: "Miniature Pinscher",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Miniature-Pinscher.jpg?itok=PKIDPe_X",
    },
    {
      name: "Miniature Schnauzer",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Miniature-Schnauzer-On-White-01.jpg",
    },
    {
      name: "Molossus of Epirus",
      image:
        "https://101dogbreeds.com/wp-content/uploads/2018/03/Molossus-of-Epirus.jpg",
    },
    {
      name: "Mongrel",
      image:
        "https://media.istockphoto.com/id/1137944339/photo/mixed-breed-dog-8-years-old-sitting-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=XiayIrxQZbtVgkRh13oKfuvrwQOKMhpVZw_hlPMEMnM=",
    },
    {
      name: "Montenegrin Mountain Hound",
      image:
        "https://www.petmapz.com/wp-content/uploads/2015/05/Montenegrin-Mountain-Hound.jpg",
    },
    {
      name: "Mountain Cur",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/mountain-cur-dog-breed-pictures/mountain-cur-dog-breed-pictures-1.jpg",
    },
    {
      name: "Mountain Feist",
      image:
        "https://i-10b32.kxcdn.com/ppbr/breeds/mountain-feist_profile_350x400.jpg",
    },
    {
      name: "Mucuchies",
      image:
        "https://ultimasnoticias.com.ve/wp-content/uploads/2021/10/MUCUCHIES-2.jpg",
    },
    {
      name: "Mudhol Hound",
      image:
        "https://www.caravanhound.in/home/wp-content/uploads/2017/02/Mudhol.jpg",
    },
    {
      name: "Mudi",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/09/Mudi-Profilbild.jpg",
    },
    {
      name: "Neapolitan Mastiff",
      image:
        "https://ckcusa.com/media/147719/neapolitan-mastiff.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Nenets Herding Laika",
      image:
        "https://64.media.tumblr.com/7f9354a3e3e2369460b099267801088d/494cc3f550f89efe-ab/s540x810/36c35f906783a968cff17da873f4109279ea3020.jpg",
    },
    {
      name: "New Guinea singing dog",
      image:
        "https://ckcusa.com/media/147721/new-guinea-singing-dog.jpg?preset=ckcBreedImage375",
    },
    {
      name: "New Zealand Heading Dog",
      image:
        "https://i.pinimg.com/originals/7f/f8/9d/7ff89d34af521182bfe6e82a543f1750.jpg",
    },
    {
      name: "Newfoundland",
      image:
        "https://img.freepik.com/premium-photo/newfoundland-dog_191971-3446.jpg",
    },
    {
      name: "Norfolk Terrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23076_norfolk-terrier.jpg",
    },
    {
      name: "Norrbottenspets",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Norrbottenspets-On-White-01.jpg",
    },
    {
      name: "Northern Inuit Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Northern_Inuit_Dog.jpg/800px-Northern_Inuit_Dog.jpg",
    },
    {
      name: "Norwegian Buhund",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Norwegian-Buhund-On-White-01.jpg",
    },
    {
      name: "Norwegian Elkhound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Norwegian_Elkhound_1.jpg/1200px-Norwegian_Elkhound_1.jpg",
    },
    {
      name: "Norwegian Lundehund",
      image:
        "https://ckcusa.com/media/147730/norwegian-lundehund.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Norwich Terrier",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Norwich-Terrier.jpg?itok=OtBwaPrB",
    },
    {
      name: "Nova Scotia Duck Tolling Retriever",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_22990_nova-scotia-duck-tolling-retriever.jpg",
    },
    {
      name: "Old Danish Pointer",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/chien-darr%C3%AAt-danois.jpg",
    },
    {
      name: "Old English Sheepdog",
      image:
        "https://ckcusa.com/media/147737/old-english-sheepdog.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Old English Terrier",
      image:
        "https://media.istockphoto.com/id/1205016170/photo/english-bull-terrier-posing-on-dog-show.jpg?s=612x612&w=0&k=20&c=QOpYHY88STgrUD7YQNxPySZkIOai6uwi3fzwa2jmjKQ=",
    },
    {
      name: "Olde English Bulldogge",
      image:
        "https://ckcusa.com/media/147738/olde-english-bulldogge.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Otterhound",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Otterhound.jpg?itok=dG-MbA8y",
    },
    {
      name: "Pachon Navarro",
      image:
        "https://media-animals.earth.com/images/2022/08/17/3191272928202604/pachonnavarro_45241812575983675.jpg",
    },
    {
      name: "Pampas Deerhound",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Scottish-Deerhound-standing-in-the-woods.jpg",
    },
    {
      name: "Papillon",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0092_papillon.jpg",
    },
    {
      name: "Parson Russell Terrier",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Parson_Russell_Terrier_FCI.jpg",
    },
    {
      name: "Pastore della Lessinia' e del Lagorai",
      image:
        "https://1.bp.blogspot.com/-BdNojc_GbmI/XvtguOFZrYI/AAAAAAABR5o/3yKK89Vs11s5c1Vl5cPiQ8XzAqPpSDsqgCLcBGAsYHQ/s1600/pastore%2Bdei%2Blagorai.jpg",
    },
    {
      name: "Patagonian Sheepdog",
      image: "https://i.ytimg.com/vi/qsDbSKlcDGI/mqdefault.jpg",
    },
    {
      name: "Patterdale Terrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/patterdale-terrier-dog-breed-pictures/patterdale-terrier-dog-breed-pictures-1.jpg",
    },
    {
      name: "Pekingese",
      image:
        "https://ckcusa.com/media/144636/pekingese-2.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Pembroke Welsh Corgi",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/day_2_dec_14_085-400x267.jpg",
    },
    {
      name: "Perro Majorero",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCNEa_Zs_I118CiVQyVjUDlninZ6FlBgLCUFa17_AJQ&usqp=CAU&ec=48665701",
    },
    {
      name: "Perro de Pastor Mallorquin",
      image:
        "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=400,height=200,fit=cover/animal/breed/dog/adult/5d4157987e239450734953.jpg",
    },
    {
      name: "Perro de Presa Canario",
      image:
        "https://ckcusa.com/media/147748/perro-de-presa-canario.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Perro de Presa Mallorquin",
      image:
        "https://images.fineartamerica.com/images-medium-large-5/3-perro-de-presa-mallorquin-jean-michel-labat.jpg",
    },
    {
      name: "Peruvian Inca Orchid",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Peruvian-Inca-Orchid-04.jpg",
    },
    {
      name: "Petit Basset Griffon Vendéen",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Petit-Basset-Griffon-Vendeen-On-White-03.jpg",
    },
    {
      name: "Petit Bleu de Gascogne",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Petit_Bleu_De_Gascogne.jpg",
    },
    {
      name: "Phalène",
      image:
        "https://www.101dogbreeds.com/wp-content/uploads/2017/05/Phal%C3%A8ne-Pictures.jpg",
    },
    {
      name: "Pharaoh Hound",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrHkYrMQC7FIGjh4LTnhOkcwkFhs3Z6RCiYTZKY_YcA&usqp=CAU&ec=48665701",
    },
    {
      name: "Phu Quoc Ridgeback",
      image:
        "https://thedogsjournal.com/wp-content/uploads/2022/04/Phu-Quoc-Ridgeback-Dog.jpg",
    },
    {
      name: "Picardy Spaniel",
      image:
        "https://animalsadda.com/wp-content/uploads/2020/04/Picardy-Spaniel-2.jpg",
    },
    {
      name: "Plummer Terrier",
      image:
        "https://www.101dogbreeds.com/wp-content/uploads/2017/12/Plummer-Terrier-Dog.jpg",
    },
    {
      name: "Plott Hound",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23040_plott.jpg",
    },
    {
      name: "Podenco Andaluz",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/53/50/04/1000_F_553500418_IVkKno7WN0OEsWLtgXrF1FjVTbB9oRFz.jpg",
    },
    {
      name: "Podenco Canario",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/01/Podenco-Canario-Profil.jpg",
    },
    {
      name: "Podenco Valenciano",
      image:
        "https://media-animals.earth.com/images/2022/08/17/7623636096608437/podencovalenciano_5933298675098437.jpg",
    },
    {
      name: "Pointer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/English_Pointer_orange-white.jpg",
    },
    {
      name: "Poitevin",
      image:
        "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5cb5dc10c749e606770858.jpg",
    },
    {
      name: "Polish Greyhound",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/l%C3%A9vrier-polonais.jpg",
    },
    {
      name: "Polish Hound",
      image:
        "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5d4048b568246332040725.jpg",
    },
    {
      name: "Polish Lowland Sheepdog",
      image:
        "https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Polish-Lowland-Sheepdog.jpg",
    },
    {
      name: "Polish Tatra Sheepdog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Podhalaner_Sven_Fischer.jpg",
    },
    {
      name: "Pomeranian",
      image:
        "https://ckcusa.com/media/144637/pomeranian.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Pont-Audemer Spaniel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pont-Audemer_Spaniel_or_%C3%89pagneul_de_Pont-Audemer.JPG",
    },
    {
      name: "Poodle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Agility_Poodle.jpg",
    },
    {
      name: "Porcelaine",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/porcelaine.jpg",
    },
    {
      name: "Portuguese Podengo",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Portuguese-Podengo-standing-in-three-quarter-view.jpg",
    },
    {
      name: "Portuguese Pointer",
      image:
        "https://doglime.com/wp-content/uploads/2019/04/Portuguese-Pointer-300x187.jpg",
    },
    {
      name: "Portuguese Water Dog",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Portuguese-Water-Dog.jpg?itok=la9fHEVc",
    },
    {
      name: "Posavac Hound",
      image:
        "https://preview.redd.it/cfhzxssxin931.jpg?auto=webp&s=820f8589d8dc58d69a0ef9eb797f2a253e8bf0f4",
    },
    {
      name: "Pražský Krysařík",
      image:
        "https://eyams5v2mpc.exactdn.com/wp-content/uploads/2022/11/shutterstock_1645073449-scaled.jpg?strip=all&lossy=1&ssl=1",
    },
    {
      name: "Pudelpointer",
      image: "https://fello.pet/wp-content/uploads/2020/12/pudelpojnter2.jpg",
    },
    {
      name: "Pug",
      image:
        "https://cdn-fastly.petguide.com/media/2022/02/16/8243746/pug.jpg?size=720x845&nocrop=1",
    },
    {
      name: "Puli",
      image:
        "https://st.depositphotos.com/1806346/1390/i/450/depositphotos_13908594-stock-photo-corded-puli.jpg",
    },
    {
      name: "Pumi",
      image: "https://www.akc.org/wp-content/uploads/2017/11/Pumi-MP.jpg",
    },
    {
      name: "Pungsan dog",
      image:
        "https://i.pinimg.com/736x/b7/91/89/b791898a62c5a5a6dd18975b3cc76aa2--spitz-dogs-korean.jpg",
    },
    {
      name: "Pyrenean Mastiff",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/MasPiri-Puma-FIN.jpg/440px-MasPiri-Puma-FIN.jpg",
    },
    {
      name: "Pyrenean Mountain Dog",
      image:
        "https://media.istockphoto.com/id/182401853/photo/great-pyrenees.jpg?s=612x612&w=0&k=20&c=6iSSNikfn9lFRA-2FpVzoQ3GhJywp9qYQpeiI3yEyn8=",
    },
    {
      name: "Pyrenean Sheepdog",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0102_pyrenean_sheepdog.jpg",
    },
    {
      name: "Rafeiro do Alentejo",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/01/Rafeiro-Do-Alentejo-Profilbild.jpg",
    },
    {
      name: "Rajapalayam",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%282%29_Isha_female_rajapalayam.jpg/1200px-%282%29_Isha_female_rajapalayam.jpg",
    },
    {
      name: "Rampur Greyhound",
      image:
        "https://www.101dogbreeds.com/wp-content/uploads/2016/07/Rampur-Greyhound-Dog.jpg",
    },
    {
      name: "Rat Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Rat-Terrier-On-White-01.jpg",
    },
    {
      name: "Ratonero Bodeguero Andaluz",
      image:
        "https://www.iperu.org/wp-content/uploads/2015/12/perro-ratonero-bodeguero-andaluz.jpg",
    },
    {
      name: "Ratonero Mallorquin",
      image:
        "https://www.hundeo.com/wp-content/uploads/2020/03/Ratero-Mallorquin-Profilbild.jpg",
    },
    {
      name: "Ratonero Murciano",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bodeguero_young.jpg/320px-Bodeguero_young.jpg",
    },
    {
      name: "Ratonero Valenciano",
      image:
        "https://i.pinimg.com/736x/3e/84/44/3e84446bc62386b58b3d66bf8f58219c--dog-breeds-puppies.jpg",
    },
    {
      name: "Redbone Coonhound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e2/A_female_redbone-coonhound-1.jpg",
    },
    {
      name: "Rhodesian Ridgeback",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Male_Rhodesian_ridgeback_IMG_6800.JPG/1200px-Male_Rhodesian_ridgeback_IMG_6800.JPG",
    },
    {
      name: "Romanian Mioritic Shepherd Dog",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/romanian-mioritic-shepherd-dog-breed-pictures/romanian-mioritic-shepherd-dog-breed-pictures-1.jpg",
    },
    {
      name: "Romanian Raven Shepherd Dog",
      image:
        "https://nationalpurebreddogday.com/wp-content/uploads/2018/06/c604a85d6ff519e9523b9aa656d0592f-300x413.jpg",
    },
    {
      name: "Rottweiler",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa70rLHZoTPosyO7I-YSz-SDAmXiMkuVmylhEh0h3_Xg&usqp=CAU&ec=48665701",
    },
    {
      name: "Rough Collie",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0036_collie_rough.jpg",
    },
    {
      name: "Russian Spaniel",
      image: "https://europetnet.org/images/dogbreeds/russianspaniel.jpg",
    },
    {
      name: "Russian Toy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwzR7mmwPcpujqK2pDefuU7qY_GxNZFj6zV-wZlW6Kg&usqp=CAU&ec=48665701",
    },
    {
      name: "Russo-European Laika",
      image:
        "https://ckcusa.com/media/147800/russo-european-laika.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Ryukyu Inu",
      image:
        "https://i0.wp.com/okinawanaturephotography.com/wp-content/uploads/2017/11/14994667613_6e502acd04_b.jpg",
    },
    {
      name: "Saarloos Wolfdog",
      image:
        "https://previews.123rf.com/images/cynoclub/cynoclub1612/cynoclub161200130/67526862-saarloos-wolfdog-in-front-of-white-background.jpg",
    },
    {
      name: "Sabueso Español",
      image:
        "https://fello.pet/wp-content/uploads/2020/12/ispanskaya-gonchaya.jpg",
    },
    {
      name: "Saint Bernard",
      image:
        "https://cdn.britannica.com/66/235666-050-751046D6/Saint-bernard-dog-st-bernard-standing-snow.jpg",
    },
    {
      name: "Saint Hubert Jura Hound",
      image:
        "https://nationalpurebreddogday.com/wp-content/uploads/2017/07/bruno-saint-hubert-francais-131015-131202.jpg",
    },
    {
      name: "Saint Miguel Cattle Dog",
      image:
        "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5cd198d065e9d844620048.jpg",
    },
    {
      name: "Saint-Usuge Spaniel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/EpagneuldeSaintUsuge.jpg",
    },
    {
      name: "Saluki",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Saluki_Fond_Blanc.jpg",
    },
    {
      name: "Samoyed",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0110_samoyed.jpg",
    },
    {
      name: "Sapsali",
      image:
        "https://i.pinimg.com/550x/26/d3/cb/26d3cb004aef7129272fe8d9fca99c9f.jpg",
    },
    {
      name: "Sarabi dog",
      image:
        "https://i.pinimg.com/originals/ea/89/eb/ea89eb4390af9632231993cf0f496352.jpg",
    },
    {
      name: "Sardinian Shepherd Dog",
      image: "https://farm4.staticflickr.com/3374/3409311428_439a857d7c_b.jpg",
    },
    {
      name: "Šarplaninac",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/09/S%CC%8Carplaninac-Profilbild.jpg",
    },
    {
      name: "Schapendoes",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/06/Schapendoes-Profil.jpg",
    },
    {
      name: "Schillerstövare",
      image:
        "https://ckcusa.com/media/147808/schillerstovare.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Schipperke",
      image: "",
    },
    {
      name: "Schweizer Laufhund",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Schipperke.jpg?itok=vflQ_Wzs",
    },
    {
      name: "Schweizerischer Niederlaufhund",
      image:
        "https://i.pinimg.com/736x/7b/0e/69/7b0e69be7569925ea5d82067ab045d98--dog-breeds-jura.jpg",
    },
    {
      name: "Scottish Deerhound",
      image:
        "https://www.purina.co.uk/sites/default/files/2022-07/Deerhound.jpg?itok=WtOg5UVS",
    },
    {
      name: "Scottish Terrier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/08/Scottish-Terrier-Profil.jpg",
    },
    {
      name: "Sealyham Terrier",
      image:
        "https://www.thesprucepets.com/thmb/qN_4G-gzwKJGKduwxU_d_nDk5b4=/800x0/filters:no_upscale():strip_icc()/Sealyham_Terrier_-_Solo.2-c1d1c7ef266f40f0a4059057ef075a55.jpg",
    },
    {
      name: "Segugio dell'Appennino",
      image: "https://www.cani.it/img/08f31d947673fcd5ca42cb5c0625410e/246.jpg",
    },
    {
      name: "Segugio Italiano",
      image: "https://fello.pet/wp-content/uploads/2020/12/ital-gonchaya1.jpg",
    },
    {
      name: "Segugio Maremmano",
      image: "https://www.fci.be/Nomenclature/Illustrations/361g06-1.jpg",
    },
    {
      name: "Serbian Hound",
      image: "https://brit-petfood.com/file/nodes/product/srbskyhonic.jpg",
    },
    {
      name: "Serbian Tricolour Hound",
      image:
        "https://fello.pet/wp-content/uploads/2020/12/serbskaya-trehczvetnaya-gonchaya1.jpg",
    },
    {
      name: "Serrano Bulldog",
      image:
        "https://thebulldogaddict.com/wp-content/uploads/2020/11/Serrano-Bulldog-Picture.jpg",
    },
    {
      name: "Shar Pei",
      image:
        "https://media.istockphoto.com/id/520775729/photo/chinese-shar-pei.jpg?s=612x612&w=0&k=20&c=YjRePdq0WWYdSV8Zg3Y34CJ6g7dwueFAvxn3hQpSrec=",
    },
    {
      name: "Shetland Sheepdog",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-09/Shetland%20Sheepdog.jpg?h=bc7b09df&itok=tBaTIF1U",
    },
    {
      name: "Shiba Inu",
      image:
        "https://st.depositphotos.com/1722908/1817/i/950/depositphotos_18176563-stock-photo-shiba-inu-dog.jpg",
    },
    {
      name: "Shih Tzu",
      image:
        "https://www.omlet.us/images/cache/512/433/Dog-Shih_Tzu-A_beautiful_little_Shih_Tzu_standing_tall%2C_showing_off_its_big_bushy_tail.jpg",
    },
    {
      name: "Shikoku",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/10/Shikoku-Hunderasse-Profil.jpg",
    },
    {
      name: "Shiloh Shepherd",
      image:
        "https://breed-assets.wisdompanel.com/dog/shiloh-shepherd/shiloh-shepherd1.jpg",
    },
    {
      name: "Siberian Husky",
      image:
        "https://img.freepik.com/premium-photo/black-white-siberian-husky-dog-white_8595-11196.jpg?w=2000",
    },
    {
      name: "Silken Windhound",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Fallon_the_Silken_Windhound.jpg",
    },
    {
      name: "Silky Terrier",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Silky-Terrier-On-White-01.jpg",
    },
    {
      name: "Sinhala Hound",
      image:
        "https://cdn.shopify.com/s/files/1/0589/8262/9516/files/Sinhala_Hound_480x480.jpg?v=1680772576",
    },
    {
      name: "Skye Terrier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/01/Skye-Terrier-Profil.jpg",
    },
    {
      name: "Sloughi",
      image: "https://www.akc.org/wp-content/uploads/2017/11/Sloughi-400x267.jpg",
    },
    {
      name: "Slovakian Wirehaired Pointer",
      image:
        "https://www.dogbreedinfo.com/images27/SlovakianRoughHairedPointerPurebredDogLuger2YearsOld1.jpg",
    },
    {
      name: "Slovenský Cuvac",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Slovensky-Cuvac-standing-outdoors.jpg",
    },
    {
      name: "Slovenský Kopov",
      image:
        "https://doglime.com/wp-content/uploads/2019/05/Slovensky-Kopov-Behavior.jpg",
    },
    {
      name: "Smalandstövare",
      image: "https://www.fci.be/Nomenclature/Illustrations/129g06.jpg",
    },
    {
      name: "Small Greek domestic dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg",
    },
    {
      name: "Small Münsterländer",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/11/Kleiner-Mu%CC%88nsterla%CC%88nder-Hunderasse-Profil.jpg",
    },
    {
      name: "Smithfield",
      image: "https://www.orivet.com/store-assets/products/386.jpg",
    },
    {
      name: "Smooth Collie",
      image:
        "https://www.purina-arabia.com/sites/default/files/2021-02/BREED%20Hero_0018_border_collie.jpg",
    },
    {
      name: "Smooth Fox Terrier",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Fox-Terrier-Smooth-Coat.jpg?itok=EU1nlsfE",
    },
    {
      name: "Soft-Coated Wheaten Terrier",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/02/27133003/Wheaten_BreedStandards_0011.jpg",
    },
    {
      name: "South Russian Ovcharka",
      image:
        "https://www.dogbreedinfo.com/images10/SouthRussianOvtcharkaDianeSariByelkJHD.jpg",
    },
    {
      name: "Spanish Mastiff",
      image:
        "https://www.nativebreed.org/wp-content/uploads/2020/07/Spanish-Mastiff.jpg",
    },
    {
      name: "Spanish Water Dog",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2022/04/spanish-water-dog-breed-pictures-cover.jpg",
    },
    {
      name: "Spino degli Iblei",
      image: "https://im4.freeforumzone.it/up/43/22/1713896712.jpg",
    },
    {
      name: "Spinone Italiano",
      image:
        "https://101dogbreeds.com/wp-content/uploads/2017/01/Spinone-Italiano-Photos.jpg",
    },
    {
      name: "Sporting Lucas Terrier",
      image:
        "https://www.mypetzilla.co.uk/files/4514/7924/5851/Sporting-Lucas-Terrier.jpg",
    },
    {
      name: "Stabyhoun",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23264_Stabyhoun-dog-breed.jpg",
    },
    {
      name: "Staffordshire Bull Terrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23292_staffordshire-bull-terrier.jpg?w=460",
    },
    {
      name: "Standard Schnauzer",
      image:
        "https://www.akc.org/wp-content/uploads/2020/05/Standard-Schnauzer-standing-outdoors-500x486.jpg",
    },
    {
      name: "Stephens Stock",
      image:
        "https://ckcusa.com/media/147857/stephens-stock.jpg?preset=ckcBreedImage375",
    },
    {
      name: "Styrian Coarse-haired Hound",
      image:
        "https://fello.pet/wp-content/uploads/2020/12/steirer-profil-klein.jpg",
    },
    {
      name: "Sussex Spaniel",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Sussex-Spaniel-On-White-01.jpg",
    },
    {
      name: "Swedish Lapphund",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Swedish-Lapphund-On-White-01.jpg",
    },
    {
      name: "Swedish Vallhund",
      image:
        "https://i.pinimg.com/originals/b4/33/81/b43381c83dae3a8ef1738024075425e1.jpg",
    },
    {
      name: "Swinford Bandog",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQPVDefuzjOvtGDTHzUf9GTikpA1xG3-00rB9f06_nanhfEMmdut1eyUg4C2JkCo_p8QwMaHvhJiZmtv90",
    },
    {
      name: "Taigan",
      image:
        "https://www.101dogbreeds.com/wp-content/uploads/2018/04/Kyrgyz-Sighthound.jpg",
    },
    {
      name: "Taiwan Dog",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Taiwan-Dog-History-02-500x499.jpg",
    },
    {
      name: "Tamaskan Dog",
      image:
        "https://st4.depositphotos.com/2103197/24043/i/600/depositphotos_240437638-stock-photo-tamaskan-hybrid-dog-seen-side.jpg",
    },
    {
      name: "Tang Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/HK_SW_QR_West_pet_Dog_walking_May_2021_SS2_05.jpg",
    },
    {
      name: "Tarsus çatalburun",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OOCqmb0aQLFGibk3jyCoQwkXPA_PlOWczC3LXxOtZQ&usqp=CAU&ec=48665701",
    },
    {
      name: "Tazy",
      image: "https://fello.pet/wp-content/uploads/2020/12/tazy-1.jpg",
    },
    {
      name: "Teddy Roosevelt Terrier",
      image:
        "https://static.wixstatic.com/media/953da5_749a5748cdca4a68920f25774a11166d~mv2.jpg/v1/fit/w_2500,h_1330,al_c/953da5_749a5748cdca4a68920f25774a11166d~mv2.jpg",
    },
    {
      name: "Telomian",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Telomian.jpg",
    },
    {
      name: "Tenterfield Terrier",
      image:
        "https://petsy.com.au/wp-content/dog-breed-images/tenterfield-terrier-adult-black-white-and-tan.jpg",
    },
    {
      name: "Terrier Brasileiro",
      image:
        "https://img.freepik.com/fotos-premium/terrier-brasileiro-isolado_87557-13778.jpg?w=2000",
    },
    {
      name: "Thai Bangkaew Dog",
      image: "https://brit-petfood.com/file/nodes/product/thajsky%20spic.JPG",
    },
    {
      name: "Thai Ridgeback",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/thai-ridgeback-dog-breed-pictures/thai-ridgeback-dog-breed-pictures-1.jpg",
    },
    {
      name: "Tibetan Kyi Apso",
      image:
        "https://nationalpurebreddogday.com/wp-content/uploads/2017/01/a4382b071b3528df144e16eaf0939598.jpg",
    },
    {
      name: "Tibetan Mastiff",
      image:
        "https://www.thesprucepets.com/thmb/ltpjpqJIkTh6z2G5wp2tF-FWEhs=/1566x0/filters:no_upscale():strip_icc()/GettyImages-1214648223-a185de9c88984ca69f1ac720bdea6efe.jpg",
    },
    {
      name: "Tibetan Spaniel",
      image:
        "https://thumbs.dreamstime.com/b/tibetan-spaniel-standing-years-old-white-89215886.jpg",
    },
    {
      name: "Tibetan Terrier",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tibetan_terrier.jpg",
    },
    {
      name: "Tonya Finosu",
      image:
        "https://www.researchgate.net/profile/Richard-Wilson-19/publication/282005963/figure/fig11/AS:649285259493376@1531813077384/The-Tonya-Finosu-Fino-of-Tonya-is-another-classic-Spitz-type-that-is-found-only-as-a_Q320.jpg",
    },
    {
      name: "Torkuz",
      image:
        "https://i.pinimg.com/736x/74/a6/2c/74a62c05897979194449d7e435804f86.jpg",
    },
    {
      name: "Tornjak",
      image: "https://www.dogzone.com/images/breeds/tornjak-800.jpg",
    },
    {
      name: "Tosa Inu",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/10/Tosa-Inu-Profilbild.jpg",
    },
    {
      name: "Toy Fox Terrier",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23130_toy-fox-terrier.jpg",
    },
    {
      name: "Toy Manchester Terrier",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/04/26221428/Manchester-Terrier-Slide-01.jpg",
    },
    {
      name: "Transylvanian Hound",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2020/07/transylvanian-hound-dog-breed-pictures-cover.jpg?w=760",
    },
    {
      name: "Treeing Cur",
      image:
        "https://i.pinimg.com/736x/29/fd/8a/29fd8a889f0aa3cd985c43a141136665--squirrel-hunting-hunting-dogs.jpg",
    },
    {
      name: "Treeing Feist",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Young%27s_Atomic_Flash.jpg",
    },
    {
      name: "Treeing Tennessee Brindle",
      image:
        "https://images.wagwalkingweb.com/media/breed/treeing-tennessee-brindle/appearance/treeing-tennessee-brindle.png",
    },
    {
      name: "Treeing Walker Coonhound",
      image:
        "https://cdn-images.vetstreet.com/a6/66/1a0c470c4d859ef1755999168f1d/treeing-walker-coonhound-ap-qywzcw-645-x-380.jpg",
    },
    {
      name: "Trigg Hound",
      image: "https://www.petmapz.com/wp-content/uploads/2015/06/Trigg-Hound.jpg",
    },
    {
      name: "Tyrolean Hound",
      image:
        "https://i.pinimg.com/originals/b4/6d/6d/b46d6d2a0e3cc3cbb9fd0df4502d3394.jpg",
    },
    {
      name: "Pakistani Vikhan",
      image:
        "https://petyourdog.com/wp-content/uploads/2021/05/1349000438~PakistaniVikhanDog.jpg",
    },
    {
      name: "Vikhan Sheeodog",
      image:
        "https://www.pashudhanpraharee.com/wp-content/uploads/2022/06/Vikhan-Sheepdog.jpg",
    },
    {
      name: "Villano de Las Encartaciones",
      image:
        "https://www.petdarling.com/wp-content/uploads/2018/01/perro-villano.jpg",
    },
    {
      name: "Villanuco de Las Encartaciones",
      image:
        "https://static.wikia.nocookie.net/dogs-cats/images/2/29/Villano_de_las_encartaciones_molososyperrosdepresa.jpg/revision/latest?cb=20150220002522",
    },
    {
      name: "Vizsla",
      image:
        "https://www.akc.org/wp-content/uploads/2017/11/Vizsla-On-White-01.jpg",
    },
    {
      name: "Volkosob",
      image:
        "https://i.pinimg.com/originals/e6/9b/94/e69b946968d72d87129d2e5063ed4c87.jpg",
    },
    {
      name: "Volpino Italiano",
      image:
        "https://www.akc.org/wp-content/uploads/2021/03/Volpino-Italiano-standing-in-profile-in-the-grass.jpg",
    },
    {
      name: "Weimaraner",
      image:
        "https://media.istockphoto.com/id/450019993/photo/weimaraner-puppy-5-months-old-standing-isolated.jpg?s=612x612&w=0&k=20&c=1MJECjH7P32ZDK-47ubA4TrVJyDQHqwyB7GFWW3c71o=",
    },
    {
      name: "Welsh Hound",
      image:
        "https://www.worldlifeexpectancy.com//images/a/d/d/b/welsh_hound/welsh_hound_1.min.jpg",
    },
    {
      name: "Welsh Sheepdog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Welsh_Sheepdog.jpg",
    },
    {
      name: "Welsh Springer Spaniel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Welsh_Springer_Spaniel_Fond_Blanc.jpg",
    },
    {
      name: "Welsh Terrier",
      image:
        "https://www.hundeo.com/wp-content/uploads/2019/03/Welsh-Terrier-Profil.jpg",
    },
    {
      name: "West Country Harrier",
      image:
        "https://media-animals.earth.com/images/2022/01/26/43518759522660310/westcountryharrier_43518759522660310.jpg",
    },
    {
      name: "West Highland White Terrier",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/West_Highland_White_Terrier_Krakow.jpg/800px-West_Highland_White_Terrier_Krakow.jpg",
    },
    {
      name: "West Siberian Laika",
      image:
        "https://breed-assets.wisdompanel.com/dog/west-siberian-laika/West_Siberian_Laika3.jpg",
    },
    {
      name: "Westphalian Dachsbracke",
      image:
        "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/Basset_De_Westphalie.jpg",
    },
    {
      name: "Wetterhoun",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fryzyjski_pies_wodny_u68.jpg/1200px-Fryzyjski_pies_wodny_u68.jpg",
    },
    {
      name: "Whippet",
      image:
        "https://ckcusa.com/media/147902/whippet.jpg?preset=ckcBreedImage375",
    },
    {
      name: "White Shepherd",
      image:
        "https://cdn.shopify.com/s/files/1/2456/1591/articles/everything-you-need-to-know-about-the-white-german-shepherd-903303.jpg?v=1620791625",
    },
    {
      name: "White Swiss Shepherd Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/White_Swiss_Shepherd_Dog_Djinn_%28cropped%29.JPG",
    },
    {
      name: "Wire Fox Terrier",
      image:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Fox-Terrier-Wire-Coat.jpg?itok=mRH-NQSl",
    },
    {
      name: "Wirehaired Pointing Griffon",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23002_wirehaired-pointing-griffon.jpg",
    },
    {
      name: "Wirehaired Vizsla",
      image:
        "https://media1.popsugar-assets.com/files/thumbor/oauS7uia0q6Mpj5OYqt-7uv-g4U/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/04/29/746/n/1922243/07a0eda9d1b1330c_use2/i/Wirehaired-Vizsla.jpg",
    },
    {
      name: "Xiasi Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xiasi_Quan_dog.jpg/1200px-Xiasi_Quan_dog.jpg",
    },
    {
      name: "Xoloitzcuintle",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0083_mexican_hairless_dog.jpg",
    },
    {
      name: "Yakutian Laika",
      image:
        "https://dogtime.com/wp-content/uploads/sites/12/gallery/yakutian-laika-dog-breed-pictures/yakutian-laika-dog-breed-pictures-1.jpg",
    },
    {
      name: "Yorkshire Terrier",
      image:
        "https://www.purina.co.uk/sites/default/files/2021-02/BREED%20Hero_0141_yorkshire_terrier.jpg",
    },
    {
      name: "Zerdava",
      image: "https://i.ytimg.com/vi/i4x0fvLSjpc/mqdefault.jpg",
    },
  ];

  const cocktailIngredientListData = [
    {
      ingredientName: "Light rum",
      containsAlcohol: true,
      description:
        'Light rums, also referred to as "silver" or "white" rums, in general, have very little flavor aside from a general sweetness. Light rums are sometimes filtered after aging to remove any colour. The majority of light rums come from Puerto Rico. Their milder flavors make them popular for use in mixed drinks, as opposed to drinking them straight. Light rums are included in some of the most popular cocktails including the Mojito and the Daiquiri.',
    },
    {
      ingredientName: "Applejack",
      containsAlcohol: true,
      description:
        'Applejack is a strong apple-flavored alcoholic beverage produced from apples, popular in the American colonial period. The name derives from "jacking", a term for "increasing" (alcohol content) and specifically for "freeze distilling", the traditional method of producing the drink.In colonial New Jersey, applejack was used as currency to pay road construction crews during the colonial period, leading to the slang name \'Jersey Lightning\'. The oldest licensed applejack distillery in the United States, Laird & Company of Scobeyville, New Jersey, was until recently the country\'s only remaining producer of applejack.Because freeze distillation is a low-infrastructure method of production compared to evaporative distillation, and doesn\'t, for example, require burning firewood to create heat, hard cider and applejack were historically easy to produce, though more expensive than grain alcohol, and hence were important drinks in the colonial era and the early years of the United States, particularly in cold northern areas without access to clean water.Applejack was historically made by concentrating cider through the traditional method of freeze distillation: The alcoholic fruit beer produced after the fall harvest was left outside during the winter. Periodically the frozen chunks of ice which had formed were removed, thus concentrating the unfrozen alcohol in the remaining liquid. Starting with the fermented juice, with an alcohol content of less than ten percent, the concentrated result can contain 25-40% alcohol.When commercial production began, applejack was also starting to be produced through evaporative distillation. Modern commercially produced applejack is no longer produced by jacking but rather by blending apple brandy and neutral spirits.',
    },
    {
      ingredientName: "Gin",
      containsAlcohol: true,
      description:
        "Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries (Juniperus communis). Gin is one of the broadest categories of spirits, all of various origins, styles, and flavour profiles, that revolve around juniper as a common ingredient.From its earliest origins in the Middle Ages, the drink has evolved from a herbal medicine to an object of commerce in the spirits industry. Gin emerged in England after the introduction of the jenever, a Dutch liquor which originally had been a medicine. Although this development had been taking place since early 17th century, gin became widespread after the William of Orange-led 1688 Glorious Revolution and subsequent import restrictions on French brandy.Gin today is produced in subtly different ways, from a wide range of herbal ingredients, giving rise to a number of distinct styles and brands. After juniper, gin tends to be flavoured with botanical/herbal, spice, floral or fruit-flavours or often a combination. It is most commonly consumed mixed with tonic water. Gin is also often used as a base spirit to produce flavoured gin-based liqueurs such as, for example, Sloe gin, traditionally by the addition of fruit, flavourings and sugar.",
    },
    {
      ingredientName: "Dark rum",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Sweet Vermouth",
      containsAlcohol: true,
      description:
        "Vermouth (/vərˈmuːθ/ ver-MOOTH; also UK: /ˈvɜːrməθ/;) is an aromatized, fortified wine flavored with various botanicals (roots, barks, flowers, seeds, herbs, and spices).The modern versions of the beverage were first produced in the mid to late 18th century in Turin, Italy. While vermouth was traditionally used for medicinal purposes, its true claim to fame is as an aperitif, with fashionable cafes in Turin serving it to guests around the clock. However, in the late 19th century it became popular with bartenders as a key ingredient in many classic cocktails that have survived to date, such as the Martini, the Manhattan, the Rob Roy, and the Negroni. In addition to being consumed as an aperitif or cocktail ingredient, vermouth is sometimes used as an alternative white wine in cooking.Historically, there have been two main types of vermouth: sweet and dry. Responding to demand and competition, vermouth manufacturers have created additional styles, including extra-dry white, sweet white (bianco), red, amber (ambre or rosso), and rosé. Vermouth is produced by starting with a base of a neutral grape wine or unfermented wine must. Each manufacturer adds additional alcohol and a proprietary mixture of dry ingredients, consisting of aromatic herbs, roots, and barks, to the base wine, base wine plus spirit or spirit only – which may be redistilled before adding to the wine or unfermented wine must. After the wine is aromatized and fortified, the vermouth is sweetened with either cane sugar or caramelized sugar, depending on the style. Italian and French companies produce most of the vermouth consumed throughout the world, although the United States and the United Kingdom are also producers.",
    },
    {
      ingredientName: "Strawberry schnapps",
      containsAlcohol: true,
      description:
        'Schnapps (/ʃnɑːps/ or /ʃnæps/) or schnaps is a type of alcoholic beverage that may take several forms, including distilled fruit brandies, herbal liqueurs, infusions, and "flavored liqueurs" made by adding fruit syrups, spices, or artificial flavorings to neutral grain spirits.\n\nThe English loanword "schnapps" is derived from the colloquial German word Schnaps [ʃnaps] (About this sound listen) (plural: Schnäpse) which is used in reference to spirit drinks. The word Schnaps stems from Low German language and is related to the German term "schnappen", which refers to the fact that the spirit or liquor drink is usually consumed in a quick slug from a small glass (i.e., a shot glass). In British English, a corresponding term is "dram" [of liquor].',
    },
    {
      ingredientName: "Scotch",
      containsAlcohol: true,
      description:
        'Scotch whisky, often simply called Scotch, is malt whisky or grain whisky made in Scotland. Scotch whisky must be made in a manner specified by law.All Scotch whisky was originally made from malted barley. Commercial distilleries began introducing whisky made from wheat and rye in the late 18th century.[2] Scotch whisky is divided into five distinct categories: single malt Scotch whisky, single grain Scotch whisky, blended malt Scotch whisky (formerly called "vatted malt" or "pure malt"), blended grain Scotch whisky, and blended Scotch whisky.All Scotch whisky must be aged in oak barrels for at least three years. Any age statement on a bottle of Scotch whisky, expressed in numerical form, must reflect the age of the youngest whisky used to produce that product. A whisky with an age statement is known as guaranteed-age whisky.The first written mention of Scotch whisky is in the Exchequer Rolls of Scotland, 1495. A friar named John Cor was the distiller at Lindores Abbey in the Kingdom of Fife.Many Scotch whisky drinkers will refer to a unit for drinking as a dram.',
    },
    {
      ingredientName: "Apricot brandy",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Triple sec",
      containsAlcohol: true,
      description:
        'Triple sec, originally Curaçao triple sec, is a variety of Curaçao liqueur, an orange-flavoured liqueur made from the dried peels of bitter and/or sweet oranges.Triple sec may be consumed neat as a digestif or on the rocks, but it is more often used as an ingredient in a variety of cocktails, such as sangria, margarita, Kamikaze, White Lady, Long Island Iced Tea, Sidecar, Skittle Bomb, Corpse Reviver #2, and Cosmopolitan.The Combier distillery claims that triple sec was invented between 1834 and 1848 by Jean-Baptiste Combier in Saumur, France. However, Combier was more famous for its élixir Combier, which contained orange and many other flavorings.Cointreau, on the other hand, claims that its orange liqueur was formulated in 1849.Triple sec was widely known by 1878: at the Exposition Universelle of 1878 in Paris, several distillers were offering "Curaçao [sic] triple sec", as well as "Curaçao doux".',
    },
    {
      ingredientName: "Southern Comfort",
      containsAlcohol: true,
      description:
        "Southern Comfort (often abbreviated SoCo) is an American liqueur made from neutral spirits with fruit, spice and whiskey flavoring. The brand was originally created by bartender Martin Wilkes Heron in New Orleans in 1874. Since March 1, 2016 the brand has been owned by the Sazerac Company after being sold by the Brown-Forman Group. Sazerac has announced that Southern Comfort's formula will be changed in 2017 to include whiskey as an ingredient, as it was until some time before the brand was sold to Brown-Forman in 1979.In the US, Southern Comfort is available as 100 US proof (50% ABV), 70 US proof (35% ABV) and 42 US proof (21% ABV). Southern Comfort Special Reserve, found in duty-free shops, is a blend of Southern Comfort and bourbon, and is 80 US proof (40% ABV). Southern Comfort Lime, released in summer 2010, is 55 proof (27.5% ABV) (UK 2013 20% ABV) and Southern Comfort Bold Black Cherry, released in summer 2012, is 70 proof (35% ABV).Southern Comfort also produces ready-to-pour cocktails available in the US including Southern Comfort Sweet Tea, Southern Comfort Hurricane and Southern Comfort Lemonade, which are all 30 proof (15% ABV).Southern Comfort has expanded over the years and has several product offerings globally. Outside the US, Southern Comfort produces single-serve cocktails, including Southern Comfort Lemonade and Lime in the UK and Southern Comfort and Cola in Australia.",
    },
    {
      ingredientName: "Orange bitters",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Brandy",
      containsAlcohol: true,
      description:
        "Brandy is a spirit produced by distilling wine. Brandy generally contains 35-60% alcohol by volume (70-120 US proof) and is typically taken as an after-dinner drink. Some brandies are aged in wooden casks, some are coloured with caramel colouring to imitate the effect of aging, and some brandies are produced using a combination of both aging and colouring.In broader sense, the term brandy also denotes liquors obtained from distillation of pomace (pomace brandy) or mash or wine of any other fruit (fruit brandy). These products are also named eaux-de-vie.Varieties of wine brandy can be found across the winemaking world. Among the most renowned are Cognac and Armagnac from southwestern France.The origins of brandy were clearly tied to the development of distillation. While the process was known in classical times, it wasn't used for significant beverage production until the 15th century.Initially wine was distilled as a preservation method and as a way to make it easier for merchants to transport. It is also thought that wine was originally distilled to lessen the tax which was assessed by volume. The intent was to add the water removed by distillation back to the brandy shortly before consumption. It was discovered that after having been stored in wooden casks, the resulting product had improved over the original distilled spirit. In addition to removing water, the distillation process led to the formation and decomposition of numerous aromatic compounds, fundamentally altering the composition of the distillate from its source. Non-volatile substances such as pigments, sugars, and salts remained behind in the still. As a result, the taste of the distillate was often quite unlike that of the original source.As described in the 1728 edition of Cyclopaedia, the following method was used to distill brandy:A cucurbit was filled half full of the liquor from which brandy was to be drawn and then raised with a little fire until about one sixth part was distilled, or until that which falls into the receiver was entirely flammable. This liquor, distilled only once, was called spirit of wine or brandy. Purified by another distillation (or several more), this was then called spirit of wine rectified. The second distillation was made in balneo mariae and in a glass cucurbit, and the liquor was distilled to about one half the quantity. This was further rectified—as long as the operator thought necessary—to produce brandy.To shorten these several distillations, which were long and troublesome, a chemical instrument was invented that reduced them to a single distillation. To test the purity of the rectified spirit of wine, a portion was ignited. If the entire contents were consumed by a fire without leaving any impurities behind, then the liquor was good. Another, better test involved putting a little gunpowder in the bottom of the spirit. If the gunpowder could ignite after the spirit was consumed by fire, then the liquor was good.As most brandies have been distilled from grapes, the regions of the world producing excellent brandies have roughly paralleled those areas producing grapes for viniculture. At the end of the 19th century, the western European markets, including by extension their overseas empires, were dominated by French and Spanish brandies and eastern Europe was dominated by brandies from the Black Sea region, including Bulgaria, the Crimea, and Georgia. In 1884, David Sarajishvili founded his brandy factory in Tbilisi, Georgia, a crossroads for Turkish, Central Asian, and Persian trade routes and a part of the Russian Empire at the time. Armenian and Georgian brandies, called cognacs in the era, were considered some of the best in the world and often beat their French competitors at the International Expositions in Paris and Brussels in the early 1900s.[citation needed] The storehouses of the Romanov Court in St. Petersburg were regarded as the largest collections of cognacs and wines in the world with much of it from the Transcaucasus region of Georgia. During the October Revolution of 1917, upon the storming of the Winter Palace, the Bolshevik Revolution actually paused for a week or so as the participants gorged on the substantial stores of cognac and wines. The Russian market was always a huge brandy-consuming region in which home-grown varieties were common but much of it was imported. The patterns of bottles followed that of the western European norm. Throughout the Soviet era, the production of brandy was a source of pride for the communist regime as they continued to produce some excellent varieties, especially the most famous Jubilee Brandies of 1967, 1977, and 1987.[citation needed] Remaining bottles of these productions are highly sought after, not simply for their quality, but for their historical significance.",
    },
    {
      ingredientName: "Lemon vodka",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Blended whiskey",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Dry Vermouth",
      containsAlcohol: true,
      description:
        "Vermouth (/vərˈmuːθ/ ver-MOOTH; also UK: /ˈvɜːrməθ/;) is an aromatized, fortified wine flavored with various botanicals (roots, barks, flowers, seeds, herbs, and spices).The modern versions of the beverage were first produced in the mid to late 18th century in Turin, Italy. While vermouth was traditionally used for medicinal purposes, its true claim to fame is as an aperitif, with fashionable cafes in Turin serving it to guests around the clock. However, in the late 19th century it became popular with bartenders as a key ingredient in many classic cocktails that have survived to date, such as the Martini, the Manhattan, the Rob Roy, and the Negroni. In addition to being consumed as an aperitif or cocktail ingredient, vermouth is sometimes used as an alternative white wine in cooking.Historically, there have been two main types of vermouth: sweet and dry. Responding to demand and competition, vermouth manufacturers have created additional styles, including extra-dry white, sweet white (bianco), red, amber (ambre or rosso), and rosé. Vermouth is produced by starting with a base of a neutral grape wine or unfermented wine must. Each manufacturer adds additional alcohol and a proprietary mixture of dry ingredients, consisting of aromatic herbs, roots, and barks, to the base wine, base wine plus spirit or spirit only – which may be redistilled before adding to the wine or unfermented wine must. After the wine is aromatized and fortified, the vermouth is sweetened with either cane sugar or caramelized sugar, depending on the style. Italian and French companies produce most of the vermouth consumed throughout the world, although the United States and the United Kingdom are also producers.",
    },
    {
      ingredientName: "Amaretto",
      containsAlcohol: true,
      description:
        'Amaretto (Italian for "a little bitter") is a sweet, almond-flavoured, Italian liqueur associated with Saronno, Italy. Various commercial brands are made from a base of apricot pits, almonds, or both.When served as a beverage, amaretto can be drunk by itself, used as an ingredient to create several popular mixed drinks, or added to coffee. Amaretto is also commonly used in culinary applications.The name amaretto originated as a diminutive of the Italian word amaro, meaning "bitter", which references the distinctive flavour lent by the mandorla amara (the bitter almond) or by the drupe kernel. However, the bitterness of amaretto tends to be mild, and sweeteners—and sometimes sweet almonds—enhance the flavour in the final products. Thus one can interpret the liqueur\'s name as a description of the taste as "a little bitter". Cyanide is processed out of the almond preparation prior to its use.Conflation of amaro ("bitter") and amore ("love") has led to associations with romance.One should not confuse amaretto with amaro, a different family of Italian liqueurs that, while also sweetened, have a stronger bitter flavour derived from herbs.',
    },
    {
      ingredientName: "Tea",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Champagne",
      containsAlcohol: true,
      description:
        "Champagne (French: [ʃɑ̃.paɲ]) is a sparkling wine and type of alcoholic drink produced from grapes grown in the Champagne region of France following rules that demand, among other things, secondary fermentation of the wine in the bottle to create carbonation, specific vineyard practices, sourcing of grapes exclusively from specific parcels in the Champagne appellation and specific pressing regimes unique to the region.[1] It contains the drug alcohol (also known formally as ethanol), and is used recreationally. Some use the term Champagne as a generic term for sparkling wine, but in many countries, it is illegal to label any product Champagne unless it both comes from the Champagne region and is produced under the rules of the appellation.The primary grapes used in the production of Champagne are black Pinot noir and Pinot Meunier but also white Chardonnay. Champagne appellation law only allows grapes grown according to appellation rules in specifically designated plots within the appellation to be used in the production of champagne.Champagne became associated with royalty in the 17th, 18th, and 19th centuries. The leading manufacturers made efforts to associate their Champagnes with nobility and royalty through advertising and packaging, which led to popularity among the emerging middle class.",
    },
    {
      ingredientName: "Coffee liqueur",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Bourbon",
      containsAlcohol: true,
      description:
        'Bourbon whiskey /bɜːrbən/ is a type of American whiskey: a barrel-aged distilled spirit made primarily from corn. The name is derived from the French Bourbon dynasty, although it is unclear precisely what inspired the whiskey\'s name (contenders include Bourbon County in Kentucky and Bourbon Street in New Orleans). Bourbon has been distilled since the 18th century. The use of the term "bourbon" for the whiskey has been traced to the 1820s, and the term began to be used consistently in Kentucky in the 1870s. While bourbon may be made anywhere in the United States, it is strongly associated with the American South, and with Kentucky in particular. As of 2014, the distillers\' wholesale market revenue for bourbon sold within the U.S. is about $2.7 billion, and bourbon makes up about two-thirds of the $1.6 billion of U.S. exports of distilled spirits.The origin of bourbon is not well documented. There are many conflicting legends and claims, some more credible than others. For example, the invention of bourbon is often attributed to Elijah Craig, a Baptist minister and distiller credited with many Kentucky firsts (e.g., fulling mill, paper mill, ropewalk) who is also said to have been the first to age the product in charred oak casks, a process which gives bourbon its reddish color and distinctive taste. Across the county line in Bourbon County, an early distiller named Jacob Spears is credited with being the first to label his product as Bourbon whiskey. Spears\' home, Stone Castle, warehouse and spring house survive; one can drive by the Spears\' home on Clay-Kiser Road.Although still popular and often repeated, the Craig legend is apocryphal. Similarly, the Spears story is a local favorite, rarely repeated outside the county. There likely was no single "inventor" of bourbon, which developed into its present form only in the late 19th century. Essentially any type of grain can be used to make whiskey, and the practice of aging whiskey and charring the barrels for better flavor had also been known in Europe for centuries. The late date of the Bourbon County etymology has led Louisville historian Michael Veach to dispute its authenticity. He proposes that the whiskey was named after Bourbon Street in New Orleans, a major port where shipments of Kentucky whiskey sold well as a cheaper alternative to French cognac.Distilling probably was brought to present-day Kentucky in the late 18th century by Scots, Scots-Irish, and other settlers (including English, Irish, Welsh, German and French) who began to farm the area in earnest. The spirit they made evolved, and became known as bourbon in the early 19th century due to its historical association with the geographic area known as Old Bourbon (this consisted of the original Bourbon County of Virginia as organized in 1785, a region that included much of today\'s Eastern Kentucky – including 34 of today\'s counties in Kentucky). This area included the current Bourbon County of Kentucky, which became a county of Kentucky when Kentucky was separated from Virginia as a new state in 1792.When American pioneers pushed west of the Allegheny Mountains following the American Revolution, the first counties they founded covered vast regions. One of these original, huge counties was Bourbon, established in 1785 and named after the French royal family. While this vast county was being carved into many smaller ones, early in the 19th century, many people continued to call the region Old Bourbon. Located within Old Bourbon was the principal port on the Ohio River, Maysville, Kentucky, from which whiskey and other products were shipped. "Old Bourbon" was stencilled on the barrels to indicate their port of origin. Old Bourbon whiskey was different because it was the first corn whiskey most people had ever tasted. In time, bourbon became the name for any corn-based whiskey.Although many distilleries operated in Bourbon County historically, there were no distilleries operating there between 1919, when Prohibition began in Kentucky, and late 2014, when a small distillery opened – a period of 95 years.A refinement often dubiously credited to James C. Crow was the sour mash process, by which each new fermentation is conditioned with some amount of spent mash. Spent mash is also known as spent beer, distillers\' spent grain, stillage, and slop or feed mash, so named because it is used as animal feed. The acid introduced by using the sour mash controls the growth of bacteria that could taint the whiskey and creates a proper pH balance for the yeast to work.A concurrent resolution adopted by the United States Congress in 1964 declared bourbon to be a "distinctive product of the United States" and asked "the appropriate agencies of the United States Government... [to] take appropriate action to prohibit importation into the United States of whiskey designated as \'Bourbon Whiskey.\'" Federal regulation now defines "bourbon whiskey" to only include "bourbon" produced in the United States.In recent years, bourbon and Tennessee whiskey (which is sometimes regarded as a different type of spirit but which generally meets the legal requirements for being called bourbon) have enjoyed significant growth and popularity. The Distilled Spirits Council of the United States, the industry trade group, tracks sales of bourbon and Tennessee whiskey together.According to the Distilled Spirits Council, during 2009–14, the volume of 9-liter cases of whiskey increased by 28.5% overall. Higher-end bourbon and whiskeys experienced the greatest growth: during 2009–14 the volume of the value segment increased by 12.1%, premium by 25.8%, high-end premium by 27.8% and super-premium by 123.8%. Gross supplier revenues (including federal excise tax) for U.S. bourbon and Tennessee whiskey increased by 46.7% over the 2009–14 period, with the greatest growth coming from high-end products (18.7% growth for value, 33.6% for premium, 44.5% for high-end premium, and 137.2% for super-premium).[4] In 2014, more than 19 million nine-liter cases of bourbon and Tennessee whiskey were sold in the U.S., generating almost $2.7 billion in wholesale distillery revenue. U.S. exports of bourbon whiskey surpassed $1 billion for the first time in 2013; distillers hailed the rise of a "golden age of Kentucky bourbon" and predicted further growth. In 2014, it was estimated that U.S. bourbon whiskey exports surpassed $1 billion (making up the majority of the U.S. total of $1.6 billion in spirits exports). Major export markets for U.S. spirits are, in descending order: Canada, the United Kingdom, Germany, Australia and France. The largest percentage increases in U.S. exports were, in descending order: Brazil, the Dominican Republic, Bahamas, Israel and United Arab Emirates. Key elements of growth in the markets showing the largest increases have been changes of law, trade agreements, and reductions of tariffs, as well as increased consumer demand for premium-category spirits.',
    },
    {
      ingredientName: "Tequila",
      containsAlcohol: true,
      description:
        "Tequila (Spanish pronunciation: [teˈkila] (About this sound listen)) is a regionally specific distilled beverage and type of alcoholic drink made from the blue agave plant, primarily in the area surrounding the city of Tequila, 65 km (40 mi) northwest of Guadalajara, and in the highlands (Los Altos) of the central western Mexican state of Jalisco. Aside from differences in region of origin, tequila is a type of mezcal (and the regions of production of the two drinks are overlapping). The distinction in the method of production is that tequila must use only blue agave plants rather than any type of agave. Tequila is commonly served neat in Mexico and as a shot with salt and lime across the rest of the world.The red volcanic soil in the region around the city of Tequila is particularly well suited to the growing of the blue agave, and more than 300 million of the plants are harvested there each year. Agave grows differently depending on the region. Blue agaves grown in the highlands Los Altos region are larger in size and sweeter in aroma and taste. Agaves harvested in the lowlands, on the other hand, have a more herbaceous fragrance and flavor.Mexican laws state that tequila can only be produced in the state of Jalisco and limited municipalities in the states of Guanajuato, Michoacán, Nayarit, and Tamaulipas. Tequila is recognized as a Mexican designation of origin product in more than 40 countries. It is protected through NAFTA in Canada and the United States,[6] through bilateral agreements with individual countries such as Japan and Israel, and has been a protected designation of origin product in the constituent countries of the European Union since 1997.Tequila contains alcohol (also known formally as ethanol) and is most often made at a 38% alcohol content (76 U.S. proof) for domestic consumption, but can be produced between 31 and 55% alcohol content (62 and 110 U.S. proof). Per U.S law, tequila must contain at least 40% alcohol (80 U.S. proof) to be sold in the United States.",
    },
    {
      ingredientName: "Vodka",
      containsAlcohol: true,
      description:
        'Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally, vodka is made by the distillation of fermented cereal grains or potatoes, though some modern brands use other substances, such as fruits or sugar.Since the 1890s, the standard Polish, Russian, Belarusian, Ukrainian, Estonian, Latvian, Lithuanian and Czech vodkas are 40% alcohol by volume ABV (80 US proof), a percentage that is widely misattributed to Dmitri Mendeleev. The European Union has established a minimum of 37.5% ABV for any "European vodka" to be named as such. Products sold as "vodka" in the United States must have a minimum alcohol content of 40%. Even with these loose restrictions, most vodka sold contains 40% ABV. For homemade vodkas and distilled beverages referred to as "moonshine", see moonshine by country.Vodka is traditionally drunk neat (not mixed with any water, ice, or other mixer), though it is often served chilled in the vodka belt countries (Belarus, Estonia, Finland, Iceland, Latvia, Lithuania, Norway, Poland, Russia, Sweden, Ukraine). It is also commonly used in cocktails and mixed drinks, such as the vodka martini, Cosmopolitan, vodka tonic, Screwdriver, Greyhound, Black or White Russian, Moscow Mule, and Bloody Mary.Scholars debate the beginnings of vodka. It is a contentious issue because very little historical material is available. For many centuries, beverages differed significantly compared to the vodka of today, as the spirit at that time had a different flavor, color and smell, and was originally used as medicine. It contained little alcohol, an estimated maximum of about 14%, as only this amount can be attained by natural fermentation. The still, allowing for distillation ("burning of wine"), increased purity, and increased alcohol content, was invented in the 8th century.A common property of the vodkas produced in the United States and Europe is the extensive use of filtration prior to any additional processing including the addition of flavorants. Filtering is sometimes done in the still during distillation, as well as afterwards, where the distilled vodka is filtered through activated charcoal and other media to absorb trace amounts of substances that alter or impart off-flavors to the vodka. However, this is not the case in the traditional vodka-producing nations, so many distillers from these countries prefer to use very accurate distillation but minimal filtering, thus preserving the unique flavors and characteristics of their products.The master distiller is in charge of distilling the vodka and directing its filtration, which includes the removal of the "fore-shots", "heads" and "tails". These components of the distillate contain flavor compounds such as ethyl acetate and ethyl lactate (heads) as well as the fusel oils (tails) that impact the usually desired clean taste of vodka. Through numerous rounds of distillation, or the use of a fractioning still, the taste is modified and clarity is increased. In contrast, distillery process for liquors such as whiskey, rum, and baijiu allow portions of the "heads" and "tails" to remain, giving them their unique flavors.Repeated distillation of vodka will make its ethanol level much higher than is acceptable to most end users, whether legislation determines strength limits or not. Depending on the distillation method and the technique of the stillmaster, the final filtered and distilled vodka may have as much as 95–96% ethanol. As such, most vodka is diluted with water prior to bottling.Polish distilleries make a very pure (96%, 192 proof, formerly also 98%) rectified spirit (Polish language: spirytus rektyfikowany). Technically a form of vodka, it is sold in liquor stores rather than pharmacies. Similarly, the German market often carries German, Hungarian, Polish, and Ukrainian-made varieties of vodka of 90 to 95% ABV. A Bulgarian vodka, Balkan 176°, has an 88% alcohol content. Everclear, an American brand, is also sold at 95% ABV.',
    },
    {
      ingredientName: "Añejo rum",
      containsAlcohol: true,
      description:
        'Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.The majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Scotland, Austria, Spain, Australia, New Zealand, Fiji, the Philippines, Reunion Island, Mauritius, South Africa, Taiwan, Thailand, Japan, the United States, and Canada.Rums are produced in various grades. Light rums are commonly used in cocktails, whereas "golden" and "dark" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.Rum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This beverage has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).',
    },
    {
      ingredientName: "Bitters",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Sugar",
      containsAlcohol: false,
      description:
        "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food.",
    },
    {
      ingredientName: "Kahlua",
      containsAlcohol: true,
      description:
        'Kahlúa is a coffee-flavored liqueur from Mexico. The drink contains rum, sugar, vanilla bean, and Arabica coffee.Pedro Domecq began producing Kahlúa in 1936. It was named Kahlúa, meaning "House of the Acolhua people" in the Veracruz Nahuatl language spoken before the Spanish Conquest. Kahlúa was Hispanicized as Ulúa, forming the name of the modern San Juan de Ulúa fortress.The company merged in 1994 with Allied Lyons to become Allied Domecq. In turn, that company was partially acquired in 2005 by Pernod Ricard, the largest spirits distributor in the world since its merger with the Swedish Vin & Sprit in March 2008.Since 2004, the alcohol content of Kahlúa is 20.0%; earlier versions had 26.5%. In 2002, a more expensive, high-end product called "Kahlúa Especial" became available in the United States, Canada and Australia after previously being offered only in duty-free markets. Made with premium Arabica coffee beans grown in Veracruz, Mexico, Kahlúa Especial has an alcohol content of 36%, has a lower viscosity, and is less sweet than the regular version.',
    },
    {
      ingredientName: "demerara Sugar",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Dubonnet Rouge",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Watermelon",
      containsAlcohol: false,
      description:
        "Watermelon (Citrullus lanatus) is a plant species in the family Cucurbitaceae, a vine-like flowering plant originally domesticated in West Africa. It is a highly cultivated fruit worldwide, having more than 1,000 varieties.Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. There is evidence from seeds in Pharaoh tombs of watermelon cultivation in Ancient Egypt. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It is commonly consumed as a juice or as an ingredient in mixed beverages.",
    },
    {
      ingredientName: "Lime juice",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Irish whiskey",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Apple brandy",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Carbonated water",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Cherry brandy",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Creme de Cacao",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Grenadine",
      containsAlcohol: false,
      description:
        "Grenadine is a commonly used, non-alcoholic bar syrup, characterized by a flavour that is both tart and sweet, and by a deep red colour. It is popular as an ingredient in cocktails, both for its flavour and to give a reddish/pink tint to mixed drinks.The name grenadine originated from the French word grenade which means pomegranate, with pomme meaning apple and granate derived from the Italian word for seeds.Grenadine was originally prepared from pomegranate juice, sugar, and water.As grenadine is subject to minimal regulation, its basic flavour profile can alternatively be obtained from a mixture of blackcurrant juice and other fruit juices with the blackcurrant flavour dominating.To reduce production costs, manufacturers have widely replaced fruit bases with artificial ingredients. The Mott's brand \"Rose's\" is by far the most common brand of grenadine sold in the United States,[3] and is formulated from (in order of concentration): high fructose corn syrup, water, citric acid, sodium citrate, sodium benzoate, FD&C Red #40, natural and artificial flavours and FD&C Blue #1. In Europe, Bols still manufactures grenadine with pomegranate.",
    },
    {
      ingredientName: "Port",
      containsAlcohol: true,
      description:
        'Port wine (also known as vinho do Porto, Portuguese pronunciation: [ˌviɲuduˈpoɾtu], Porto, and usually simply port) is a Portuguese fortified wine produced exclusively in the Douro Valley in the northern provinces of Portugal. It is typically a sweet, red wine, often served as a dessert wine, though it also comes in dry, semi-dry, and white varieties. Fortified wines in the style of port are also produced outside Portugal, most notably in Australia, France, South Africa, Canada, India, Argentina, and the United States. Under European Union Protected Designation of Origin guidelines, only the product from Portugal may be labelled as port or Porto. In the United States, wines labelled "port" may come from anywhere in the world, while the names "Oporto", "Porto", and "Vinho do Porto" have been recognised as foreign, non-generic names for Port wines originating in Portugal.',
    },
    {
      ingredientName: "Coffee brandy",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Red wine",
      containsAlcohol: true,
      description:
        "Wine (from Latin vinum) is an alcoholic beverage made from grapes, generally Vitis vinifera, fermented without the addition of sugars, acids, enzymes, water, or other nutrients.Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide. Different varieties of grapes and strains of yeasts produce different styles of wine. These variations result from the complex interactions between the biochemical development of the grape, the reactions involved in fermentation, the terroir, and the production process. Many countries enact legal appellations intended to define styles and qualities of wine. These typically restrict the geographical origin and permitted varieties of grapes, as well as other aspects of wine production. Wines not made from grapes include rice wine and fruit wines such as plum, cherry, pomegranate and elderberry.Wine has been produced for thousands of years. The earliest known traces of wine are from China (c. 7000 BC), Georgia (c. 6000 BC), Iran (c. 5000 BC), and Sicily (c. 4000 BC). The earliest known winery is the 6,100-year-old Areni-1 winery in Armenia. Wine reached the Balkans by 4500 BC and was consumed and celebrated in ancient Greece, Thrace and Rome. Throughout history, wine has been consumed for its intoxicating effects.Wine has long played an important role in religion. Red wine was associated with blood by the ancient Egyptians and was used by both the Greek cult of Dionysus and the Romans in their Bacchanalia; Judaism also incorporates it in the Kiddush and Christianity in the Eucharist.",
    },
    {
      ingredientName: "Rum",
      containsAlcohol: true,
      description:
        'Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.The majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Scotland, Austria, Spain, Australia, New Zealand, Fiji, the Philippines, India, Reunion Island, Mauritius, South Africa, Taiwan, Thailand, Japan, the United States, and Canada.Rums are produced in various grades. Light rums are commonly used in cocktails, whereas "golden" and "dark" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.Rum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This beverage has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).The precursors to rum date back to antiquity. Development of fermented drinks produced from sugarcane juice is believed to have first occurred either in ancient India or in China, and to have spread from there. An example of such an early drink is brum. Produced by the Malay people, brum dates back thousands of years. Marco Polo also recorded a 14th-century account of a "very good wine of sugar" that was offered to him in the area that became modern-day Iran.The first distillation of rum took place on the sugarcane plantations of the Caribbean in the 17th century. Plantation slaves first discovered molasses, a byproduct of the sugar refining process, could be fermented into alcohol. Later, distillation of these alcoholic byproducts concentrated the alcohol and removed impurities, producing the first true rums. Tradition suggests rum first originated on the island of Barbados. However, in the decade of the 1620s, rum production was recorded in Brazil. A liquid identified as rum has been found in a tin bottle found on the Swedish warship Vasa, which sank in 1628.A 1651 document from Barbados stated, "The chief fuddling they make in the island is Rumbullion, alias Kill-Divil, and thi is made of sugar canes distilled, a hot, hellish, and terrible liquor."',
    },
    {
      ingredientName: "Grapefruit juice",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Ricard",
      containsAlcohol: true,
      description:
        "Ricard is a pastis, an anise and licorice-flavored aperitif, created by Paul Ricard in 1932.The Ricard brand is the global leader in anise based alcohols, with more than 40 million litres of Ricard sold each year. Its main competitor is Pastis 51, which currently belongs to the Pernod Ricard group, and is produced and distributed by the Pernod Company.Ricard is a French public company founded in 1932 in Marseille, France, by Paul Ricard. It currently belongs to the Pernod Ricard group. Ricard is the first spirit brand in France regarding the volumes sold or turnover.",
    },
    {
      ingredientName: "Sherry",
      containsAlcohol: true,
      description:
        'Sherry (English: /ˈʃɛri/, Spanish: Jerez [xeˈɾeθ] or [xeˈɾes]) is a fortified wine made from white grapes that are grown near the city of Jerez de la Frontera in Andalusia, Spain. Sherry is produced in a variety of styles made primarily from the Palomino grape, ranging from light versions similar to white table wines, such as Manzanilla and Fino, to darker and heavier versions that have been allowed to oxidise as they age in barrel, such as Amontillado and Oloroso. Sweet dessert wines are also made from Pedro Ximenez or Moscatel grapes, and are sometimes blended with Palomino-based Sherries.The word "Sherry" is an anglicisation of Xeres (Jerez). Sherry was previously known as sack, from the Spanish saca, meaning "extraction" from the solera. In Europe, "Sherry" has protected designation of origin status, and under Spanish law, all wine labelled as "Sherry" must legally come from the Sherry Triangle, an area in the province of Cádiz between Jerez de la Frontera, Sanlúcar de Barrameda, and El Puerto de Santa María. In 1933 the Jerez Denominación de Origen was the first Spanish denominación to be officially recognised in this way, officially named D.O. Jerez-Xeres-Sherry and sharing the same governing council as D.O. Manzanilla Sanlúcar de Barrameda.After fermentation is complete, the base wines are fortified with grape spirit in order to increase their final alcohol content. Wines classified as suitable for aging as Fino and Manzanilla are fortified until they reach a total alcohol content of 15.5 per cent by volume. As they age in barrel, they develop a layer of flor—a yeast-like growth that helps protect the wine from excessive oxidation. Those wines that are classified to undergo aging as Oloroso are fortified to reach an alcohol content of at least 17 per cent. They do not develop flor and so oxidise slightly as they age, giving them a darker colour. Because the fortification takes place after fermentation, most sherries are initially dry, with any sweetness being added later. In contrast, port wine is fortified halfway through its fermentation, which stops the process so that not all of the sugar is turned into alcohol.Wines from different years are aged and blended using a solera system before bottling, so that bottles of sherry will not usually carry a specific vintage year and can contain a small proportion of very old wine. Sherry is regarded by many wine writers as "underappreciated" and a "neglected wine treasure".',
    },
    {
      ingredientName: "Cognac",
      containsAlcohol: true,
      description:
        'Cognac (/ˈkɒnjæk/ KON-yak or /ˈkoʊnjæk/ KOHN-yak; French pronunciation: ​[kɔ.ɲak]) is a variety of brandy named after the town of Cognac, France. It is produced in the surrounding wine-growing region in the departments of Charente and Charente-Maritime.Cognac production falls under French Appellation d\'origine contrôlée designation, with production methods and naming required to meet certain legal requirements. Among the specified grapes Ugni blanc, known locally as Saint-Emilion, is most widely used. The brandy must be twice distilled in copper pot stills and aged at least two years in French oak barrels from Limousin or Tronçais. Cognac matures in the same way as whiskies and wine barrel age, and most cognacs spend considerably longer "on the wood" than the minimum legal requirement.Cognac is a type of brandy and, after the distillation and during the aging process, is also called eau de vie. It is produced by doubly distilling white wines produced in any of the designated growing regions.',
    },
    {
      ingredientName: "Sloe gin",
      containsAlcohol: true,
      description:
        "Sloe gin is a red liqueur made with gin and sloe (blackthorn) drupes, which are a small fruit relative of the plum. Sloe gin has an alcohol content between 15 and 30 percent by volume. However, the European Union has established a minimum of 25% ABV for sloe gin to be named as such. The traditional way of making sloe gin is to soak the sloes in gin. Sugar is required to ensure the sloe juice is extracted from the fruit.Many commercial sloe gins today are made by flavouring less expensive neutral grain spirits, although some manufacturers still use the traditional method. Currently, Spirit Works Distillery out of Sebastopol in Sonoma County, California is the only traditional producer of Sloe Gin in the US. Other U.S. distilleries use close relatives of the sloe, such as the Aronia berry or beach plum, to produce a domestic version of sloe gin. ",
    },
    {
      ingredientName: "Apple juice",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Pineapple juice",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Lemon juice",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Sugar syrup",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Milk",
      containsAlcohol: false,
      description:
        "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals (including humans who breastfeed) before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to its young and can reduce the risk of many diseases. It contains many other nutrients including protein and lactose.As an agricultural product, milk is extracted from non-human mammals during or soon after pregnancy. Dairy farms produced about 730 million tonnes of milk in 2011, from 260 million dairy cows. India is the world's largest producer of milk, and is the leading exporter of skimmed milk powder, yet it exports few other milk products. The ever increasing rise in domestic demand for dairy products and a large demand-supply gap could lead to India being a net importer of dairy products in the future. The United States, India, China and Brazil are the world's largest exporters of milk and milk products. China and Russia were the world's largest importers of milk and milk products until 2016 when both countries became self-sufficient, contributing to a worldwide glut of milk.Throughout the world, there are more than six billion consumers of milk and milk products. Over 750 million people live in dairy farming households.",
    },
    {
      ingredientName: "Strawberries",
      containsAlcohol: false,
      description:
        'The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.The garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, which was brought from Chile by Amédée-François Frézier in 1714. Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century.The strawberry is not, from a botanical point of view, a berry. Technically, it is an aggregate accessory fruit, meaning that the fleshy part is derived not from the plant\'s ovaries but from the receptacle that holds the ovaries.Each apparent "seed" (achene) on the outside of the fruit is actually one of the ovaries of the flower, with a seed inside it.',
    },
    {
      ingredientName: "Chocolate syrup",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Yoghurt",
      containsAlcohol: false,
      description:
        'Yogurt, yoghurt, or yoghourt (/ˈjoʊɡərt/ or /ˈjɒɡət/; from Turkish: yoğurt; other spellings listed below) is a food produced by bacterial fermentation of milk.[1] The bacteria used to make yogurt are known as "yogurt cultures". Fermentation of lactose by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tart flavor. Cow\'s milk is commonly available worldwide, and, as such, is the milk most commonly used to make yogurt. Milk from water buffalo, goats, ewes, mares, camels, and yaks is also used to produce yogurt where available locally. Milk used may be homogenized or not (milk distributed in many parts of the world is homogenized); both types may be used, with substantially different results.Yogurt is produced using a culture of Lactobacillus delbrueckii subsp. bulgaricus and Streptococcus thermophilus bacteria. In addition, other lactobacilli and bifidobacteria are also sometimes added during or after culturing yogurt. Some countries require yogurt to contain a certain amount of colony-forming units of bacteria; in China, for example, the requirement for the number of lactobacillus bacteria is at least 1 × 106 CFU per milliliter.To produce yogurt, milk is first heated, usually to about 85 °C (185 °F), to denature the milk proteins so that they do not form curds. After heating, the milk is allowed to cool to about 45 °C (113 °F). The bacterial culture is mixed in, and a temperature of 45 °C (113 °F) is maintained for four to twelve hours to allow fermentation.',
    },
    {
      ingredientName: "Mango",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Ginger",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Lime",
      containsAlcohol: false,
      description:
        'A lime (from French lime, from Arabic līma, from Persian līmū, "lemon") is a hybrid citrus fruit, which is typically round, lime green, 3–6 centimetres (1.2–2.4 in) in diameter, and contains acidic juice vesicles.There are several species of citrus trees whose fruits are called limes, including the Key lime (Citrus aurantifolia), Persian lime, kaffir lime, and desert lime. Limes are an excellent source of vitamin C, and are often used to accent the flavours of foods and beverages. They are grown year-round. Plants with fruit called "limes" have diverse genetic origins; limes do not form a monophyletic group.\r\n',
    },
    {
      ingredientName: "Cantaloupe",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Berries",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Grapes",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Kiwi",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Tomato juice",
      containsAlcohol: false,
      description:
        "Tomato juice is a juice made from tomatoes, usually used as a beverage, either plain or in cocktails such as a Bloody Mary or Michelada.In Canada, tomato juice is unconcentrated and pasteurized, made from fine tomato pulp from ripe and whole tomatoes. The stems and skins must be removed without adding water to the final juice product. It may also contain a sweetening agent, citric acid and salt.",
    },
    {
      ingredientName: "Cocoa powder",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Chocolate",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Heavy cream",
      containsAlcohol: false,
      description:
        'Cream is a dairy product composed of the higher-butterfat layer skimmed from the top of milk before homogenization. In un-homogenized milk, the fat, which is less dense, will eventually rise to the top. In the industrial production of cream, this process is accelerated by using centrifuges called "separators". In many countries, cream is sold in several grades depending on the total butterfat content. Cream can be dried to a powder for shipment to distant markets. Cream has high levels of saturated fat.Cream skimmed from milk may be called "sweet cream" to distinguish it from whey cream skimmed from whey, a by-product of cheese-making. Whey cream has a lower fat content and tastes more salty, tangy and "cheesy".[3] In many countries, cream is usually sold partially fermented: sour cream, crème fraîche, and so on.Cream has many culinary uses in sweet, bitter, salty and tangy dishes.Cream produced by cattle (particularly Jersey cattle) grazing on natural pasture often contains some natural carotenoid pigments derived from the plants they eat; this gives the cream a slight yellow tone, hence the name of the yellowish-white color, cream. This is also the origin of butter\'s yellow color. Cream from goat\'s milk, or from cows fed indoors on grain or grain-based pellets, is white.',
    },
    {
      ingredientName: "Galliano",
      containsAlcohol: true,
      description:
        "Liquore Galliano L'Autentico, known more commonly as Galliano, is a sweet herbal liqueur, created in 1896 by Italian distiller and brandy producer Arturo Vaccari of Livorno, Tuscany and named after Giuseppe Galliano, an Italian hero of the First Italo-Ethiopian War.Galliano has numerous natural ingredients including star anise, Mediterranean anise, juniper berry, musk yarrow, lavender, peppermint, cinnamon, and Galliano's hallmark vanilla flavour. Galliano uses vanillin for flavouring and sugar and glucose syrup for sweetening. Caramel and tartrazine are used to achieve Galliano's bright yellow colour. Neutral alcohol is infused with the pressings from the herbs except for the vanilla. The liquid is distilled and then infused with separately pressed vanilla. In the final stage, distilled water, refined sugar and pure neutral alcohol are blended with the base. Galliano has been formulated at both 60 proof (30% by volume) and 84.6 proof (42.3% by volume).Galliano is sweet with vanilla-anise flavour and subtle citrus and woodsy herbal undernotes. The vanilla top note differentiates Galliano from other anise-flavoured liqueurs such as Sambuca, Pernod, or Anisette. It is used both as a digestivo (meant for drinking after heavy meals), and as an ingredient for cocktails, most notably the Harvey Wallbanger, Yellow Bird (cocktail), Golden Cadillac, and Golden Dream.The Galliano brand is currently owned by Dutch distiller Lucas Bols, and marketed through its worldwide distribution joint venture, Maxxium. Galliano is packaged in a distinctively shaped bottle, reminiscent of a classical Roman column. Several other liqueurs are also produced under the Galliano brand name, including a black Sambuca, a white Sambuca and an amaretto, which are predominantly distributed in Australasia,[3] where the products are popular as shots. Galliano also makes Galliano Ristretto coffee-flavored liqueur and Galliano Balsamico, a balsamic vinegar-infused liqueur. Both Galliano Autentico and Galliano Vanilla, as used in the Harvey Wallbanger, are available.",
    },
    {
      ingredientName: "Peach Vodka",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Ouzo",
      containsAlcohol: true,
      description:
        'Ouzo (Greek: ούζο, IPA: [ˈuzo]) is an anise-flavoured aperitif that is widely consumed in Greece and Cyprus. Its taste is similar to other anise liquors like pastis, sambuca, arak, rakı, and mastika, that are traditionally produced and consumed in Mediterranean countries.Ouzo has its roots in tsipouro, which is said to have been the work of a group of 14th-century monks on Mount Athos. One version of it was flavoured with anise. This version eventually came to be called ouzo.Modern ouzo distillation largely took off in the beginning of the 19th century following Greek independence. The first ouzo distillery was founded in Tyrnavos in 1856 by Nikolaos Katsaros, giving birth to the famous ouzo Tyrnavou. When absinthe fell into disfavour in the early 20th century, ouzo was one of the products whose popularity rose to fill the gap; it was once called "a substitute for absinthe without the wormwood".[2] In 1932, ouzo producers developed a method of distillation using copper stills that is now the standard method of production. One of the largest producers of ouzo today is Varvayiannis (Βαρβαγιάννης),[citation needed] located in the town of Plomari in the southeast portion of the island of Lesbos, while in the same town Pitsiladi (Πιτσιλαδή), a variety of high-quality ouzo, is also distilled.Ouzo is traditionally mixed with water, becoming cloudy white, sometimes with a faint blue tinge, and served with ice cubes in a small glass. Ouzo can also be drunk straight from a shot glass.Ouzo is traditionally served with a small plate of a variety of appetizers called mezes, usually small fresh fish, fries, olives and feta cheese. Ouzo can be described to have a similar taste to absinthe which is liquorice-like, but smoother.On October 25, 2006, Greece won the right to label ouzo as an exclusively Greek product. The European Union now recognizes ouzo, as well as the Greek drinks tsipouro and tsikoudia, as products with a Protected Designation of Origin, which prohibits European makers other than Greece and Cyprus from using the name.There is an ouzo museum in Plomari, Lesvos.',
    },
    {
      ingredientName: "Coffee",
      containsAlcohol: false,
      description:
        "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean. The plant was exported from Africa to countries around the world and coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. The two most commonly grown are the highly regarded arabica, and the less sophisticated but stronger and more hardy robusta. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and brewed with near-boiling water to produce coffee as a beverage.Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. Coffee is one of the most popular drinks in the world. It can be prepared and presented in a variety of ways (e.g., espresso, French press, cafe latte, etc.). It is usually served hot, although iced coffee is also served. Clinical studies indicate that moderate coffee consumption is benign or mildly beneficial in healthy adults, with continuing research on whether long-term consumption inhibits cognitive decline during aging or lowers the risk of some forms of cancer.The earliest credible evidence of coffee-drinking appears in the middle of the 15th century in the Sufi shrines of Yemen. It was here in Arabia that coffee seeds were first roasted and brewed in a similar way to how it is now prepared. Coffee seeds were first exported from East Africa to Yemen, as the coffea arabica plant is thought to have been indigenous to the former. Yemeni traders took coffee back to their homeland and began to cultivate the seed. By the 16th century, it had reached Persia, Turkey, and North Africa. From there, it spread to Europe and the rest of the world.Coffee is a major export commodity: it is the top agricultural export for numerous countries and is among the world's largest legal agricultural exports. It is one of the most valuable commodities exported by developing countries. Green (unroasted) coffee is one of the most traded agricultural commodities in the world. Some controversy is associated with coffee cultivation and the way developed countries trade with developing nations and the impact of its cultivation on the environment, in regards to clearing of land for coffee-growing and water use. Consequently, the markets for fair trade coffee and organic coffee are expanding.",
    },
    {
      ingredientName: "Spiced rum",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Water",
      containsAlcohol: false,
      description:
        "Water is a transparent and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. Its chemical formula is H2O, meaning that its molecule contains one oxygen and two hydrogen atoms that are connected by covalent bonds. Strictly speaking, water refers to the liquid state of a substance that prevails at standard ambient temperature and pressure; but it often refers also to its solid state (ice) or its gaseous state (steam or water vapor). It also occurs in nature as snow, glaciers, ice packs and icebergs, clouds, fog, dew, aquifers, and atmospheric humidity.Water covers 71% of the Earth's surface.[1] It is vital for all known forms of life. On Earth, 96.5% of the planet's crust water is found in seas and oceans, 1.7% in groundwater, 1.7% in glaciers and the ice caps of Antarctica and Greenland, a small fraction in other large water bodies, 0.001% in the air as vapor, clouds (formed of ice and liquid water suspended in air), and precipitation. Only 2.5% of this water is freshwater, and 98.8% of that water is in ice (excepting ice in clouds) and groundwater. Less than 0.3% of all freshwater is in rivers, lakes, and the atmosphere, and an even smaller amount of the Earth's freshwater (0.003%) is contained within biological bodies and manufactured products. A greater quantity of water is found in the earth's interior.Water on Earth moves continually through the water cycle of evaporation and transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea. Evaporation and transpiration contribute to the precipitation over land. Large amounts of water are also chemically combined or adsorbed in hydrated minerals.Safe drinking water is essential to humans and other lifeforms even though it provides no calories or organic nutrients. Access to safe drinking water has improved over the last decades in almost every part of the world, but approximately one billion people still lack access to safe water and over 2.5 billion lack access to adequate sanitation. There is a clear correlation between access to safe water and gross domestic product per capita. However, some observers have estimated that by 2025 more than half of the world population will be facing water-based vulnerability. A report, issued in November 2009, suggests that by 2030, in some developing regions of the world, water demand will exceed supply by 50%.Water plays an important role in the world economy. Approximately 70% of the freshwater used by humans goes to agriculture. Fishing in salt and fresh water bodies is a major source of food for many parts of the world. Much of long-distance trade of commodities (such as oil and natural gas) and manufactured products is transported by boats through seas, rivers, lakes, and canals. Large quantities of water, ice, and steam are used for cooling and heating, in industry and homes. Water is an excellent solvent for a wide variety of chemical substances; as such it is widely used in industrial processes, and in cooking and washing. Water is also central to many sports and other forms of entertainment, such as swimming, pleasure boating, boat racing, surfing, sport fishing, and diving.",
    },
    {
      ingredientName: "Espresso",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Angelica root",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Orange",
      containsAlcohol: false,
      description:
        "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin; however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations. The chloroplast genes, and therefore the maternal line, seem to be pomelo. The sweet orange has had its full genome sequenced. Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.Sweet oranges were mentioned in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world. Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel. As of 2012, sweet oranges accounted for approximately 70% of citrus production.In 2014, 70.9 million tonnes of oranges were grown worldwide, with Brazil producing 24% of the world total followed by China and India.",
    },
    {
      ingredientName: "Cranberries",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Johnnie Walker",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Apple cider",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Everclear",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Cranberry juice",
      containsAlcohol: false,
      description:
        "Cranberry juice is the juice of the cranberry. The term, used on its own, usually refers to a sweetened version.A cup of standard 100% cranberry juice, amounting to 248 grams or 8 ounces, is a rich source of antioxidants, vitamin C and salicylic acid. It also supplies calcium, magnesium, manganese, phosphorus, and potassium minerals. Cranberry juice is classified as an acidic drink with a typical pH between 2.3 and 2.5.In 2010 a study conducted by the Worcester Polytechnic Institute in Massachusetts found that the ingredients in cranberry juice limit the ability of E. coli bacteria (the main cause of UTIs) to cling to other bacteria. Without other bacteria, E. coli's ability to grow and reproduce is limited. The researchers concluded that cranberry juice helps prevent UTIs, but stopped short of saying the juice cures them. According to WebMD, which reported on the study, study researcher Terri Anne Camesano said people should not self-treat urinary tract infections, and anyone who suspects they have an infection should see a doctor, but drinking cranberry juice may be an easy, inexpensive way to help keep E. coli at bay.There is some evidence that although long-term use of cranberry juice can help prevent symptomatic urinary tract infections, people do not persist in taking it over long periods.[4] There is no significant difference between cranberry juices and capsules. It is thought to prevent adhesion of bacteria such as E. coli to the urinary tract, by inducing changes to their fimbriae.The proanthocyanidins found in cranberry juice can prevent bacteria from adhering to the epithelial tissue that line many interior parts of the human body. These adhering bacteria can cause breakdown and inflammation of the epithelial lining of the urinary tract, leading to urinary tract infections.\r\n",
    },
    {
      ingredientName: "Egg yolk",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Egg",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Grape juice",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Peach nectar",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Lemon",
      containsAlcohol: false,
      description:
        "The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia.The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses. The pulp and rind (zest) are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of around 2.2, giving it a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.",
    },
    {
      ingredientName: "Firewater",
      containsAlcohol: false,
      description: null,
    },
    {
      ingredientName: "Lemonade",
      containsAlcohol: false,
      description:
        'Lemonade is any of various sweetened beverages found around the world, all characterized by lemon flavour.Most lemonade varieties can be separated into two distinct types: cloudy and clear; each is known simply as "lemonade" (or a cognate) in countries where dominant. Cloudy lemonade, generally found in North America and India, is a traditionally homemade drink made with lemon juice, water, and sweetener such as cane sugar or honey. Found in the United Kingdom, Ireland, South Africa, Australia, and New Zealand, clear lemonade is a lemon flavoured carbonated soft drink. It should not be confused with Sprite, a lemon-lime flavoured soft drink.A popular cloudy variation is pink lemonade, made with added fruit flavours such as raspberry or strawberry among others, giving a distinctive pink color. The "-ade" suffix may also be applied to other similar drinks made with different fruits, such as limeade, orangeade, or cherryade. Alcoholic varieties are known as hard lemonade.In many European countries, the French word limonade has come to mean "soft drink", regardless of flavour.[citation needed]',
    },
    {
      ingredientName: "Lager",
      containsAlcohol: true,
    },
    {
      ingredientName: "Whiskey",
      containsAlcohol: true,
      description:
        'Whisky or whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn (maize), rye, and wheat. Whisky is typically aged in wooden casks, generally made of charred white oak.Whisky is a strictly regulated spirit worldwide with many classes and types. The typical unifying characteristics of the different classes and types are the fermentation of grains, distillation, and aging in wooden barrels.The word whisky (or whiskey) is an anglicisation of the Classical Gaelic word uisce (or uisge) meaning "water" (now written as uisce in Irish Gaelic, and uisge in Scottish Gaelic). Distilled alcohol was known in Latin as aqua vitae ("water of life"). This was translated to Classical Gaelic as Irish: uisce beatha/Scottish Gaelic: uisge beatha "water of life". Early forms of the word in English included uskebeaghe (1581), usquebaugh (1610), usquebath (1621), and usquebae (1715).It is possible that distillation was practised by the Babylonians in Mesopotamia in the 2nd millennium BC, with perfumes and aromatics being distilled, but this is subject to uncertain and disputed interpretation of evidence. The earliest certain chemical distillations were by Greeks in Alexandria in the 1st century AD, but these were not distillations of alcohol. The medieval Arabs adopted the distillation technique of the Alexandrian Greeks, and written records in Arabic begin in the 9th century, but again these were not distillations of alcohol. Distilling technology passed from the medieval Arabs to the medieval Latins, with the earliest records in Latin in the early 12th century. The earliest records of the distillation of alcohol are in Italy in the 13th century, where alcohol was distilled from wine. An early description of the technique was given by Ramon Llull (1232 – 1315). Its use spread through medieval monasteries, largely for medicinal purposes, such as the treatment of colic and smallpox.The art of distillation spread to Ireland and Scotland no later than the 15th century, as did the common European practice of distilling "aqua vitae" or spirit alcohol primarily for medicinal purposes. The practice of medicinal distillation eventually passed from a monastic setting to the secular via professional medical practitioners of the time, The Guild of Barber Surgeons. The earliest Irish mention of whisky comes from the seventeenth-century Annals of Clonmacnoise, which attributes the death of a chieftain in 1405 to "taking a surfeit of aqua vitae" at Christmas. In Scotland, the first evidence of whisky production comes from an entry in the Exchequer Rolls for 1494 where malt is sent "To Friar John Cor, by order of the king, to make aquavitae", enough to make about 500 bottles.A still for making whisky is usually made of copper, since it removes sulfur-based compounds from the alcohol that would make it unpleasant to drink. Modern stills are made of stainless steel with copper innards (piping, for example, will be lined with copper along with copper plate inlays along still walls). The simplest standard distillation apparatus is commonly known as a pot still, consisting of a single heated chamber and a vessel to collect purified alcohol.Column stills are frequently used in the production of grain whisky and are the most commonly used type of still in the production of bourbon and other American whiskeys. Column stills behave like a series of single pot stills, formed in a long vertical tube. Whereas a single pot still charged with wine might yield a vapour enriched to 40–50% alcohol, a column still can achieve a vapour alcohol content of 95.6%; an azeotropic mixture of alcohol and water.',
    },
    {
      ingredientName: "Absolut Citron",
      containsAlcohol: true,
      description:
        'Absolut Vodka is a brand of vodka, produced near Åhus, in southern Sweden. Absolut is owned by French group Pernod Ricard; they bought Absolut for €5.63 billion in 2008 from the Swedish state. Absolut is the third largest brand of alcoholic spirits in the world after Bacardi and Smirnoff, and is sold in 126 countries.Absolut was established in 1879 by Lars Olsson Smith and is produced in Åhus, Sweden.[1] Smith challenged the city of Stockholm\'s liquor marketing monopoly with his vodka. It was sold at a lower price than the monopoly\'s product, just outside the city border. Smith even offered free boat rides to the distillery and "Rent Brännvin" made Smith a fortune.In 1917, the alcohol industry in Sweden was monopolized by the Swedish government. Vodka was then sold nationwide under the name "Absolut Rent Brännvin". The name changed with intervals, Renat Brännvin or Absolut Rent Brännvin. In 1979, the old name Absolut was picked up when the upper-price range ABSOLUT VODKA was introduced. Renat is still a euphemism for spirits in Sweden, and the name of another vodka product by Vin & Sprit.\r\nAbsolut Vodka was introduced to the global market in 1979. Since its launch, Absolut has grown from 90,000 liters to 96.6 million liters in 2008. It has become the largest international spirit and is available in 126 countries. The vodka is made from winter wheat. Approximately 80,000 metric tons (2,900,000 bushels) of wheat are used annually to produce Absolut Vodka. Over one kilogram of grain is used in every one-liter bottle.',
    },
    {
      ingredientName: "Pisco",
      containsAlcohol: true,
      description:
        "Pisco is a colorless or yellowish-to-amber colored brandy produced in winemaking regions of Peru and Chile. Made by distilling fermented grape juice into a high-proof spirit, it was developed by 16th century Spanish settlers as an alternative to orujo, a pomace brandy that was being imported from Spain. It had the advantages of being produced from abundant domestically grown fruit and reducing the volume of alcoholic beverages transported to remote locations.Annual pisco production in 2013 reached 30 million litres in Chile and 9.5 million litres in Peru. Chile is also the main importer of Pisco from Peru: 34% of the Pisco produced in Peru is exported to Chile.",
    },
    {
      ingredientName: "Irish cream",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Ale",
      containsAlcohol: true,
    },
    {
      ingredientName: "Chocolate liqueur",
      containsAlcohol: true,
      description: null,
    },
    {
      ingredientName: "Midori melon liqueur",
      containsAlcohol: true,
      description:
        'Midori is a sweet, bright green-coloured, muskmelon-flavored liqueur made by Suntory. It is manufactured in Japan, the United States, Mexico, and France. It was made exclusively in Japan until 1987. Midori is typically 20–21% alcohol by volume. Its name is the Japanese word for "green". The Midori formulated in France is sweeter than the original Japanese version.As it is extremely sweet, Midori is not usually taken "straight"; it is generally used in a cocktail, e.g., the Japanese slipper, which is a cocktail composed of lemonade, fresh lemon juice, lime juice, pineapple juice, or orange juice. Sour flavours are often combined with Midori in order to balance out its sweetness.Midori was launched by Suntory at Studio 54 in New York City in 1978 during a party held by the cast, crew, and producers of the movie, Saturday Night Fever. By 1983, Midori was distributed in 20 countries. In 2013, following consumer research, Suntory reduced the sugar content and began producing Midori with a redesigned label and frosted glass bottle.',
    },
    {
      ingredientName: "Sambuca",
      containsAlcohol: false,
    },
    {
      ingredientName: "Cider",
      containsAlcohol: true,
      description: `Cider (/ˈsaɪdər/ SY-dər) is an alcoholic beverage made from the fermented juice of apples. The juice of any variety of apple can be used to make cider, but cider apples are best. The addition of sugar or extra fruit before a second fermentation increases the ethanol content of the resulting beverage. Cider is popular in the United Kingdom, especially in the West Country, and widely available. The UK has the world's highest per capita consumption, as well as its largest cider-producing companies. Cider is also popular in other European countries including Ireland, Portugal (mainly in Minho and Madeira), France (in particular Brittany and Normandy), northern Italy (Piedmont and Friuli), and Spain (especially Asturias and the Basque Country). Central Europe also has its own types of cider with Rhineland-Palatinate and Hesse producing a particularly tart version known as Apfelwein.Cider alcohol content varies from 1.2% ABV to 8.5% or more in traditional English ciders, and 3.5% to 12% in continental ciders. In UK law, it must contain at least 35% apple juice (fresh or from concentrate), although CAMRA says that \"real cider\" must be at least 90% fresh apple juice. In the US, there is a 50% minimum. In France, cider must be made solely from apples. In 2014, a study found that a pint of mass-market cider contained five teaspoons (20.5 g) of sugar, nearly as much as the WHO recommends as an adult's daily allowance of added sugar, and 5-10 times the amount of sugar in lager or ale.Perry is a similar product made from fermented pear juice.The flavour of cider varies. Ciders can be classified from dry to sweet. Their appearance ranges from cloudy with sediment to completely clear, and their colour ranges from almost clear to amber to brown. The variations in clarity and colour are mostly due to filtering between pressing and fermentation. Some apple varieties will produce a clear cider without any need for filtration. Both sparkling and still ciders are made; the sparkling variety is the more common.Modern, mass-produced ciders closely resemble sparkling wine in appearance. More traditional brands tend to be darker and cloudier. They are often stronger than the mass-produced varieties and taste more strongly of apples. Almost colourless, white cider has the same apple juice content as conventional cider but is harder to create because the cider maker has to blend various apples to create a clearer liquid. White ciders tend to be sweeter and more refreshing. They are typically 7-8 % ABV in strength. Black cider, by contrast, is dry amber premium cider which has an alcohol content of 7-8 % ABV. The descriptor black usually comes after the brand name such as Union Black and Barnstormer Black.`,
    },
    {
      ingredientName: "Sprite",
      containsAlcohol: false,
    },
    {
      ingredientName: "7-Up",
      containsAlcohol: false,
    },
    {
      ingredientName: "Blackberry brandy",
      containsAlcohol: false,
    },
    {
      ingredientName: "Peppermint schnapps",
      containsAlcohol: true,
    },
    {
      ingredientName: "Creme de Cassis",
      containsAlcohol: true,
    },
  ];

  const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    const dogs = await Dog.bulkCreate(dogData);
    const dogGuesses = await DogGuess.bulkCreate(dogGuessData);
    const cocktailIngredients = await CocktailIngredient.bulkCreate(cocktailIngredientsData);
    const dogBreeds = await DogBreed.bulkCreate(dogBreedsData);
    const cocktailIngredientList = await CocktailIngredientList.bulkCreate(cocktailIngredientListData);
  };

  seedDatabase();