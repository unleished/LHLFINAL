
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
  .then(function() {
    return knex('products').del()
  })  
  .then(function () {
      // Inserts seed entries
      return knex('products').returning('id').insert([
        { name: 'The Vegetal Chair', 
        category: 'chairs',
        description: "Taking inspiration from plants and nature, the Vegetal chair features branch-like structures that form a slightly irregular seating shell, supported by four legs. The chair, designed for use indoors and outdoors, is made from die-cast, fibre-reinforced polyamide and comes in six different colours. Vegetal should not only be seen in the context of the design and furnishing of historic gardens. It also corresponds to current trends towards the flexible use of weatherproof furniture in interiors, in the garden or on the terrace, and will make the perfect addition to any lifestyle.",
        price: '200'
      },
        { name: 'The Fishnet Chair',
        category: 'chairs',
        description: "The Fishnet Chair is archetypical avant-garde. Back then it was ahead of its time. Today, its timeless character is so evident. The Fishnet Chair is classic design history. With artistic impetus, Sadi Ozis wove fishnet between the bent tubular steel framework back in 1959 – due to the lack of materials in Turkey after the Second World War. And in this reissue, featuring an upholstered seat and back - further developed later by Sadi Ozis together with his son, Neptun Ozis - the side chair has lost nothing of its iconic charm. A sculpture in design, authentic and of great innovative power.",
        price: '350'
      },
        { name: 'The Aluminium Chair',
        category: 'chairs',
        description: "The Aluminium Chair is one of the great furniture designs of the twentieth century. Charles and Ray Eames conceived and developed this chair in 1958 for the private residence of an art collector in Columbus, Indiana (USA). For its construction, the designer couple departed from the principle of the seat shell, instead stretching a panel of fabric or leather between two aluminium side members to create a taut but elastic seat. The chair adapts to the body of the sitter and is exceedingly comfortable, even without elaborate upholstery. The Aluminium Chair is available in several different models for use in homes, offices and public areas. Vitra has produced Aluminium Group chairs in the same superior quality for decades. This experience allows us to offer a 30-year guarantee* on all of the chair models in the Aluminium Group.",
        price: '175'
      },
        { name: 'The Plate Table',
        category: 'Tables',
        description: "In keeping with Jasper Morrison's philosophy of 'super normal' design, his Plate Tables are characterised by an unassuming, classic shape and finely balanced proportions. Available in different sizes, the tables derive their charm from the successful interplay of subtle curves and precisely defined edges. The refined base and the thin table top in premium solid wood, marble or powder-coated MDF form a harmonious whole, yet are clearly distinct from each other. The dimensions of the Plate Tables are coordinated so that several tables can be grouped together to form a large surface area or to create diverse arrangements. This flexibility offers ideal solutions in regard to both size and shape for the requirements of different interiors or for unusual sofa configurations.",
        price: '875'
      },
        { name: 'The Bondt Square',
        category: 'Tables',
        description: "Lovingly handcrafted in Scandinavia, The BONDT family of tables has the seemingly thin table top balanced on two trestles in an exciting contrast with broad planks. The product programme comprises dining tables as well as desks, coffee tables, couch tables and an array of various side tables. Designed to blend with any environment, the BONDT Table is doubtless an invaluable addition to your living area.",
        price: '1200'
      },
        { name: 'The Desalto Table',
        category: 'Tables',
        description: "An iconic table, Desalto is a symbol of purity and poetry, the essence of the visionary designer Tokujin Yoshioka's style. The central support, delicately balanced between the two horizontal elements, defies gravity, suspended between earth and sky, between the past and the future.",
        price: '2500'
      },
        { name: 'The Kaiser Idell',
        category: 'lighting',
        description: "German silversmith Christian Dell was a metalworking teacher at the Bauhaus from 1922–1925. Collaborating with modernist luminaries László Moholy-Nagy and Marianne Brandt, Dell helped shape the Bauhaus approach to industrial lighting. He started designing lighting for various companies in 1926, including Gebrüder Kaiser & Co., which produced the first lamp in the Kaiser-idell Collection (1931). With the first part of the name being for the factory that produced it, the latter is an amalgam of Dell and idee, the German word for “idea.” Brought back into production by Fritz Hansen in 2011, the collection is crafted to the designer’s original specifications, including his worldwide-patented swivel joint for shade adjustability – revolutionary in 1931. Bulb (not included): 4'' or shorter LED; E26 base; 25W max. UL Listed. Made in Denmark.",
        price: '550'
      },
        { name: 'The Melampo Mega Terra',
        category: 'lighting',
        description: "This stylish floor lamp is a staple piece in any modern home. The conical shade casts a soft light around the atmosphere whilst sitting on the lacquered zamac base at a 45 degree angle. Useful as either a reading light or a decorative statement, this is a design piece not to be missed.",
        price: '950'
      }
    ])
    .then(function (product_id) {
      // Inserts seed entries
      return knex('images').insert([
        { product_id: product_id[0],
          path_1: '/images/chairs/1_vegetal/1.jpg',
          path_2: '/images/chairs/1_vegetal/2.jpg',
          path_3: '/images/chairs/1_vegetal/3.jpg',
          path_4: '/images/chairs/1_vegetal/4.jpg'
        },
        { product_id: product_id[1],
          path_1: '/images/chairs/2_fishnet/2.jpg',
          path_2: '/images/chairs/2_fishnet/3.jpg',
          path_3: '/images/chairs/2_fishnet/1.jpe',
          path_4: '/images/chairs/2_fishnet/4.jpg'
        },
        { product_id: product_id[2],
          path_1: '/images/chairs/3_aluminium/1.jpg',
          path_2: '/images/chairs/3_aluminium/2.jpg',
          path_3: '/images/chairs/3_aluminium/3.jpg',
          path_4: '/images/chairs/3_aluminium/4.jpg'
        },
        { product_id: product_id[3],
          path_1: '/images/tables/4_plate/1.jpg',
          path_2: '/images/tables/4_plate/2.jpg',
          path_3: '/images/tables/4_plate/3.jpg',
          path_4: '/images/tables/4_plate/4.jpg'
        },
        { product_id: product_id[4],
          path_1: '/images/tables/5_bondt/1.jpg',
          path_2: '/images/tables/5_bondt/2.jpg',
          path_3: '/images/tables/5_bondt/3.jpg',
          path_4: '/images/tables/5_bondt/4.jpg'
        },
        { product_id: product_id[5],
          path_1: '/images/tables/6_desalto/1.jpg',
          path_2: '/images/tables/6_desalto/2.jpg',
          path_3: '/images/tables/6_desalto/3.jpg',
          path_4: '/images/tables/6_desalto/4.jpg'
        },
        { product_id: product_id[6],
          path_1: '/images/lighting/7_kaiser/1.jpg',
          path_2: '/images/lighting/7_kaiser/2.jpg',
          path_3: '/images/lighting/7_kaiser/3.jpg',
          path_4: '/images/lighting/7_kaiser/4.jpeg'
        },
        { product_id: product_id[7],
          path_1: '/images/lighting/8_melampo/1.jpg',
          path_2: '/images/lighting/8_melampo/2.jpg',
          path_3: '/images/lighting/8_melampo/3.jpg',
          path_4: '/images/lighting/8_melampo/4.jpg'
        },
      ]);
    });   
  });   
};

