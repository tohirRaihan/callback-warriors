# Callback Warriors
_Build your dream team with some master mind of programming_ - __[click here to create](https://callbackwarriors.netlify.app/)__

---

### What this App for
- Collection of top notch programmers
- We are here to protect any cyber attack
- You have a budget? Build your team

### Installing the App
- Download or clone this repository
- Open project root in terminal
- Give command __`npm install`__ and you are good to go

### Generate JSON data
Copy the code below and paste it in __[this website](https://www.json-generator.com/)__ and click `generate`

```
[
  '{{repeat(0, 100)}}',
  {
    _id: '{{objectId()}}',
    name: '{{firstName()}} {{surname()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    language: '{{random("C", "C++", "Java", "Python", "javaScript", "PHP", "Go", "C#", "Swift", "Dart", "Kotlin", "Rust", "Scala")}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}',
    image: 'https://randomuser.me/api/portraits/{{random("men", "women")}}/{{integer(1, 100)}}.jpg',
    salary: '{{integer(80000, 500000)}}'
  }
]
```
