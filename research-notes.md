# Research notes

The Sutta Pittaka tree is an array of dictionaries stored in JSON format.

This JSON file has been borrowed from Bikkhu Cittadhammo's excellent [DhammaCharts on the Sutta Pittaka](https://observablehq.com/embed/ed215448fbc203b6).

It has the following structure:
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
The suttas can be found in terminal branches, or leaves. These are branches whose `id` field occurs in no other branches' `parentId` field.

Because the `id` is unique, we can match each leaf to a single corresponding JSON file in the bilara-data sub-directory of the [sc-data repository](https://github.com/suttacentral/sc-data).
Theses sutta files are in JSON format with the following structure:
```
{
  "dn19:0.1": "Dīgha Nikāya 19 ",
  "dn19:0.2": "Mahāgovindasutta ",
  "dn19:1.1": "Evaṁ me sutaṁ—",
  "dn19:1.2": "ekaṁ samayaṁ bhagavā rājagahe viharati gijjhakūṭe pabbate. "
}
```
The example above is located at:
```
sc-data/sc_bilara_data/root/pli/ms/sutta/dn/dn19_root-pli-ms.json
```
What we're looking for is the total text length for each sub branch. 
Below is an example of a tree  with a root `A1` , regular branches `B1` and `B2` and leaves `C1`, `C2`, `C3`, `C4`.
```
A1
├── B1
│   ├── C1
│   ├── C2
├── B2
│   ├── C3
│   ├── C4
```

By getting the length of the text inside C1 and C2 individually,then summing them, we obtain the text length of the B1 branch. We do similar operation to obtain the text-length of the B2. With B1 and B2 we can.
In this example, the depth of the tree is 3, but it may not be known in advance. Hence, to get the branch text length over the entire Sutta Pittaka tree, we need a recursive approach. 
The details for this and the Python implementation will be found in `text-length.md`. 
Continuing with our example, we will obtain such a tree. 
```
A1 (1000)
├── B1 (600)
│   ├── C1 (400)
│   ├── C2 (200)
├── B2 (400)
│   ├── C3 (300)
│   ├── C4 (100)
```
The next step involves making this tree structure correspond to a geographical hierarchy.
We will settle with 5 levels, namely:
```
├── continents
│   ├── countries
│   │   ├── regions
│   │   │   ├── cities
│   │   │   │   ├── small towns
```
Each Sutta tree branch, leaves included, will have a category in this geographical hierarchy assigned to it based on its text length. 

For example, the rule:
- continent: 1000 -  700 characters
- region:  699 - 500 characters
- city: 499 - 300 character
- small town: 299 - 0 characters

Would result in this structure
```
A1 (1000, continent)
├── B1 (600, region)
│   ├── C1 (400, city)
│   ├── C2 (200, small town)
├── B2 (400, city)
│   ├── C3 (300, city)
│   ├── C4 (100, small town)
```

References:
Suttas:

- [Sutta Central - Ajahn Sujato (core contributor)](https://suttacentral.net)

Charts:
- [Dhamma Charts - Bikkhu Cittadhammo](https://www.dhammacharts.org/)

Cartography:
- https://meta.wikimedia.org/wiki/Wikivoyage/Geographical_hierarchy
