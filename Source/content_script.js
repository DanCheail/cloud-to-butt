walk(document.body);

function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;

    v = v.replace(/\bWitnesses\b/g, "These dues I know");
    v = v.replace(/\bwitnesses\b/g, "these dues I know");

    v = v.replace(/\bAllegedly\b/g, "Kinda probably");
    v = v.replace(/\ballegedly\b/g, "kinda probably");

    v = v.replace(/\bNew study\b/g, "Tumblr post");
    v = v.replace(/\bnew study\b/g, "Tumblr post");

    v = v.replace(/\bRebuild\b/g, "Avenge");
    v = v.replace(/\brebuild\b/g, "avenge");

    v = v.replace(/\bSpace\b/g, "Spaaace");
    v = v.replace(/\bspace\b/g, "spaaace");

    v = v.replace(/\bGoogle glass\b/ig, "Virtual Boy");

    v = v.replace(/\bsmartphone/g, "Pokedex");
    v = v.replace(/\bSmartphone/g, "Pokédex");

    v = v.replace(/\bElectric\b/g, "Atomic");
    v = v.replace(/\belectric\b/g, "atomic");

    v = v.replace(/\bSenator/g, "Elf-lord");
    v = v.replace(/\bsenator/g, "Elf-lord");

    v = v.replace(/\bCar\b/g, "Cat");
    v = v.replace(/\bcar\b/g, "cat");

    v = v.replace(/\bElection\b/g, "Eating Contest");
    v = v.replace(/\belection\b/g, "eating contest");

    v = v.replace(/\bCongressional [Ll]eaders\b/g, "River Spirits");

    v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");

    v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");

    textNode.nodeValue = v;
}


