# Research notes

The Sutta Pittaka tree is an array of dictionaries stored in JSON format, with the following structure. 
This JSON file has been borrowed from Bikkhu Cittadhammo's excellent [DhammaCharts on the Sutta Pittaka](https://observablehq.com/embed/ed215448fbc203b6).

```
[
	{
		"id": "dn19",
		"parentId": "dn-mahavagga",
		"name": "Mahāgovindasutta",
		"nameEn": "The Great Steward ",
		"acro": "DN 19"
	},
]
```
Terminal branches, or leaves, are branches whose `id` field occurs in no other branches' `parentId` field. These leaves correspond to actual suttas.  
Because the `id` is unique, we can match each terminal branch to a single corresponding JSON file in the bilara-data sub-directory of the [sc-data repository](https://github.com/suttacentral/sc-data).
Theses sutta files are in JSON format with the following structure:
```
{
  "dn19:0.1": "Dīgha Nikāya 19 ",
  "dn19:0.2": "Mahāgovindasutta ",
  "dn19:1.1": "Evaṁ me sutaṁ—",
  "dn19:1.2": "ekaṁ samayaṁ bhagavā rājagahe viharati gijjhakūṭe pabbate. "
}
```
This is located at:
```
sc-data/sc_bilara_data/root/pli/ms/sutta/dn/dn19_root-pli-ms.json
```
After that correspondance

The following directory contains the translations of the acronyms of the suttas in english
```
/sc-data/sc_bilara_data/translation/en/sujato/name/sutta/an-name_translation-en-sujato.json
```

References:
Suttas:

- [Sutta Central - Ajahn Sujato (core contributor)](https://suttacentral.net)

Charts:
- [Dhamma Charts - Bikkhu Cittadhammo](https://www.dhammacharts.org/)

Cartography:
- https://meta.wikimedia.org/wiki/Wikivoyage/Geographical_hierarchy
