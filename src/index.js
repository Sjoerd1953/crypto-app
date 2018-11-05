//Dit is een 'renderer process'
const { remote } = require('electron')
const { BrowserWindow } = remote
const path = require('path')


const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({
        frame: false,
        alwaysOnTop: true,
        width: 400,
        height: 200 })
        win.on('closed', () => {
            win = null
          })
    win.loadURL(modalPath)
    win.show()
  })