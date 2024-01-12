function searchTabHTML() {
    const cmt = document.createComment("   search device -Modal   ");
    const modal = document.createElement("div");
    const attrs = {class:"modal fade",id:"search-deviceModal","back-button-key":"",tabindex:"-1","aria-hidden":"true"}
    Object.keys(attrs).forEach(k=>modal.setAttribute(k,attrs[k]));

    modal.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">
      <button hidden type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-body">
            <form onsubmit="return false;"> <button type="submit" hidden></button>
                  <input id="search-device" list="names" type="search" name="query" placeholder="Latest iPhone" minlength="3" maxlength="50" autocomplete="off" required>
                  <datalist id="names"></datalist>
            </form>
            <p hidden>Network Error!</p>
      </div>
    </div>
  </div>    
`
    
    return modal
}
