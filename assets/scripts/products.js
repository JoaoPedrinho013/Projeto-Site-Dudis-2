// Lista de produtos
const products = [
    {
        pages: ["Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/10ftCalfHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/1-10ftCalfHurdles.webp",
        title: "10ft Calf Hurdles"
    },
    {
        pages: ["SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/10ftCattleHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/2-10ftCattleHurdles.webp",
        title: "10ft Cattle Hurdles"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/16ftSheepRaceComplete.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/3-16ftSheepRaceComplete.webp",
        title: "16ft Sheep Race Complete"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/5LFeedGradeBucket.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/4-5LFeedGradeBucket.webp",
        title: "5L Feed Grade Bucket"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/8fSheetedPanel.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/5-8fSheetedPanel.webp",
        title: "8f Sheeted Panel"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/AdoptionUnitFronts.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/6-AdoptionUnitFronts.webp",
        title: "Adoption Unit Fronts"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/BackLiftAndSwingGate.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/7-BackLiftAndSwingGate.webp",
        title: "Back Lift and Swing Gate"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/BuffaloLambPram.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/8-BuffaloLambPram.webp",
        title: "Buffalo Lamb Pram"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/CattleBarrierHangers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/9-CattleBarrierHangers.webp",
        title: "Cattle Barrier Hangers"
    },
    {
        pages: ["Popular","SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/CattleRoundFeeders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/10-CattleRoundFeeders.webp",
        title: "Cattle Round Feeders"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/CattleStraightFeeders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/11-CattleStraightFeeders.webp",
        title: "Cattle Straight Feeders"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/CorrugatedCrashUsedBarriers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/12-CorrugatedCrashUsedBarriers.webp",
        title: "Corrugated Crash Used Barriers"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/Coupliers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/13-Coupliers.webp",
        title: "Coupliers"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/CrowdPedestrianBarriers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/14-CrowdPedestrianBarriers.webp",
        title: "Crowd/Pedestrian Barriers"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/DiagonalBarriersl.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/15-DiagonalBarriers.webp",
        title: "Diagonal Barriers"
    },
    {
        pages: ["Popular","SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/DropPinHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/16-DropPinHurdles.webp",
        title: "Drop Pin Hurdles"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/FeedingBarriers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/17-FeedingBarriers.webp",
        title: "Feeding Barriers"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/FrontDraftingGate.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/18-FrontDraftingGate.webp",
        title: "Front Drafting Gate"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/GalvanizedPins.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/19-GalvanizedPins.webp",
        title: "Galvanized Pins"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/GateHangers.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/20-GateHangers.webp",
        title: "Gate Hanger"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/HangOnRacksSolidBars.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/21-HangOnRacksSolidBars.webp",
        title: "Hang on Racks Solid Bars"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/HangingPost.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/22-HangingPost.webp",
        title: "Hanging Post"
    },
    {
        pages: ["Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/HeavyDutySledgeHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/23-HeavyDutySledgeHurdles.webp",
        title: "Heavy Duty Sledge Hurdles"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/HotDippedGalvanizedTrestles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/24-HotDippedGalvanizedTrestles.webp",
        title: "Hot Dipped Galvanized Trestles"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/LargeBucketHolders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/25-LargeBucketHolders.webp",
        title: "Large Bucket Holders"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/LargeDoubleSidedHayBaskets.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/26-LargeDoubleSidedHayBaskets.webp",
        title: "Large Double Sided Hay Baskets"
    },
    {
        pages: ["Popular","SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/LightWeightPaintedHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/27-LightWeightPaintedHurdles.webp",
        title: "Light Weight Painted Hurdles"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/MedBucketHolders.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/28-MedBucketHolders.webp",
        title: "Med Bucket Holders"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/MedDoubleSideHayBaskets.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/29-MedDoubleSideHayBaskets.webp",
        title: "Med Double Side Hay Baskets"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/RubberBlocks.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/30-RubberBlocks.webp",
        title: "Rubber Blocks"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/Scaffolding.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/31-Scaffolding.webp",
        title: "Scaffolding"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/SheepScalesCW200kgSalterClock.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/32-SheepScalesCW200kgSalterClock.webp",
        title: "Sheep Scales c/w 200kg Salter Clock"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/SpringLoadedNonReturnGate.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/33-SpringLoadedNonReturnGate.webp",
        title: "Spring Loaded Non Return Gate"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/TemporaryFences.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/34-TemporaryFences.webp",
        title: "Temporary Fences"
    },
    {
        pages: ["SheepHandling"],
        href: "../../../../assets/html/productsCardPage/UJoiner.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/35-UJoiner.webp",
        title: "UJoiner"
    },
    {
        pages: ["Popular", "SheepHurdles"],
        href: "../../../../assets/html/productsCardPage/UkSpecHurdles.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/36-UkSpecHurdles.webp",
        title: "Uk Spec Hurdles"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/VMeshFencing.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/37-VMeshFencing.webp",
        title: "V Mesh Fencing"
    },
    {
        pages: ["FieldGates"],
        href: "../../../../assets/html/productsCardPage/VMeshPedestrianDoors.html.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/38-VMeshPedestrianDoors.webp",
        title: "V Mesh Pedestrian Doors"
    },
    {
        pages: ["SheepFeeding"],
        href: "../../../../assets/html/productsCardPage/WaterBowl.html",
        imgSrc: "../../../../assets/imagens/imagensProdutos/39-WaterBowl.webp",
        title: "Water Bowl"
    }
];

function createProductCard(product) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4');

    const link = document.createElement('a');
    link.href = product.href;
    link.classList.add('custom-link');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'bg-transparent', 'border-0');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = product.imgSrc;
    img.alt = product.title; // Aqui usei o título como alt se imgAlt não estiver disponível

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
        'FieldGates': document.getElementById('product-container-FieldGates'),
        'Popular': document.getElementById('product-container-Popular'),
        'SheepFeeding': document.getElementById('product-container-SheepFeeding'),
        'SheepHandling': document.getElementById('product-container-SheepHandling'),
        'SheepHurdles': document.getElementById('product-container-SheepHurdles'),
    };

    products.forEach(product => {
        // Adiciona o produto a 'AllProducts'
        const allProductsContainer = productContainers['AllProducts'];
        if (allProductsContainer) {
            const productCard = createProductCard(product);
            allProductsContainer.appendChild(productCard);
        }

        // Adiciona o produto às páginas específicas
        if (product.pages) {
            product.pages.forEach(page => {
                if (productContainers[page]) {
                    const productCard = createProductCard(product);
                    productContainers[page].appendChild(productCard);
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);

const productPage = [
    {
        
        imgSrc: "../../../../assets/imagens/imagensProdutosPage/10ftCalfHurdles.webp",
        title: "Med Bucket Holders"

    },
]



        
            