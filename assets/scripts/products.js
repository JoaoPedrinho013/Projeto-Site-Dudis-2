
// O JavaScript pode ser usado para ajustar dinamicamente o tamanho das linhas
window.addEventListener('resize', function () {
    adjustLines();
});

function adjustLines() {
    const containerWidth = document.querySelector('.titulo').offsetWidth;
    const lineWidth = (containerWidth - document.querySelector('.centered-text').offsetWidth) / 2;
    document.querySelector('.left-line').style.width = lineWidth + 'px';
    document.querySelector('.right-line').style.width = lineWidth + 'px';
}

// Chame a função para ajustar as linhas quando a página é carregada inicialmente
adjustLines();



// Lista de produtos
const products = [
    {
        href: "assets/html/productsCardPage/10ftCalfHurdles.html",
        imgSrc: "assets/imagens/imagensProdutos/1-10ftCalfHurdles.webp",
        title: "10ft Calf Hurdles"
    },
    {
        href: "assets/html/productsCardPage/10ftCattleHurdles.html",
        imgSrc: "assets/imagens/imagensProdutos/2-10ftCattleHurdles.webp",
        title: "10ft Cattle Hurdles"
    },
    {
        href: "assets/html/productsCardPage/16ftSheepRaceComplete.html",
        imgSrc: "assets/imagens/imagensProdutos/3-16ftSheepRaceComplete.webp",
        title: "16ft Sheep Race Complete"
    },
    {
        href: "assets/html/productsCardPage/5LFeedGradeBucket.html",
        imgSrc: "assets/imagens/imagensProdutos/4-5LFeedGradeBucket.webp",
        title: "5L Feed Grade Bucket"
    },
    {
        href: "assets/html/productsCardPage/8fSheetedPanel.html",
        imgSrc: "assets/imagens/imagensProdutos/5-8fSheetedPanel.webp",
        title: "8f Sheeted Panel"
    },
    {
        href: "assets/html/productsCardPage/AdoptionUnitFronts.html",
        imgSrc: "assets/imagens/imagensProdutos/6-AdoptionUnitFronts.webp",
        title: "Adoption Unit Fronts"
    },
    {
        href: "assets/html/productsCardPage/BackLiftAndSwingGate.html",
        imgSrc: "assets/imagens/imagensProdutos/7-BackLiftAndSwingGate.webp",
        title: "Back Lift and Swing Gate"
    },
    {
        href: "assets/html/productsCardPage/BuffaloLambPram.html",
        imgSrc: "assets/imagens/imagensProdutos/8-BuffaloLambPram.webp",
        title: "Buffalo Lamb Pram"
    },
    {
        href: "assets/html/productsCardPage/CattleBarrierHangers.html",
        imgSrc: "assets/imagens/imagensProdutos/9-CattleBarrierHangers.webp",
        title: "Cattle Barrier Hangers"
    },
    {
        href: "assets/html/productsCardPage/CattleRoundFeeders.html",
        imgSrc: "assets/imagens/imagensProdutos/10-CattleRoundFeeders.webp",
        title: "Cattle Round Feeders"
    },
    {
        href: "assets/html/productsCardPage/CattleStraightFeeders.html",
        imgSrc: "assets/imagens/imagensProdutos/11-CattleStraightFeeders.webp",
        title: "Cattle Straight Feeders"
    },
    {
        href: "assets/html/productsCardPage/CorrugatedCrashUsedBarriers.html",
        imgSrc: "assets/imagens/imagensProdutos/12-CorrugatedCrashUsedBarriers.webp",
        title: "Corrugated Crash Used Barriers"
    },
    {
        href: "assets/html/productsCardPage/Coupliers.html",
        imgSrc: "assets/imagens/imagensProdutos/13-Coupliers.webp",
        title: "Coupliers"
    },
    {
        href: "assets/html/productsCardPage/CrowdPedestrianBarriers.html",
        imgSrc: "assets/imagens/imagensProdutos/14-CrowdPedestrianBarriers.webp",
        title: "Crowd/Pedestrian Barriers"
    },
    {
        href: "assets/html/productsCardPage/DiagonalBarriersl.html",
        imgSrc: "assets/imagens/imagensProdutos/15-DiagonalBarriers.webp",
        title: "Diagonal Barriers"
    },
    {
        href: "assets/html/productsCardPage/DropPinHurdles.html",
        imgSrc: "assets/imagens/imagensProdutos/16-DropPinHurdles.webp",
        title: "Drop Pin Hurdles"
    },
    {
        href: "assets/html/productsCardPage/FeedingBarriers.html",
        imgSrc: "assets/imagens/imagensProdutos/17-FeedingBarriers.webp",
        title: "Feeding Barriers"
    },
    {
        href: "assets/html/productsCardPage/FrontDraftingGate.html",
        imgSrc: "assets/imagens/imagensProdutos/18-FrontDraftingGate.webp",
        title: "Front Drafting Gate"
    },
    {
        href: "assets/html/productsCardPage/GalvanizedPins.html",
        imgSrc: "assets/imagens/imagensProdutos/19-GalvanizedPins.webp",
        title: "Galvanized Pins"
    },
    {
        href: "assets/html/productsCardPage/GateHangers.html",
        imgSrc: "assets/imagens/imagensProdutos/20-GateHangers.webp",
        title: "Gate Hanger"
    },
    {
        href: "assets/html/productsCardPage/HangOnRacksSolidBars.html",
        imgSrc: "assets/imagens/imagensProdutos/21-HangOnRacksSolidBars.webp",
        title: "Hang on Racks Solid Bars"
    },
    {
        href: "assets/html/productsCardPage/HangingPost.html",
        imgSrc: "assets/imagens/imagensProdutos/22-HangingPost.webp",
        title: "Hanging Post"
    },
    {
        href: "assets/html/productsCardPage/HeavyDutySledgeHurdles.html",
        imgSrc: "assets/imagens/imagensProdutos/23-HeavyDutySledgeHurdles.webp",
        title: "Heavy Duty Sledge Hurdles"
    },
    {
        href: "assets/html/productsCardPage/HotDippedGalvanizedTrestles.html",
        imgSrc: "assets/imagens/imagensProdutos/24-HotDippedGalvanizedTrestles.webp",
        title: "Hot Dipped Galvanized Trestles"
    },
    {
        href: "assets/html/productsCardPage/LargeBucketHolders.html",
        imgSrc: "assets/imagens/imagensProdutos/25-LargeBucketHolders.webp",
        title: "Large Bucket Holders"
    },
    {
        href: "assets/html/productsCardPage/LargeDoubleSidedHayBaskets.html",
        imgSrc: "assets/imagens/imagensProdutos/26-LargeDoubleSidedHayBaskets.webp",
        title: "Large Double Sided Hay Baskets"
    },
    {
        href: "assets/html/productsCardPage/MedBucketHolders.html",
        imgSrc: "assets/imagens/imagensProdutos/28-MedBucketHolders.webp",
        title: "Med Bucket Holders"
    },
    {
        href: "assets/html/productsCardPage/MedDoubleSideHayBaskets.html",
        imgSrc: "assets/imagens/imagensProdutos/29-MedDoubleSideHayBaskets.webp",
        title: "Med Double Side Hay Baskets"
    },
    {
        href: "assets/html/productsCardPage/RubberBlocks.html",
        imgSrc: "assets/imagens/imagensProdutos/30-RubberBlocks.webp",
        title: "Rubber Blocks"
    },
    {
        href: "assets/html/productsCardPage/Scaffolding.html",
        imgSrc: "assets/imagens/imagensProdutos/31-Scaffolding.webp",
        title: "Scaffolding"
    },
    {
        href: "assets/html/productsCardPage/SheepScalesCW200kgSalterClock.html",
        imgSrc: "assets/imagens/imagensProdutos/32-SheepScalesCW200kgSalterClock.webp",
        title: "Sheep Scales c/w 200kg Salter Clock"
    },
    {
        href: "assets/html/productsCardPage/SpringLoadedNonReturnGate.html",
        imgSrc: "assets/imagens/imagensProdutos/33-SpringLoadedNonReturnGate.webp",
        title: "Spring Loaded Non Return Gate"
    },
    {
        href: "assets/html/productsCardPage/TemporaryFences.html",
        imgSrc: "assets/imagens/imagensProdutos/34-TemporaryFences.webp",
        title: "Temporary Fences"
    },
    {
        href: "assets/html/productsCardPage/UJoiner.html",
        imgSrc: "assets/imagens/imagensProdutos/35-UJoiner.webp",
        title: "UJoiner"
    },
    {
        href: "assets/html/productsCardPage/UkSpecHurdles.html",
        imgSrc: "assets/imagens/imagensProdutos/36-UkSpecHurdles.webp",
        title: "Uk Spec Hurdles"
    },
    {
        href: "assets/html/productsCardPage/VMeshFencing.html",
        imgSrc: "assets/imagens/imagensProdutos/37-VMeshFencing.webp",
        title: "V Mesh Fencing"
    },
    {
        href: "assets/html/productsCardPage/WaterBowl.html",
        imgSrc: "assets/imagens/imagensProdutos/39-WaterBowl.webp",
        title: "Water Bowl"
    }
];

// Função para criar um cartão de produto
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
    img.alt = product.imgAlt;

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

// Função para carregar os produtos na página
function loadProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

// Executa a função loadProducts quando o conteúdo da página é carregado
document.addEventListener('DOMContentLoaded', loadProducts);


