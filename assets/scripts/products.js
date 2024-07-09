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




document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/CorrugatedCrashUsedBarriers.webp';
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('imageProducts').src = '../../imagens/imagensProdutosPage/CorrugatedCrashUsedBarriers2.webp';
});







/*
// Dados dos produtos
const ProductsPage = [
    {
        imagem: "../../imagens/imagensProdutosPage/10ftCalfHurdles.webp",
        titulo: "10ft Calf Hurdles",
        caracteristicas: [
            "7 bar hurdles; Heavy box ends",
            "Double braced back and front to add maximum strength",
            "12mm lugs and 16mm pins to add maximum strength",
            "Also suitable for sheep"
        ]
    },
    {
        imagem: "../../imagens/imagensProdutosPage/10ftCattleHurdles.webp",
        titulo: "10ft Cattle Hurdles",
        caracteristicas: [
            "20 head space cattle round feeders",
            "Come with galvanised sheeting on the bottom",
            "Our feeders come in 4 pieces to give maximum strength",
            "Also suitable for sheep"
        ]
    }
];

// Função para renderizar os produtos em uma lista
function renderizarProdutos(produtos, containerSelector) {
    const container = document.querySelector(containerSelector);
    const ul = document.createElement('ul');
    ul.classList.add('list-unstyled');

    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.classList.add('mb-5');

        const img = document.createElement('img');
        img.classList.add('img-fluid');
        img.src = produto.imagem;
        img.alt = 'Imagem do Produto';

        const titulo = document.createElement('h3');
        titulo.classList.add('text-center', 'mb-4');
        titulo.textContent = produto.titulo;

        const caracteristicas = document.createElement('ul');
        caracteristicas.classList.add('list-unstyled');
        caracteristicas.style.listStyleType = 'circle';

        produto.caracteristicas.forEach(caracteristica => {
            const liCaracteristica = document.createElement('li');
            liCaracteristica.textContent = caracteristica;
            caracteristicas.appendChild(liCaracteristica);
        });

        li.appendChild(img);
        li.appendChild(titulo);
        li.appendChild(caracteristicas);

        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// Chama a função para renderizar os produtos na página específica
renderizarProdutos(ProductsPage, '.container-10ftCalfHurdles'); // Renderiza os produtos na div de 10ft Calf Hurdles
renderizarProdutos(ProductsPage, '.container-10ftCattleHurdles'); // Renderiza os produtos na div de 10ft Cattle Hurdles*/


