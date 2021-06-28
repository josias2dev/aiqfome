const style = document.createElement('link')
style.href = "https://cdn.jsdelivr.net/gh/josias2dev/aiqfome/inject/styles.css"
style.rel = "stylesheet"
document.head.appendChild(style)

const script = document.createElement('script')
script.src = "https://cdn.jsdelivr.net/gh/josias2dev/aiqfome/inject/inject.js"
document.head.appendChild(script)

const template = `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8916 0C25.8535 2.08714 25.8515 3.74482 25.8515 3.90737C25.7973 5.3764 26.9372 6.96182 28.7595 7.96124L28.8979 8.03751C29.8265 8.52391 30.7282 9.05985 31.5992 9.643C33.8328 10.9655 35.2316 13.723 35.2316 16.8276V34.8071C35.2316 35.5097 34.9525 36.1835 34.4557 36.6803C33.9589 37.1771 33.2851 37.4562 32.5825 37.4562C31.88 37.4562 31.2062 37.1771 30.7094 36.6803C30.2126 36.1835 29.9335 35.5097 29.9335 34.8071V17.2591V17.2209V17.1547C29.94 16.3478 29.6328 15.5699 29.0765 14.9853C28.1828 14.0682 27.1135 13.3405 25.9324 12.8456C24.7513 12.3508 23.4826 12.0989 22.202 12.1051C20.9214 12.1113 19.6552 12.3754 18.479 12.8816C17.3027 13.3878 16.2404 14.1258 15.3556 15.0515C14.8065 15.6322 14.5049 16.4038 14.5147 17.2029V35.3028V35.3329C14.3827 35.9754 14.0171 36.5461 13.4885 36.9345C12.96 37.3229 12.3061 37.5015 11.6535 37.4355C11.0009 37.3696 10.396 37.0639 9.95585 36.5776C9.51568 36.0913 9.27157 35.459 9.27077 34.8031V16.8276C9.27077 13.721 10.6756 10.9615 12.9273 9.62695C13.7904 9.04934 14.6841 8.51876 15.6044 8.03751L15.7429 7.96124C17.5631 6.95781 18.7051 5.37841 18.6489 3.92343C18.6489 3.75284 18.6489 2.08915 18.6087 0C13.0992 0.914018 8.13483 3.86655 4.70141 8.27135C1.26799 12.6761 -0.383387 18.211 0.0751706 23.777C0.533728 29.343 3.06868 34.533 7.1767 38.3165C11.2847 42.1 16.6653 44.2003 22.2502 44.2003C27.835 44.2003 33.2157 42.1 37.3237 38.3165C41.4317 34.533 43.9666 29.343 44.4252 23.777C44.8838 18.211 43.2324 12.6761 39.799 8.27135C36.3655 3.86655 31.4012 0.914018 25.8916 0ZM24.838 34.8131C24.8386 35.4957 24.5751 36.1521 24.1026 36.6448C23.6301 37.1374 22.9854 37.4282 22.3034 37.4562H22.203C21.5187 37.4308 20.8708 37.1413 20.3952 36.6485C19.9196 36.1558 19.6534 35.498 19.6523 34.8131V20.3838C19.6523 19.6961 19.9255 19.0366 20.4117 18.5503C20.898 18.0641 21.5575 17.7909 22.2452 17.7909C22.9328 17.7909 23.5924 18.0641 24.0786 18.5503C24.5649 19.0366 24.838 19.6961 24.838 20.3838V34.8131Z" fill="#00D26E"/>
</svg> `
console.log('teste')
const container = document.createElement('div')
container.classList = "mogo-button"
container.innerHTML = template
document.body.appendChild(container)

