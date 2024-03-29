const style = href => {
  const e = document.createElement('link')
  e.href = href
  e.rel = 'stylesheet'
  document.head.appendChild(e)
}

const script = src => {
  const e = document.createElement('script')
  e.src = src
  document.head.appendChild(e)
}

const init = () => {
  style('style.css')
  style('https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css')
  script('https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js')
}
init()

let map
const showMap = async (texts) => {
  const mapgl = mapboxgl
  mapgl.accessToken = 
    'pk.eyJ1IjoiaGZ1IiwiYSI6ImNsM3FtcWVjZzBidWgza3A3ajZzdjlnZDAifQ.wTaURNl4e3NMZHbw50LupQ'
  map = new mapgl.Map({
    container: 'map',
    hash: true,
    style: 'style.json',
    maxZoom: 19.6
  })
  map.addControl(new mapgl.NavigationControl())
  map.addControl(new mapgl.ScaleControl({
    maxWidth: 200, unit: 'metric'
  }))

  let voice = null
  for(let v of speechSynthesis.getVoices()) {
    console.log(v.name)
    if ([
      'Daniel',
      'Google UK English Male',
      'Microsoft Libby Online (Natural) - English (United Kingdom)'
    ].includes(v.name)) voice = v
  }

  map.on('load', () => {
  })
}

window.onload = () => {
  showMap()
}
