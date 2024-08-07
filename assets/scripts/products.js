// Lista de produtos
const products = [
    {
        pages: ["AllProducts", "Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/10ftCalfHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/1-10ftCalfHurdles.webp",
        title: "10ft Calf Hurdles"
    },
    {
        pages: ["AllProducts", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/10ftCattleHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/2-10ftCattleHurdles.webp",
        title: "10ft Cattle Hurdles"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/16ftSheepRaceComplete.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/3-16ftSheepRaceComplete.webp",
        title: "16ft Sheep Race Complete"
    },
    {
        pages: ["AllProducts", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/5LFeedGradeBucket.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/4-5LFeedGradeBucket.webp",
        title: "5L Feed Grade Bucket"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/8fSheetedPanel.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/5-8fSheetedPanel.webp",
        title: "8f Sheeted Panel"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/AdoptionUnitFronts.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/6-AdoptionUnitFronts.webp",
        title: "Adoption Unit Fronts"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/BackLiftAndSwingGate.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/7-BackLiftAndSwingGate.webp",
        title: "Back Lift and Swing Gate"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/BuffaloLambPram.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/8-BuffaloLambPram.webp",
        title: "Buffalo Lamb Pram"
    },
    {
        pages: ["AllProducts", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/CattleBarrierHangers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/9-CattleBarrierHangers.webp",
        title: "Cattle Barrier Hangers"
    },
    {
        pages: ["AllProducts", "Popular", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/CattleRoundFeeders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/10-CattleRoundFeeders.webp",
        title: "Cattle Round Feeders"
    },
    {
        pages: ["AllProducts", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/CattleStraightFeeders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/11-CattleStraightFeeders.webp",
        title: "Cattle Straight Feeders"
    },
    {
        pages: ["AllProducts", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/CorrugatedCrashUsedBarriers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/12-CorrugatedCrashUsedBarriers.webp",
        title: "Corrugated Crash Used Barriers"
    },
    {
        pages: ["AllProducts", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/Coupliers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/13-Coupliers.webp",
        title: "Coupliers"
    },
    {
        pages: ["AllProducts", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/CrowdPedestrianBarriers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/14-CrowdPedestrianBarriers.webp",
        title: "Crowd/Pedestrian Barriers"
    },
    {
        pages: ["AllProducts", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/DiagonalBarriersl.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/15-DiagonalBarriers.webp",
        title: "Diagonal Barriers"
    },
    {
        pages: ["AllProducts", "Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/DropPinHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/16-DropPinHurdles.webp",
        title: "Drop Pin Hurdles"
    },
    {
        pages: ["AllProducts", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/FeedingBarriers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/17-FeedingBarriers.webp",
        title: "Feeding Barriers"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/FrontDraftingGate.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/18-FrontDraftingGate.webp",
        title: "Front Drafting Gate"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/GalvanizedPins.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/19-GalvanizedPins.webp",
        title: "Galvanized Pins"
    },
    {
        pages: ["AllProducts", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/GateHangers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/20-GateHangers.webp",
        title: "Gate Hanger"
    },
    {
        pages: ["AllProducts", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/HangOnRacksSolidBars.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/21-HangOnRacksSolidBars.webp",
        title: "Hang on Racks Solid Bars"
    },
    {
        pages: ["AllProducts", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/HangingPost.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/22-HangingPost.webp",
        title: "Hanging Post"
    },
    {
        pages: ["AllProducts", "Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/HeavyDutySledgeHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/23-HeavyDutySledgeHurdles.webp",
        title: "Heavy Duty Sledge Hurdles"
    },
    {
        pages: ["AllProducts", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/HotDippedGalvanizedTrestles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/24-HotDippedGalvanizedTrestles.webp",
        title: "Hot Dipped Galvanized Trestles"
    },
    {
        pages: ["AllProducts2", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/LargeBucketHolders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/25-LargeBucketHolders.webp",
        title: "Large Bucket Holders"
    },
    {
        pages: ["AllProducts2", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/LargeDoubleSidedHayBaskets.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/26-LargeDoubleSidedHayBaskets.webp",
        title: "Large Double Sided Hay Baskets"
    },
    {
        pages: ["AllProducts2", "Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/LightWeightPaintedHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/27-LightWeightPaintedHurdles.webp",
        title: "Light Weight Painted Hurdles"
    },
    {
        pages: ["AllProducts2", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/MedBucketHolders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/28-MedBucketHolders.webp",
        title: "Med Bucket Holders"
    },
    {
        pages: ["AllProducts2", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/MedDoubleSideHayBaskets.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/29-MedDoubleSideHayBaskets.webp",
        title: "Med Double Side Hay Baskets"
    },
    {
        pages: ["AllProducts2", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/RubberBlocks.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/30-RubberBlocks.webp",
        title: "Rubber Blocks"
    },
    {
        pages: ["AllProducts2", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/Scaffolding.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/31-Scaffolding.webp",
        title: "Scaffolding"
    },
    {
        pages: ["AllProducts2", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/SheepScalesCW200kgSalterClock.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/32-SheepScalesCW200kgSalterClock.webp",
        title: "Sheep Scales c/w 200kg Salter Clock"
    },
    {
        pages: ["AllProducts2", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/SpringLoadedNonReturnGate.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/33-SpringLoadedNonReturnGate.webp",
        title: "Spring Loaded Non Return Gate"
    },
    {
        pages: ["AllProducts2", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/TemporaryFences.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/34-TemporaryFences.webp",
        title: "Temporary Fences"
    },
    {
        pages: ["AllProducts2", "SheepHandling"],
        href: "../../../../assets/html/productsCardPage/UJoiner.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/35-UJoiner.webp",
        title: "UJoiner"
    },
    {
        pages: ["AllProducts2", "Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/UkSpecHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/36-UkSpecHurdles.webp",
        title: "Uk Spec Hurdles"
    },
    {
        pages: ["AllProducts2", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/VMeshFencing.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/37-VMeshFencing.webp",
        title: "V Mesh Fencing"
    },
    {
        pages: ["AllProducts2", "FieldGates"],
        href: "../../../../assets/html/productsCardPage/VMeshPedestrianDoors.html.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/38-VMeshPedestrianDoors.webp",
        title: "V Mesh Pedestrian Doors"
    },
    {
        pages: ["AllProducts2", "SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/WaterBowl.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/39-WaterBowl.webp",
        title: "Water Bowl"
    }
];

function createProductCard(product) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4', 'custom-col'); // Adiciona a classe personalizada

    const link = document.createElement('a');
    link.href = product.href;
    link.classList.add('custom-link');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'bg-transparent', 'border-0', 'custom-card'); // Adiciona a classe personalizada

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = product.imgSrc;
    img.alt = product.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');
    cardTitle.textContent = product.title;

    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    link.appendChild(cardDiv);
    colDiv.appendChild(link);

    return colDiv;
}

function loadProducts() {
    const productContainers = {
        'AllProducts': document.getElementById('product-container-AllProducts'),
        'AllProducts2': document.getElementById('product-container-AllProducts2'),
        'FieldGates': document.getElementById('product-container-FieldGates'),
        'Popular': document.getElementById('product-container-Popular'),
        'SheepFeeding': document.getElementById('product-container-SheepFeeding'),
        'SheepHandling': document.getElementById('product-container-SheepHandling'),
        'SheepHurdles': document.getElementById('product-container-SheepHurdles'),
    };

    products.forEach(product => {
        if (product.pages) {
            product.pages.forEach(page => {
                if (productContainers[page]) {
                    const productCard = createProductCard(product)
                    productContainers[page].appendChild(productCard)
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', loadProducts)





function addButtonListeners() {
    var button1 = document.getElementById('button1')
    var button2 = document.getElementById('button2')

    var button3 = document.getElementById('button3')
    var button4 = document.getElementById('button4')

    var button5 = document.getElementById('button5')
    var button6 = document.getElementById('button6')
    var button7 = document.getElementById('button7')
    var button8 = document.getElementById('button8')
    var button9 = document.getElementById('button9')
    var button10 = document.getElementById('button10')

    if (button1) {
        button1.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/CorrugatedCrashUsedBarriers.webp'
        })
    }
    if (button2) {
        button2.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/CorrugatedCrashUsedBarriers2.webp'
        })
    }



    if (button3) {
        button3.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GalvanizedPins.webp'
        })
    }
    if (button4) {
        button4.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GalvanizedPins2.webp'
        })
    }



    if (button5) {
        button5.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GateHangers.webp'
        })
    }
    if (button6) {
        button6.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GateHangers2.webp'
        })
    }
    if (button7) {
        button7.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GateHangers3.webp'
        })
    }
    if (button8) {
        button8.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GateHangers4.webp'
        })
    }
    if (button9) {
        button9.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GateHangers5.webp'
        })
    }
    if (button10) {
        button10.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/GateHangers6.webp'
        })
    }

    if (button11) {
        button11.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/HangOnRacksSolidBars.webp'
        })
    }
    if (button12) {
        button12.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/HangOnRacksSolidBars2.webp'
        })
    }
    if (button13) {
        button13.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/HangOnRacksSolidBars3.webp'
        })
    }
    if (button14) {
        button14.addEventListener('click', function () {
            document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/HangOnRacksSolidBars4.webp'
        })
    }
}

document.addEventListener('DOMContentLoaded', addButtonListeners);
