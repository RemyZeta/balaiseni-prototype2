// Shared data + renderer for collection.html and collection-detail.html.
// Metadata sourced from original image filenames (Artist · Title · Medium · Year).
const COLLECTION = [
    { id: "wayang-kertas", title: "The Mapping of Wayang Kertas", artist: "Mohd Azlan Mam Mohd Latib", medium: "Mixed Media", year: "2017", type: "mixed-media", dimensions: "122 × 91 cm", room: "Bilik 1 — Pameran Utama", image: "images/wayang-kertas-2017.jpg", description: "Wayang kertas — paper shadow-play — motifs are mapped and layered into a cartography of oral tradition; a landmark work of Malay narrative abstraction." },
    { id: "untitled-ahmad-shukri", title: "Untitled", artist: "Ahmad Shukri Mohamed", medium: "Mixed Media", year: "1999", type: "mixed-media", dimensions: "91 × 122 cm", room: "Bilik 1 — Pameran Utama", image: "images/untitled-1999-ahmad-shukri.jpg", description: "From the artist's early series on consumer culture and iconography, where emblems repeat until their meaning wears thin." },
    { id: "untitled-yee-i-lann", title: "Untitled", artist: "Yee I-Lann", medium: "Mixed Media", year: "2007", type: "mixed-media", dimensions: "100 × 150 cm", room: "Bilik 1 — Pameran Utama", image: "images/untitled-2007-yee-i-lann.jpg", description: "Part of an extended meditation on power, landscape, and the archive that has come to define the artist's practice." },
    { id: "untitled-multhalib", title: "Untitled", artist: "Abdul Multhalib Musa", medium: "Mixed Media", year: "n.d.", type: "mixed-media", dimensions: "50 × 40 × 30 cm", room: "Bilik 1 — Pameran Utama", image: "images/untitled-multhalib.jpg", description: "Undated and unmoored from series — Multhalib's forms climb the way water finds a path." },
    { id: "indahsati-no-1", title: "Indahsati No. 1", artist: "Ismail Latiff", medium: "Mixed Media on Paper", year: "n.d.", type: "mixed-media", dimensions: "76 × 56 cm", room: "Bilik 1 — Pameran Utama", image: "images/indahsati-no-1.jpg", description: "Indahsati — true beauty — the first of Ismail Latiff's luminous paper abstractions." },
    { id: "untitled-anurendra", title: "Untitled", artist: "Anurendra Jegadeva", medium: "Oil on Canvas", year: "1992", type: "oil", dimensions: "91 × 121 cm", room: "Bilik 2 — Galeri Utama", image: "images/untitled-1992-anurendra.jpg", description: "A figurative study from the years Anurendra served the gallery, balancing quiet observation with monumentality." },
    { id: "dua-pria", title: "2 Pria", artist: "Faiz ZA", medium: "Oil on Canvas", year: "2022", type: "oil", dimensions: "40 × 30 cm", room: "Bilik 2 — Galeri Utama", image: "images/2-pria-2022.jpg", description: "Two figures, one silence — a small-format portrait pairing presence with absence." },
    { id: "dua-sekawan", title: "2 Sekawan", artist: "Faiz ZA", medium: "Oil on Canvas", year: "2022", type: "oil", dimensions: "40 × 30 cm", room: "Bilik 2 — Galeri Utama", image: "images/2-sekawan-2022.jpg", description: "Painted companions side by side; the pair continue a conversation begun in 2 Pria." },
    { id: "serenity-market", title: "Serenity · Market", artist: "Tew Nai Tong", medium: "Oil on Canvas", year: "1981 / 1992", type: "oil", dimensions: "60 × 90 cm (diptik)", room: "Bilik 2 — Galeri Utama", image: "images/serenity-market.jpg", description: "Serenity and Market — two states of the same street, painted a decade apart and reunited on one canvas." },
    { id: "madam", title: "Madam", artist: "Amy Nazira", medium: "Acrylic on Canvas", year: "2021", type: "acrylic", dimensions: "70 × 55 cm", room: "Bilik 2 — Galeri Utama", image: "images/madam-2021.jpg", description: "A seated portrait in acrylic — dignity rendered through a restrained palette and a steady gaze." },
    { id: "monsoon-series-3", title: "Monsoon Series 3", artist: "Suzlee Ibrahim", medium: "Acrylic on Canvas", year: "n.d.", type: "acrylic", dimensions: "91 × 91 cm", room: "Bilik 2 — Galeri Utama", image: "images/monsoon-series-3.jpg", description: "Rhythmic bands of colour gather like weather; the third movement in Suzlee's long-running Monsoon series." },
    { id: "the-clift", title: "The Clift", artist: "Faizal Suhif", medium: "Monoprint & Oil on Canvas", year: "2020", type: "print", dimensions: "76 × 56 cm", room: "Bilik 4 — Cetakan & Grafik", image: "images/the-clift-2020.jpg", description: "A monoprint plateau lifted from stencilled foliage — the city's cliff-face returns as print." },
    { id: "the-climb-ii", title: "The Climb II", artist: "Faizal Suhif", medium: "Monoprint & Stencil on Canvas", year: "2020", type: "print", dimensions: "76 × 56 cm", room: "Bilik 4 — Cetakan & Grafik", image: "images/the-climb-ii-2020.jpg", description: "The second ascent: stencil and oil build a ridge that is equal parts plant and skyscraper." },
    { id: "daun-series", title: "Daun Series", artist: "Juhari Said", medium: "Print on Paper", year: "n.d.", type: "print", dimensions: "50 × 40 cm", room: "Bilik 4 — Cetakan & Grafik", image: "images/daun-series.jpg", description: "Juhari Said's long meditation on the leaf — letter, sign, and blade — rendered in print." },
    { id: "bunga", title: "Bunga", artist: "Ho He Kim", medium: "Batik", year: "n.d.", type: "batik", dimensions: "90 × 60 cm", room: "Bilik 5 — Warisan Tekstil", image: "images/floral-batik.jpg", description: "Wax-resist blooms arranged with ceremonial calm; a modern classic of the batik revival." },
    { id: "orchid", title: "Orchid", artist: "Ho He Kim", medium: "Batik", year: "n.d.", type: "batik", dimensions: "90 × 60 cm", room: "Bilik 5 — Warisan Tekstil", image: "images/orchid-batik.jpg", description: "A single orchid held in wax and dye — the flower of many homes, painted in cloth." },
    { id: "penang-street-scene", title: "Penang Street Scene", artist: "Tan Choon Ghee", medium: "Watercolour", year: "1994", type: "watercolour", dimensions: "38 × 28 cm", room: "Bilik 3 — Koleksi Sejarah", image: "images/penang-street-scene-1994.jpg", description: "A Penang streetscape caught mid-errand; Choon Ghee's line spends nothing it cannot spare." },
    { id: "kampung-1962", title: "Kampung", artist: "Tan Choon Ghee", medium: "Watercolour", year: "1962", type: "watercolour", dimensions: "38 × 28 cm", room: "Bilik 3 — Koleksi Sejarah", image: "images/kampung-1962.jpg", description: "An early kampung scene from 1962 — attap, coconut palm, and still air." },
    { id: "bull-cart", title: "Bull Cart", artist: "A.B. Ibrahim", medium: "Watercolour", year: "n.d.", type: "watercolour", dimensions: "35 × 25 cm", room: "Bilik 3 — Koleksi Sejarah", image: "images/bull-cart.jpg", description: "A.B. Ibrahim's record of the bull cart — a mode of the kampung road, kept in watercolour." },
    { id: "busy-street", title: "Busy Street", artist: "Wong Kean Choon", medium: "Watercolour", year: "n.d.", type: "watercolour", dimensions: "38 × 28 cm", room: "Bilik 3 — Koleksi Sejarah", image: "images/busy-street.jpg", description: "Shophouses, umbrellas, and hurry — a street watercolour of a working morning." }
];

const TYPES = [
    { id: "all", label: "Semua" },
    { id: "mixed-media", label: "Mixed Media" },
    { id: "oil", label: "Oil" },
    { id: "watercolour", label: "Watercolour" },
    { id: "print", label: "Print" },
    { id: "acrylic", label: "Acrylic" },
    { id: "batik", label: "Batik" }
];

// Per-artist profile content for artist-detail.html (prototype copy).
const ARTISTS = {
    "A.B. Ibrahim": { quote: "A drawing should be finished before the light changes.", bio: "A pioneer-era watercolourist of the peninsula, A.B. Ibrahim recorded the rural economies that predate the motorcar — bull carts, kampung roads, river landings — with an engineer's line and a Romantic's wash.", origin: "Tanah Melayu", active: "1940an — 1960an" },
    "Abdul Multhalib Musa": { quote: "Form, like water, finds its own path.", bio: "Sculptor and mixed-media artist whose ribboning forms read as water, wind, and flight frozen mid-gesture. His public commissions can be found across the Klang Valley.", origin: "Malaysia", active: "1990an — kini" },
    "Ahmad Shukri Mohamed": { quote: "An icon repeated often enough begins to speak.", bio: "A founder-member of the Matahati collective, Ahmad Shukri has spent three decades interrogating consumer culture, faith, and iconography through repetition and erasure.", origin: "Malaysia", active: "1980an — kini" },
    "Amy Nazira": { quote: "A portrait is a long look, held.", bio: "A figurative painter of the gallery's youngest generation, working in acrylic on intimate formats — portraits that trade spectacle for a steady gaze.", origin: "Malaysia", active: "2010an — kini" },
    "Anurendra Jegadeva": { quote: "Paint the figure honestly and the story tells itself.", bio: "Painter, writer, and arts administrator at the centre of Kuala Lumpur's 1990s scene; his figurative canvases balance quiet observation with quiet monumentality.", origin: "Kuala Lumpur", active: "1980an — 2000an" },
    "Faiz ZA": { quote: "Two figures are a conversation; one is only a monologue.", bio: "Realist painter working in small-format oils — pairs and solitary figures rendered with miniature-painting patience.", origin: "Malaysia", active: "2010an — kini" },
    "Faizal Suhif": { quote: "The plant will always reclaim the wall.", bio: "Printmaker and lecturer whose monoprints and stencils stage the quiet war between tropical foliage and the city — cliff-faces of shophouse and fern.", origin: "Malaysia", active: "2000an — kini" },
    "Ho He Kim": { quote: "In wax, patience becomes pattern.", bio: "Batik master of the revival generation; ceremonial florals and single botanical studies, built wax-line by wax-line over dye baths.", origin: "Malaysia", active: "1960an — 1990an" },
    "Ismail Latiff": { quote: "Indahsati — beauty that is true before it is pretty.", bio: "Abstract painter whose long-running Indahsati series argues that beauty is a discipline before it is a pleasure, layering luminous fields on paper.", origin: "Malaysia", active: "1980an — kini" },
    "Juhari Said": { quote: "A leaf is a letter from the tree.", bio: "Printmaker and calligraphic artist, and a professor of fine art; his Daun works reduce the leaf to sign, letter, and blade over four decades.", origin: "Malaysia", active: "1980an — kini" },
    "Mohd Azlan Mam Mohd Latib": { quote: "Paper can carry shadow; shadow can carry story.", bio: "Painter of wayang kertas — paper shadow-play — who maps oral tradition into cartographies of line and negative space.", origin: "Malaysia", active: "2000an — kini" },
    "Suzlee Ibrahim": { quote: "The monsoon arrives the way colour does — all at once.", bio: "Abstract painter and educator; his Monsoon series translates weather into rhythm, band upon band of gathering colour.", origin: "Malaysia", active: "1990an — kini" },
    "Tan Choon Ghee": { quote: "Draw the line first; earn the colour after.", bio: "Penang's most beloved watercolourist; half a century of streets, jetties, and kampung recorded with an unerring economy of line.", origin: "Pulau Pinang", active: "1950an — 2000an" },
    "Tew Nai Tong": { quote: "Grace is a market woman pausing between errands.", bio: "Figurative painter remembered for graceful compositions of women and markets — a bridge between the watercolour and oil traditions.", origin: "Malaysia", active: "1960an — 2000an" },
    "Wong Kean Choon": { quote: "A street paints itself if you arrive early enough.", bio: "Watercolourist of the working street — shophouses, umbrellas, and morning hurry, caught before the light changes.", origin: "Malaysia", active: "1990an — kini" },
    "Yee I-Lann": { quote: "Landscape is never neutral; it is a document of power.", bio: "Kota Kinabalu-based artist whose practice in photography, weaving, and works on paper examines power, landscape, and the archive in Borneo and beyond.", origin: "Sabah", active: "1990an — kini" }
};

function collectionCardHTML(art) {
    return '<a href="collection-detail.html?id=' + art.id + '" class="flex flex-col gap-4 group cursor-pointer">' +
        '<div class="bg-surface border border-line p-[12px] w-full overflow-hidden">' +
        '<img class="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" alt="' + art.title + ' by ' + art.artist + '" src="' + art.image + '">' +
        '</div>' +
        '<div class="bg-surface border border-ink p-4 flex flex-col gap-2 shadow-sm w-fit md:-mt-8 md:ml-8 relative z-10">' +
        '<h3 class="font-headline-sm text-headline-sm text-on-surface leading-tight text-xl group-hover:text-primary transition-colors">' + art.title + '</h3>' +
        '<div class="font-label-mono text-label-mono text-ink-muted uppercase flex flex-col">' +
        '<span>' + art.artist + '</span>' +
        '<span>' + art.medium + ' &middot; ' + art.year + '</span>' +
        '</div>' +
        '</div>' +
        '</a>';
}
