function Footer()
{
    return(
        <div class="row bg-secondary">
            <div class="col-4">
                <h2 class="text-secordary">Support</h2>
                <p>Tech support</p>
                <p>Non-tech support</p>
                <p>Customer care</p>
            </div>

            <div class="col-4">
                <h2 class="text-secordary">Title</h2>
                <p>Sub-title1</p>
                <p>Sub-title2</p>
                <p>Sub-title3</p>
            </div>

            <div class="col-4">
                <h2 class="text-secordary">Social media</h2>
                <i class="p-3 fa-brands fa-xl text-info fa-facebook"></i>Meta <br/>
                <i class="p-3 fa-brands fa-xl text-success fa-whatsapp"></i>whatsapp <br/>
                <i class="p-3 fa-brands fa-xl text-danger fa-instagram"></i>instagram <br/>
                <i class="p-3 fa-brands fa-xl text-primary fa-linkedin"></i>linkedin
            </div>
        </div>
    )
}

export default Footer;