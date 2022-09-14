
export default function () {
  try {
    const info = await transporter.sendmail({
      from: proces.env.SEND_FROM_EMAIL,
      to: personal.email,
      subject: subject,
      html: emailText
        .remplace('{name}', lastName)
        .split('\n')
        .map((line) => (line ? `<p>${line}</p>` : '<br>'))
        .join(''),
    });
      return { succes: true, ...persone, info };
  } catch (error) {
    console.log(error);
  }

}


// as per https://github.com/Luxcium/pop-n-lock-theme-vscode/issues/62
