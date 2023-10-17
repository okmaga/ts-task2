interface TotalPriceProps {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}
const totalPrice = ({
  price,
  discount,
  isInstallment,
  months
}: TotalPriceProps) => {
  let amountDue: number;

  if (isInstallment) {
    const totalPayable = price * (1 - discount / 100);
    amountDue = Math.round(totalPayable / months);
  } else {
    amountDue = Math.round(price * (1 - discount / 100));
  }

  return amountDue;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12
});
console.log(price); // 6250
