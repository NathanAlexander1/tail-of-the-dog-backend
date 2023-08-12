const sequelize = require("../config/connection");
const {
    User,
    Dog,
    DogGuess,
    CocktailIngredient,
    DogBreed
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
  };

  seedDatabase();