import React, { useState } from "react";
import { Button, Input, Modal, Popover, QRCode, Tooltip, message } from "antd";
import { FaCopy } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import axios from "axios";

const Deposit = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("");
  const [address, setAddress] = useState("");
  const { data: session } = useSession();

  const showModal = (e) => {
    setCurrency(e.currency);
    setAddress(e.address);
    setOpen(true);
  };

  const handleCopy = (e) => {
    global.navigator.clipboard.writeText(e);
    message.success("Copied to clipboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const trxid = e.target.trxid.value;
    const amount = e.target.amount.value;
    const email = session.user.email;
    const userName = session.user.name;
    const userId = session.user.id;
    const provider = currency;

    const data = { email, trxid, amount, provider, userName, userId };

    await axios
      .post("https://paraglive-backend.vercel.app/api/deposit", data)
      .then((response) => {
        if (response.data.status == "success") {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title:
              "Your deposit will be verified and credit will be added to your wallet.",
            showConfirmButton: false,
            timer: 2500,
          }).then(
            setTimeout(() => {
              router.reload();
            }, 500),
          );
        }
      });
  };

  return (
    <div>
      <div
        className='p-3 sm:w-[800px] m-auto my-10'
        style={{ background: "var(--surface)" }}
      >
        <h1
          className='text-2xl p-3 font-bold'
          style={{ color: "var(--success)" }}
        >
          Choose Diposit Option
        </h1>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5  '>
          <div
            className='border-2'
            onClick={() =>
              showModal({
                currency: "BTC",
                address: "1D41XWNDepQZ14PtVwSzygf2ymU4rLCCKj",
              })
            }
          >
            <img
              className='w-[100px] h-[100px] m-auto'
              src='/currency/btc.png'
            />
            <h2 className='text-center' style={{ color: "var(--text)" }}>
              BTC
            </h2>
          </div>
          {/* <div
            className='border-2'
            onClick={() =>
              showModal({
                currency: "USDT",
                address: "TDvE2zRwYDLL4h2BiRLbtQNAtHuf4V265t",
              })
            }
          >
            <img
              className='w-[100px] h-[100px] m-auto'
              src='/currency/usdt.png'
            />
            <h2 className='text-center' style={{ color: "var(--text)" }}>
              USDT
            </h2>
          </div>
          <div
            className='border-2'
            onClick={() =>
              showModal({
                currency: "LTC",
                address: "0xbcd4b2711240252955ace7189f8d2a65e77b6e00",
              })
            }
          >
            <img
              className='w-[100px] h-[100px] m-auto'
              src='/currency/ltc.png'
            />
            <h2 className='text-center' style={{ color: "var(--text)" }}>
              LTC
            </h2>
          </div>
          <div
            className='border-2'
            onClick={() =>
              showModal({
                currency: "DOGE",
                address: "0xbcd4b2711240252955ace7189f8d2a65e77b6e00",
              })
            }
          >
            <img
              className='w-[100px] h-[100px] m-auto'
              src='/currency/doge.svg'
            />
            <h2 className='text-center' style={{ color: "var(--text)" }}>
              DOGE
            </h2>
          </div>
          <div
            className='border-2'
            onClick={() =>
              showModal({
                currency: "ETH",
                address: "0xbcd4b2711240252955ace7189f8d2a65e77b6e00",
              })
            }
          >
            <img
              className='w-[100px] h-[100px] m-auto'
              src='/currency/eth.png'
            />
            <h2 className='text-center' style={{ color: "var(--text)" }}>
              ETH
            </h2>
          </div>
          <div
            className='border-2'
            onClick={() =>
              showModal({
                currency: "TRX",
                address: "TDvE2zRwYDLL4h2BiRLbtQNAtHuf4V265t",
              })
            }
          >
            <img
              className='w-[100px] h-[100px] m-auto'
              src='/currency/trx.png'
            />
            <h2 className='text-center' style={{ color: "var(--text)" }}>
              TRX
            </h2>
          </div> */}
        </div>
        <Modal
          title={`Deposit ${currency}`}
          open={open}
          onCancel={() => setOpen(false)}
          okButtonProps={{
            hidden: true,
          }}
          cancelButtonProps={{
            hidden: true,
          }}
        >
          <div
            className='m-auto p-2'
            style={{ background: "var(--surface-2)" }}
          >
            <p className='flex gap-2 items-center justify-center'>
              {address}
              <Tooltip title='copy'>
                <div onClick={() => handleCopy(`${address}`)}>
                  {" "}
                  <FaCopy className='text-xl cursor-pointer' />
                </div>
              </Tooltip>
            </p>
            <QRCode className='m-auto' value={address} />
          </div>
          <hr className='my-5' />
          <small>
            After completing the payment, please send us the transaction ID and
            the amount you have sent.
          </small>
          <hr className='my-5' />
          <form onSubmit={handleSubmit}>
            <label>Transaction ID</label>
            <input
              name='trxid'
              placeholder='Transaction ID'
              className='w-full mb-3'
              style={{ background: "var(--surface-2)", color: "var(--text)" }}
            />

            <label className='pt-5'>Amount</label>
            <input
              name='amount'
              placeholder='Amount you added'
              className='w-full'
              style={{ background: "var(--surface-2)", color: "var(--text)" }}
            />
            {loading ? (
              <button
                disabled
                className='mt-3 rounded-lg px-3 text-lg font-bold cursor-not-allowed'
                style={{
                  background: "var(--success)",
                  color: "#fff",
                  border: "1px solid var(--success)",
                }}
              >
                loading
              </button>
            ) : (
              <button
                type='submit'
                className='mt-3 rounded-lg px-3 text-lg font-bold btn-accent'
              >
                Submit
              </button>
            )}
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Deposit;
