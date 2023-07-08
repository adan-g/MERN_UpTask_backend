import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {

  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const info = await transport.sendMail({
    from: '"UPTASK - Administra tu cuenta"',
    to: email,
    subject: "Uptask - comprueba",
    taxt: "Comprueba",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask<p/>
    <p>Tu cuenta ya estas casi lista, solo debes comprobarla en el siguiente enlace:
      <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
    </p>`
  })
}

export const emailOlvidePassword = async (datos) => {

  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const info = await transport.sendMail({
    from: '"UPTASK - Administra tu cuenta"',
    to: email,
    subject: "Uptask - Reestablce tu password",
    taxt: "Reestablece tu password",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password<p/>
    <p>Sigue el siguiente enlace para generar un nuevo password:
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a>
    </p>`
  })
}