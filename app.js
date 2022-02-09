
let packages = [
  { heavy: false, priority: true, fragile: false, image: '/assets/images/Package.png', name: 'Zach', lost: false, Brand: 'Amazon' },
  { heavy: true, priority: false, fragile: true, image: '/assets/images/Package.png', name: 'Jonesy', lost: false, Brand: 'Costco' },
  { heavy: true, priority: true, fragile: false, image: '/assets/images/Package.png', name: 'Jake', lost: false, Brand: 'Costco' },
  { heavy: false, priority: false, fragile: false, image: '/assets/images/Package.png', name: 'Mark', lost: false, Brand: 'Wayfair' },
  { heavy: false, priority: false, fragile: true, image: '/assets/images/Package.png', name: 'Brittany', lost: false, Brand: 'Wayfair' },
  { heavy: true, priority: false, fragile: false, image: '/assets/images/Package.png', name: 'Mick', lost: false, Brand: 'Amazon' },
  { heavy: false, priority: true, fragile: true, image: '/assets/images/Package.png', name: 'Jeremy', lost: false, Brand: 'Ikea' }]


let search = []

function draw() {
  let template = ""
  for (let i = 0; i < search.length; i++) {
    const package = search[i];
    template += `

      <div class="col-md-3 d-flex justify-content-center">
        <div onclick="guess('${package.name}')">
          <img class="img-fluid" package-image src="${package.image}">
            <div class="p-2 text-center">
              <h3>${package.name}</h3>
            </div>
        </div>
      </div>
      `
  }
  document.getElementById('Box').innerHTML = template
}


function searchAgain() {
  packages.forEach(package => package.lost = false)

  const randIndex = Math.floor(Math.random() * packages.length)
  packages[randIndex].lost = true
  console.log(packages[randIndex])
  search = packages
  draw()
}



function filter(filteredProperty) {
  let lostPackage = packages.find(package => package.lost)
  search = search.filter(package => package[filteredProperty] === lostPackage[filteredProperty])
  draw()
}


function guess(name) {
  let lostPackage = packages.find(package => package.lost)
  if (lostPackage.name == name) {
    alert('Package found!')
  }
  else {
    alert('Wrong! Keep Searching!')
  }
}


searchAgain()
