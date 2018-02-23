$(function(){
        if (('#attachment-uploads').length > 0) {
            attachment_uploader = new qq.FileUploader({
                element: document.getElementById('attachment-uploads'),
                allowedExtensions: ['jpeg', 'jpg', 'png', 'bmp', 'gif'],
                action: "http://phongtot.vn/dang-tin/upload",
                debug: false,
                uploadButtonText: 'Thêm ảnh',
                multiple: true,
                onSubmit: function(e) {
                    this.params = {_token: 'Kh6N2T526QTSeOXVLJgvtgQ9RSgowdUSBF2zzmBU'};
                    $('#img-loading').show();
                },
                onComplete: function(id, fileName, responseJSON){
                    if (responseJSON.status) {
                        img = '<div class="col-md-3 image-item"><a href="javascript: void(0);" class="btn btn-xs btn-danger image-del">Xóa</a><div class="image-option  btn-xs btn-success"><input type="radio" name="thumb" id="img-input-'+responseJSON.link+'" value="'+responseJSON.link+'"><label for="img-input-'+responseJSON.link+'"> Đại diện</label></div><img src="http://phongtot.vn/'+responseJSON.link+'" class="img-responsive">';
                        img += '<input type="hidden" name="images[]" value="'+responseJSON.link+'"></div>';
                        $("#list-image").append(img);
                    } else {
                        $('#upload-error').html('<div class="alert alert-warning"><a href="javascript:void(0);" class="btn-xs btn-danger remove-alert"><i class="fa fa-times"></i></a> Lỗi: '+responseJSON.msg+'<br> Lỗi này có thể do mạng bạn quá chậm và dung lượng file lớn. Vui lòng thử lại bằng cách điều chỉnh giảm dung lượng ảnh và up lên từng file một.</div>');
                    }
                    $('#img-loading').hide();
                },
                uploadButtonText: 'Thêm ảnh',
            });
            $('#img_uploader .qq-upload-button').css({width: '160px', padding: '5px'});
            $('.qq-upload-list').remove();
        };
        $('body').on('click', '.remove-alert', function(e){
            e.preventDefault();
            $('#upload-error').html('');
        });
        $('body').on('click', '.image-del', function(e){
            e.preventDefault();
            if (!confirm('Bạn có chắc chắn muốn xóa ảnh này không ?')) {
                return false;
            }
            // var i = $(this);
            // var link = $(this).parent().find('img').attr('src');
            // $.ajax({
            //     type: 'POST',
            //     url: "http://phongtot.vn/dang-tin/xoa-anh",
            //     data: {_token: 'Kh6N2T526QTSeOXVLJgvtgQ9RSgowdUSBF2zzmBU', location: 'host', path: link},
            //     dataType: 'json',
            //     success: function(res){
            //         if (res.status) {
            //             i.parent().remove();
            //         } else {
            //             alert(res.msg);
            //         }
            //     },
            //     error: function(err){},
            // });
        });
    });
