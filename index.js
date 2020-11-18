window.onload = function () {
    var list = document.getElementById("listArray");

    function shuffle(items) {
        var cached = items, temp, i = cached.length, rand;
        while (--i) {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }

    function sort(items) {
        return items.sort((a, b) => a.innerHTML - b.innerHTML);
    }

    function shuffleButtons() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }

    function sortButtons() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = sort(nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }

    document.getElementById("shuffleButton").onclick = shuffleButtons;
    document.getElementById("sortButton").onclick = sortButtons;

} 