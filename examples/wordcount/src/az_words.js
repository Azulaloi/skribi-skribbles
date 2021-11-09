function getCharacterCount(text) {
    return text.length;
}

function getSentenceCount(text) {
    var sentences = ((text || "").match(/[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/gm) || []).length;
    return sentences;
}

function getWords(text) {
    var spaceDelimitedChars = /A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/
        .source;
    var nonSpaceDelimitedWords = /[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u4E00-\u9FD5]{1}/
        .source;
    var pattern = new RegExp([
        "(?:[0-9]+(?:(?:,|\\.)[0-9]+)*|[\\-" + spaceDelimitedChars + "])+",
        nonSpaceDelimitedWords,
    ].join("|"), "g");
    return (text.match(pattern) || []);
}

function getWordCount(text) {
    return getWords(text).length
}

async function getWordCountInFiles(env, filesIn) {
    let files = filesIn ?? env.sk.ctx.app.vault.getMarkdownFiles()

    let reads = files.map(async (f) => {
        let read = await env.sk.ctx.app.vault.cachedRead(f)
        return Promise.resolve(read)
    })

    let values = await Promise.allSettled(reads).then((res) => {
        return res
        .filter((r) => { return r.status == "fulfilled" })
        .map((v) => { return v.value });
    })

    console.log(values)

    let countFiles = 0
    let countWords = 0
    let countCharacters = 0
    let countSentences = 0

    values.forEach((v) => {
        countFiles += 1
        countWords += getWordCount(v)
        countCharacters += getCharacterCount(v)
        countSentences += getSentenceCount(v)
    })

    return [[countFiles.toString(), countWords.toString(), countCharacters.toString(), countSentences.toString()]]
}

function getWordCountInTags(env, tags) {
    let searchFields = Array.isArray(tags) ? tags : tags.split(',')
	let outputs = new Array(); 
	
	for(let i = 0; i < searchFields.length; i++){
		let searchPages = env.int.dv.pages("#" + searchFields[i].trim());
		let text = new Array();
		let tagCountTexts = 0
		let tagCountWords = 0
		let tagCountCharacters = 0
		let tagCountSentences = 0
		let tagCountSub = 0

		for (let i=0; i < searchPages.length; i++){
			let pageFile = env.sk.ctx.plugin.app.vault.getAbstractFileByPath(searchPages[i].file.path);
			text.push([pageFile.unsafeCachedData, parseInt(searchPages[i].wcsub)]);
		};
		
		for (let x=0; x < text.length; x++){
			text[x][0] = text[x][0].replace(/(^\\s\*)|(\\s\*$)/gi,""); // remove the start and end spaces of the given string
			text[x][0] = text[x][0].replace(/\[ \]{2,}/gi," "); // reduce multiple spaces to a single space
			text[x][0] = text[x][0].replace(/\\n /,"\\n"); // exclude a new line with a start spacing

			tagCountWords += parseInt(getWordCount(text[x][0]) - 1);
			tagCountCharacters += parseInt(getCharacterCount(text[x][0]) - searchFields[i].length);
			tagCountSentences += parseInt(getSentenceCount(text[x][0]) - 1);
			tagCountTexts = x + 1;

			if (text[x][1]) { tagCountSub += parseInt(text[x][1]) }
		};
		
		outputs.push(["#"+searchFields[i].trim(), tagCountTexts.toString(), 
					  (tagCountWords - tagCountSub).toString(), tagCountCharacters.toString(), 
					  tagCountSentences.toString()]);
	};

	let totals = [0, 0, 0, 0, 0, 0]
	
	for(let i=0; i < outputs.length; i++){
		totals[0] = i+1;
		totals[1] += parseInt(outputs[i][1]);
		totals[2] += parseInt(outputs[i][2]);
		totals[3] += parseInt(outputs[i][3]);
		totals[4] += parseInt(outputs[i][4]);
	}
	outputs.push(["Sum (" + totals[0].toString() + ")", totals[1].toString(), totals[2].toString(), totals[3].toString(), totals[4].toString()]);

	return outputs;
}

async function getCountOfWords(sk, filesIn, exclusionsIn) {
    let exclusions = exclusionsIn ?? filterWords.concat(Object.keys(sk.ctx.app.metadataCache.getTags()).map((val) => {return val.slice(1)}))
    let files = filesIn ?? sk.ctx.app.vault.getMarkdownFiles()
    let words = {}

    let reads = files.map(async (f) => {
        let read = await sk.ctx.app.vault.cachedRead(f)
        return Promise.resolve(getWords(read))
    })

    let raw = await Promise.allSettled(reads).then((res) => {
        return res
        .filter((r) => { return r.status == "fulfilled" })
        .map((v) => { return v.value });
    })

    for (let r of raw) {
        for (let re of r) {
            let w = re.toLowerCase()
            words[w] = ((!!words[w]) ? words[w] + 1 : 1)
        }
    }

    let a = Object.entries(words).filter((val) => {
        if ((!exclusions.contains(val[0])) && (val[0].length > 1)) return val
    })
    let sorted = a.sort((a, b) => {return (b[1]-a[1])})
    
    return {
        words: sorted,
        length: sorted.length,
        top: sorted.slice(0, 100),
        json: JSON.stringify(sorted.slice(0, 100), null, " ")
    }
}

async function getCountOfWordsInTags(env, tags, exclusions) {
    let searchFields = Array.isArray(tags) ? tags : tags.split(',')
    let files = []
    for (let i = 0; i < searchFields.length; i++) {
        let searchPages = env.int.dv.pages("#" + searchFields[i].trim());
        let termFiles = []
        for (let i = 0; i < searchPages.length; i++) {
			termFiles.push(env.sk.ctx.plugin.app.vault.getAbstractFileByPath(searchPages[i].file.path))
        }
        termFiles.forEach((v) => {if (!files.contains(v)) files.push(v)})
    }
    return getCountOfWords(env.sk, files, exclusions)
}

const stopwords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]
const technicalwords = ["th", "td", "tr", "table", "ca", "span", "div", "hr", "id", "---", "https", "cssclass", "tags", "style", "class", "sk", "png", "jpg", "org", "com", "en", "wikipedia", "wiki"]
const userwords = ["like", "can", "also", "even", "may", "just"]
const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const filterWords = stopwords.concat(technicalwords).concat(userwords).concat(getWords(lipsum).map((v) => v.toLowerCase()))


module.exports = {_name: 'words', getCharacterCount, getSentenceCount, getWordCount, getWordCountInFiles, getWordCountInTags, getCountOfWords, getCountOfWordsInTags}