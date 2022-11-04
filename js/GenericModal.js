var EKFC = EKFC || {};          // EKFC name space
EKFC.MDL = EKFC.MDL || {};      // EKFC Modal name space

EKFC.MDL.genericModalHTML = `
            <div class="modal fade" id="EKFC_GenericModal1" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-title">
                                <h5 class="">Modal Title<span class=""></span></h5>
                            </div>
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" data-bs-original-title="" title=""></button>
                        </div>
                        <div class="modal-body">
                            <div class='d-block'>
                            </div>
                            
                            <h6>Add modal body here</h6>

                            <div class="card">
                                <!-- <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Try No.</th>
                                                <th>Request</th>
                                                <th>Response </th>
                                            </tr>
                                        </thead>
                                        <tbody id="">
                                        </tbody>
                                    </table>
                                </div> -->
                                <!-- <iframe src="report-products-info-popup.html" style="border:none; height: 70vh;" title="Iframe Example"></iframe> -->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-secondary" type="button" data-bs-dismiss="modal" data-bs-original-title="" title="">Close</button>
                        </div>
                    </div>
                </div>
            </div>
`;


EKFC.MDL.showGenericModal = function(){
    $('body').find('#EKFC_GenericModal1').remove();
    $('body').append(EKFC.MDL.genericModalHTML);
    $("#EKFC_GenericModal1").modal("show");
}
EKFC.MDL.hideGenericModal = function(){
    $("#EKFC_GenericModal1").modal("hide");
}
EKFC.MDL.removeGenericModal = function(){
    $('body').find('#EKFC_GenericModal1').remove();
}