import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class Alert {
  async showSwal() {
    const MySwal = withReactContent(Swal);

    await MySwal.fire({
      title: 'Switch Address sucsessfull',
      icon: 'info',
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: undefined,
      customClass: {
        confirmButton: 'swal2-confirm'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Lanjutkan tindakan');
      } else if (result.isDismissed) {
        console.log('Batalkan tindakan');
      }
    });
  }

  async walletNotInstalled() {
    const walletNotInstalled = withReactContent(Swal);
    await walletNotInstalled.fire({
      title:'Wallet not installed',
      icon:'error'
    })
  }
}

export default new Alert();
