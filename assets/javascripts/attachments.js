function addFile(inputEl, file, eagerUpload) {
    var attachmentsFields = $(inputEl).closest('.attachments_form').find('.attachments_fields');
    var addAttachment = $(inputEl).closest('.attachments_form').find('.add_attachment');
    var maxFiles = ($(inputEl).attr('multiple') == 'multiple' ? window.maxFileUploads : 1);

    if (attachmentsFields.children().length < maxFiles) {
        var attachmentId = addFile.nextAttachmentId++;
        var fileSpan = $('<span>', { id: 'attachments_' + attachmentId });
        var param = $(inputEl).data('param');
        if (!param) { param = 'attachments'; }

        fileSpan.append(
            $('<input>', { type: 'text', 'class': 'icon icon-attachment filename readonly', name: param +'[' + attachmentId + '][filename]', readonly: 'readonly' }).val(file.name),
            $('<input>', { type: 'text', 'class': 'description', name: param + '[' + attachmentId + '][description]', maxlength: 255, placeholder: $(inputEl).data('description-placeholder') }).toggle(!eagerUpload),
            $('<input>', { type: 'hidden', 'class': 'token', name: param + '[' + attachmentId + '][token]' }),
            $('<a>&nbsp</a>').attr({ href: "#", 'class': 'icon-only icon-del remove-upload' }).click(removeFile).toggle(!eagerUpload)
        ).appendTo(attachmentsFields);

        if ($(inputEl).data('description') == 0) {
            fileSpan.find('input.description').remove();
        }

        if (eagerUpload) {
            ajaxUpload(file, attachmentId, fileSpan, inputEl);
        }

        addAttachment.toggle(attachmentsFields.children().length < maxFiles);
        return attachmentId;
    }
    return null;
}

addFile.nextAttachmentId = 1;
