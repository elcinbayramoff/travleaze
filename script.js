const graph = {
    'Abşeron': ['Bakı', 'Sumqayıt', 'Xızı', 'Qobustan', 'Hacıqabul'], 
    'Ağstafa': ['Qazax', 'Tovuz'], 
    'Ağcabədi': ['Bərdə', 'Zərdab', 'Füzuli', 'Ağdam', 'Xocavənd', 'Beyləqan'], 
    'Ağdaş': ['Bərdə', 'Yevlax', 'Qəbələ', 'Göyçay', 'Ucar', 'Zərdab','Şəki'], 
    'Ağdam': ['Xocalı', 'Kəlbəcər', 'Tərtər', 'Bərdə', 'Ağcabədi', 'Xocavənd'], 
    'Ağsu': ['Şamaxı', 'Hacıqabul', 'Kürdəmir', 'İsmayıllı'], 
    'Astara': ['Lənkəran', 'Lerik'], 
    'Bakı': ['Salyan', 'Hacıqabul', 'Abşeron', 'Sumqayıt'], 
    'Babək': ['Kəngərli', 'Şahbuz', 'Culfa', 'Naxçıvan','Zəngəzur'], 
    'Balakən': ['Zaqatala'], 
    'Bərdə': ['Yevlax', 'Ağdaş', 'Zərdab', 'Ağcabədi', 'Ağdam', 'Tərtər'], 
    'Beyləqan': ['Ağcabədi', 'Zərdab', 'Füzuli', 'İmişli'], 
    'Biləsuvar': ['İmişli', 'Saatlı', 'Sabirabad', 'Salyan', 'Neftçala', 'Cəlilabad'], 
    'Cəbrayıl': ['Zəngilan', 'Qubadlı', 'Xocavənd', 'Füzuli'], 
    'Cəlilabad': ['Biləsuvar', 'Salyan', 'Neftçala', 'Masallı', 'Yardımlı'], 
    'Culfa': ['Babək', 'Şahbuz', 'Ordubad','Zəngəzur'], 
    'Daşkəsən': ['Şəmkir', 'Kəlbəcər', 'Gədəbəy', 'Göygöl'], 
    'Füzuli': ['Cəbrayıl', 'Xocavənd', 'Ağcabədi', 'Beyləqan'],
    'Gəncə': ['Göygöl', 'Samux'], 
    'Gədəbəy': ['Tovuz', 'Şəmkir', 'Daşkəsən'], 
    'Goranboy': ['Samux', 'Göygöl', 'Kəlbəcər', 'Tərtər', 'Yevlax'], 
    'Göyçay': ['İsmayıllı', 'Kürdəmir', 'Ucar', 'Ağdaş','Qəbələ'], 
    'Göygöl': ['Gəncə', 'Samux', 'Goranboy', 'Kəlbəcər', 'Daşkəsən', 'Şəmkir'], 
    'Hacıqabul': ['Sabirabad', 'Kürdəmir', 'Ağsu', 'Şamaxı', 'Qobustan', 'Abşeron', 'Bakı', 'Salyan'], 
    'İmişli': ['Beyləqan', 'Zərdab', 'Kürdəmir', 'Sabirabad', 'Saatlı', 'Biləsuvar'], 
    'İsmayıllı': ['Quba', 'Şamaxı', 'Ağsu', 'Kürdəmir', 'Göyçay', 'Qəbələ'], 
    'Kəlbəcər': ['Daşkəsən', 'Göygöl', 'Goranboy', 'Tərtər', 'Ağdam', 'Xocalı', 'Laçın','Zəngəzur'], 
    'Kəngərli': ['Şərur', 'Babək','Zəngəzur'], 
    'Kürdəmir': ['Hacıqabul', 'Sabirabad', 'İmişli', 'Zərdab', 'Ucar', 'Göyçay', 'İsmayıllı', 'Ağsu'], 
    'Laçın': ['Kəlbəcər', 'Xocalı', 'Şuşa', 'Xocavənd', 'Qubadlı','Zəngəzur'], 
    'Lənkəran': ['Neftçala', 'Masallı', 'Lerik', 'Astara'], 
    'Lerik': ['Yardımlı', 'Masallı', 'Astara', 'Lənkəran'], 
    'Masallı': ['Lənkəran', 'Lerik', 'Yardımlı', 'Cəlilabad', 'Neftçala'], 
    'Mingəçevir': ['Yevlax'], 
    'Neftçala': ['Salyan', 'Biləsuvar', 'Cəlilabad', 'Masallı', 'Lənkəran'], 
    'Naxçıvan': ['Babək'], 
    'Oğuz': ['Şəki', 'Qəbələ'], 
    'Ordubad': ['Culfa','Zəngəzur'], 
    'Qəbələ': ['Oğuz', 'Qusar', 'Quba', 'İsmayıllı', 'Ağdaş', 'Göyçay','Şəki'], 
    'Qax': ['Zaqatala', 'Şəki', 'Yevlax', 'Samux'], 
    'Qazax': ['Ağstafa'], 
    'Quba': ['Qusar', 'Xaçmaz', 'Şabran', 'Şamaxı', 'İsmayıllı', 'Qəbələ'], 
    'Qubadlı': ['Laçın', 'Zəngilan', 'Xocavənd', 'Cəbrayıl','Zəngəzur'], 
    'Qobustan': ['Şamaxı', 'Xızı', 'Abşeron', 'Hacıqabul'], 
    'Qusar': ['Qəbələ', 'Quba', 'Xaçmaz'], 
    'Sabirabad': ['Saatlı', 'İmişli', 'Kürdəmir', 'Hacıqabul', 'Salyan', 'Biləsuvar'], 
    'Sədərək': ['Şərur'], 
    'Şahbuz': ['Babək', 'Culfa','Zəngəzur'], 
    'Şəki': ['Qax', 'Yevlax', 'Ağdaş', 'Qəbələ', 'Oğuz'], 
    'Salyan': ['Hacıqabul', 'Neftçala', 'Biləsuvar', 'Sabirabad', 'Bakı', 'Cəlilabad'], 
    'Şərur': ['Sədərək', 'Kəngərli','Zəngəzur'], 
    'Saatlı': ['Biləsuvar', 'İmişli', 'Sabirabad'], 
    'Şabran': ['Quba', 'Xaçmaz', 'Siyəzən','Şamaxı','Xızı'], 
    'Siyəzən': ['Şabran', 'Xızı'], 
    'Şəmkir': ['Tovuz', 'Gədəbəy', 'Daşkəsən', 'Göygöl', 'Samux'], 
    'Sumqayıt': ['Xızı', 'Abşeron', 'Bakı'], 
    'Şamaxı': ['Şabran', 'Quba', 'İsmayıllı', 'Ağsu', 'Hacıqabul', 'Qobustan', 'Xızı'], 
    'Samux': ['Gəncə', 'Göygöl', 'Şəmkir', 'Tovuz', 'Qax', 'Yevlax', 'Goranboy'], 
    'Şuşa': ['Xocalı', 'Xocavənd', 'Laçın'], 
    'Tərtər': ['Ağdam', 'Goranboy', 'Yevlax', 'Bərdə','Kəlbəcər'], 
    'Tovuz': ['Ağstafa', 'Şəmkir', 'Gədəbəy', 'Samux'], 
    'Ucar': ['Göyçay', 'Kürdəmir', 'Zərdab', 'Ağdaş'], 
    'Xaçmaz': ['Qusar', 'Quba', 'Şabran'], 
    'Xocalı': ['Laçın', 'Kəlbəcər', 'Ağdam', 'Xocavənd', 'Şuşa'], 
    'Xızı': ['Siyəzən', 'Quba', 'Şamaxı', 'Qobustan', 'Abşeron','Şabran','Sumqayıt'], 
    'Xocavənd': ['Ağdam', 'Ağcabədi', 'Füzuli', 'Cəbrayıl', 'Qubadlı', 'Laçın', 'Şuşa', 'Xocalı'], 
    'Yardımlı': ['Lerik', 'Masallı', 'Cəlilabad'], 
    'Yevlax': ['Ağdaş', 'Bərdə', 'Tərtər', 'Goranboy', 'Samux', 'Qax', 'Şəki','Mingəçevir'], 
    'Zəngilan': ['Qubadlı', 'Cəbrayıl','Zəngəzur'], 
    'Zaqatala': ['Balakən', 'Qax'], 
    'Zərdab': ['Ucar', 'Ağdaş', 'Bərdə', 'Ağcabədi', 'Beyləqan', 'İmişli', 'Kürdəmir'],
    'Zəngəzur': ['Kəlbəcər', 'Laçın', 'Qubadlı', 'Zəngilan', 'Ordubad', 'Culfa','Şahbuz','Babək','Kəngərli','Şərur']
    };
const titleid= {
    "Abşeron": "AZ-ABS",
    "Ağstafa": "AZ-AGA",
    "Ağcabədi": "AZ-AGC",
    "Ağdaş": "AZ-AGS",
    "Ağdam": "AZ-AGM",
    "Ağsu": "AZ-AGU",
    "Astara": "AZ-AST",
    "Bakı": "AZ-BA",
    "Babək": "AZ-BAB",
    "Balakən": "AZ-BAL",
    "Bərdə": "AZ-BAR",
    "Beyləqan": "AZ-BEY",
    "Biləsuvar": "AZ-BIL",
    "Cəbrayıl": "AZ-CAB",
    "Cəlilabad": "AZ-CAL",
    "Culfa": "AZ-CUL",
    "Daşkəsən": "AZ-DAS",
    "Füzuli": "AZ-FUZ",
    "Gəncə": "AZ-GA",
    "Gədəbəy": "AZ-GAD",
    "Goranboy": "AZ-GOR",
    "Göyçay": "AZ-GOY",
    "Göygöl": "AZ-GYG",
    "Hacıqabul": "AZ-HAC",
    "İmişli": "AZ-IMI",
    "İsmayıllı": "AZ-ISM",
    "Kəlbəcər": "AZ-KAL",
    "Kəngərli": "AZ-KAN",
    "Kürdəmir": "AZ-KUR",
    "Laçın": "AZ-LAC",
    "Lənkəran": "AZ-LAN",
    "Lerik": "AZ-LER",
    "Masallı": "AZ-MAS",
    "Mingəçevir": "AZ-MI",
    "Neftçala": "AZ-NEF",
    "Naxçıvan": "AZ-NV",
    "Oğuz": "AZ-OGU",
    "Ordubad": "AZ-ORD",
    "Qəbələ": "AZ-QAB",
    "Qax": "AZ-QAX",
    "Qazax": "AZ-QAZ",
    "Quba": "AZ-QBA",
    "Qubadlı": "AZ-QBI",
    "Qobustan": "AZ-QOB",
    "Qusar": "AZ-QUS",
    "Sabirabad": "AZ-SAB",
    "Sədərək": "AZ-SAD",
    "Şahbuz": "AZ-SAH",
    "Şəki": "AZ-SAK",
    "Salyan": "AZ-SAL",
    "Şərur": "AZ-SAR",
    "Saatlı": "AZ-SAT",
    "Şabran": "AZ-SBN",
    "Siyəzən": "AZ-SIY",
    "Şəmkir": "AZ-SKR",
    "Sumqayıt": "AZ-SM",
    "Şamaxı": "AZ-SMI",
    "Samux": "AZ-SMX",
    "Şuşa": "AZ-SUS",
    "Tərtər": "AZ-TAR",
    "Tovuz": "AZ-TOV",
    "Ucar": "AZ-UCA",
    "Xaçmaz": "AZ-XAC",
    "Xocalı": "AZ-XCI",
    "Xızı": "AZ-XIZ",
    "Xocavənd": "AZ-XVD",
    "Yardımlı": "AZ-YAR",
    "Yevlax": "AZ-YEV",
    "Zəngilan": "AZ-ZAN",
    "Zaqatala": "AZ-ZAQ",
    "Zərdab": "AZ-ZAR",
    "Zəngəzur":"AZ-ZGR"
}
function findShortestPath(graph, start, end) {
    if (start === end) {
        return [start];
    }

    let visited = new Set();
    let queue = [[start, [start]]];

    while (queue.length > 0) {
        let [currentCountry, path] = queue.shift();
        visited.add(currentCountry);
        for (let neighbor of graph[currentCountry]) {
            if (neighbor === end) {
                return [...path, neighbor];
            }

            if (!visited.has(neighbor)) {
                queue.push([neighbor, [...path, neighbor]]);
                visited.add(neighbor);
            }
        }
    }

    return null;  // No path found
}
function shortestResult(array,start,end){
    var tempGraph = {};
    for(var i=0;i<array.length;i++){
        var a = graph[array[i]];
        var b=[];
        for(var j=0;j<a.length;j++){
            if(array.includes(a[j])){
                b.push(a[j]);
            }
        }
        tempGraph[array[i]]=b;
    }
    return findShortestPath(tempGraph,start,end);
}
const startindex = Math.floor(Math.random()*71);

function isAdjacentTo(main,region) {
    const adjacentVerticesOfAbseron = graph[main];
    return adjacentVerticesOfAbseron.includes(region);
}
function endfinder(startKey){
    var ender = Math.floor(Math.random()*71);
    var ending = Object.keys(titleid)[ender];
    console.log("Ending:",ending); 
    if(isAdjacentTo(startKey,ending) || startKey===ending){
        console.log("Ender: ")
        return endfinder(startKey);
        
    }
    console.log(ending);
    return ending;
}

const startKey = Object.keys(titleid)[startindex];
console.log("Starting:",startKey);
var endKey = endfinder(startKey);
const shortestPath = findShortestPath(graph, startKey, endKey);
const numberofshortestpath = shortestPath.length;
var allowednumberofpath = Math.round(shortestPath.length*1.4);
const FromTo = 'From '+startKey+' to '+endKey;
document.getElementById('fromto').innerText=FromTo;
var neighbors = [startKey];
var notneighbors = [endKey];
var allregions = [];
function loadAndManipulateSVG() {
    fetch("azerbaijan.svg")
    .then(response => response.text())
    .then(svgText => {
        var parser = new DOMParser();
        var svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        var allElements = svgDoc.documentElement.querySelectorAll("*");

        allElements.forEach(function(element) {
            element.style.display = 'none';
        });
        var starting = svgDoc.getElementById(titleid[startKey]);
        starting.style.display = 'block';
        starting.setAttribute("fill","green");

        var ending = svgDoc.getElementById(titleid[endKey]);
        ending.style.display = 'block';
        ending.setAttribute("fill","black");

        document.getElementById("svgContainer").appendChild(svgDoc.documentElement);
    })
    .catch(error => console.error("Error loading SVG:", error));
}
loadAndManipulateSVG();
function checknotneighbors(){
    var changed=[];
    for(var i=0;i<notneighbors.length;i++){
        for(var j=0;j<neighbors.length;j++){
            if(isAdjacentTo(neighbors[j],notneighbors[i])){
                changed.push(notneighbors[i]);
                console.log("Changed:",changed)
            }
        }
    }
    for(var k=0;k<changed.length;k++){
        console.log("Changed k :",changed[k]);
        index = notneighbors.indexOf(changed[k]);
        var element = document.getElementById(titleid[changed[k]]);
        var title = element.getAttribute('title');
        element.setAttribute('fill', 'green');
        notneighbors.splice(index, 1);
        if (!neighbors.includes(title)) {
            neighbors.push(title); 
        }
        
        checknotneighbors();
    };

}
document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
let counter=0;
function showSVGPart() {
    var inputfield =document.getElementById("svgPartInput");
    var title = inputfield.value;
    inputfield.value="";
    inputfield.focus();
    var partID = titleid[title];
    var partElement = document.getElementById(partID)
    if(allowednumberofpath>0 && !neighbors.includes(endKey) && partElement){
        counter++;
        const listItem = document.createElement("li");
        const nameList = document.getElementById("nameList");
        listItem.textContent = counter + ") " + title;
        nameList.appendChild(listItem);
    allowednumberofpath=allowednumberofpath-1;
    document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
    let isneighbor = false;
    if (partElement) {
        const title = partElement.getAttribute('title');
        allregions.push(title);
        partElement.style.display = 'block';
        console.log(title);
        for (var i = 0; i < neighbors.length; i++) {
            if (isAdjacentTo(neighbors[i], title)) {
                partElement.setAttribute('fill', 'green');
                if (!neighbors.includes(title)) {
                    neighbors.push(title); 
                    isneighbor=true;
                }
                if(notneighbors.includes(title)){
                    notneighbors = notneighbors.filter(value=> value!==title)
                }
                console.log(notneighbors);
                console.log(neighbors);
                checknotneighbors();
                break; 
            }
        }
        if(!isneighbor && !notneighbors.includes(title)){
            notneighbors.push(title);
        }
        if(neighbors.includes(endKey)){
            var element =document.getElementById('fromto');
            element.innerText=shortestResult(neighbors,startKey,endKey);
            const pathElements = document.getElementsByTagName("path");
            for (let i = 0; i < pathElements.length; i++) {
                pathElements[i].style.display = "block";
            }
            for (let i = 0; i < notneighbors.length; i++) {
                var element = document.getElementById(titleid[notneighbors[i]]);
                element.setAttribute('fill','gray');
            }
        }
        else if(allowednumberofpath===0){
            document.createElement('p').innerText="You didn't won"
        }
    } else {
        console.error("Element with ID '" + partID + "' not found in the SVG.");
    }
}
else if(!partElement){
    console.error("Element with ID '" + partID + "' not found in the SVG.");
}
}