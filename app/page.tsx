import './output.css'

export default function Home() {
  return (
    <main>
    <section
      className="relative flex flex-col items-center bg-[url(/assets/img/hero_bg.png)] bg-cover px-[min(300px,_10vw)] pt-16 pb-10 before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:bg-black/30 before:content-['.'] sm:items-start [&>*]:relative"
    >
      <div
        className="mx-auto flex items-center justify-between gap-5 sm:max-w-[1500px]"
      >
        <p
          className="relative z-[2] text-center text-5xl font-semibold leading-[1.12] text-white drop-shadow-[1px_1px_20px_rgba(255,255,255,0.3)] sm:text-left sm:text-[clamp(2rem,_4.9vw,_4.5rem)]"
        >
          Uma comunidade de estudo e pesquisa em João Pessoa<span
            className="text-7xl leading-[0] text-tailBlue sm:text-[clamp(2rem,_4.9vw,_4.5rem)]"
            >.</span>
          <span className="my-3 block text-[clamp(1rem,_1.8vw,_1.3rem)] font-light"
            >Nosso objetivo é fornecer um ambiente para a troca de
            conhecimento.</span>
        </p>
        <img
          src="/assets/img/hero.svg"
          alt="hero-image"
          className="absolute left-0 right-0 mx-auto max-h-[320px] text-center sm:relative sm:h-[clamp(200px,_34vw,_500px)] sm:max-h-[500px] sm:opacity-100"
        />
      </div>
      <button className="appearence-none text-white">
        <img src="/assets/img/down_arrow.svg" alt="" />
      </button>
    </section>

    <section
      className="flex w-full flex-col [box-shadow:inset_0px_5px_20px_3px_rgba(0,0,0,0.55)] sm:flex-row sm:justify-between [&>div]:grow-[1] [&>div]:[transition:_background_0.2s_ease] sm:[&>div]:p-[min(3rem,_2.5vw)] [&>div:hover]:bg-lightGray/20"
    >
      <div className="flex w-full justify-center py-5">
        <div className="flex basis-[262px] items-center gap-5 sm:max-w-full">
          <div
            className="box-border h-fit w-fit rounded-full p-[1px] [background:_linear-gradient(45deg,_rgba(18,18,18,1)_16%,_rgba(255,255,255,0.18391106442577032)_38%,_rgba(32,197,254,1)_100%);]"
          >
            <div
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-darkGray p-5"
            >
              <img src="/assets/img/ai_icon.svg" alt="Inteligência Artificial" />
            </div>
          </div>
          <p className="text-lg font-semibold text-white">
            Inteligência Artificial
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center py-5">
        <div className="flex basis-[262px] items-center gap-5 sm:max-w-full">
          <div
            className="box-border h-fit w-fit rounded-full p-[1px] [background:_linear-gradient(45deg,_rgba(18,18,18,1)_16%,_rgba(255,255,255,0.18391106442577032)_38%,_rgba(32,197,254,1)_100%);]"
          >
            <div
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-darkGray p-5"
            >
              <img src="/assets/img/robot_1.svg" alt="Machine Learning" />
            </div>
          </div>
          <p className="text-lg font-semibold text-white">Machine Learning</p>
        </div>
      </div>
      <div className="flex w-full justify-center py-5">
        <div className="flex basis-[262px] items-center gap-5 sm:max-w-full">
          <div
            className="box-border h-fit w-fit rounded-full p-[1px] [background:_linear-gradient(45deg,_rgb(42_42_42)_15%,_rgb(255_255_255_/_0%)_30%,_rgba(32,197,254,1)_100%)]"
          >
            <div
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-darkGray p-5"
            >
              <img src="/assets/img/ds_icon.svg" alt="Ciência de Dados" />
            </div>
          </div>
          <p className="text-lg font-semibold text-white">Ciência de Dados</p>
        </div>
      </div>
    </section>
    <main
      className="relative flex flex-col items-center justify-center gap-[(min(6rem,_5vw))] bg-[url(/assets/img/presentation_bg_4k_2.png)] bg-cover bg-fixed bg-center px-[min(200px,_10vw)] py-16 before:absolute before:top-0 before:left-0 before:z-[0] before:h-full before:w-full before:bg-black/80 sm:flex-row"
    >
      <article className="z-[1] flex flex-col items-center gap-7">
        <h1
          className="text-center text-4xl font-semibold text-white drop-shadow-[1px_1px_20px_rgba(255,255,255,0.3)]"
        >
          Sobre nós
        </h1>
        <p
          className="max-w-[700px] text-justify indent-10 text-xl font-light leading-10 text-white"
        >
          Nós somos a TAIL, a Liga de Tecnologia e Inteligência Artificial, uma
          organização sem fins lucrativos dirigida por estudantes. Nosso caminho
          começou em 2020, durante a pandemia. Estamos localizados em João
          Pessoa - Paraíba, Brasil, e somos orientados pelo laboratório de
          Aplicações de Inteligência Artificial, ARIA - UFPB.
        </p>
        <button
          className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
        >
          Saiba mais
        </button>
      </article>
    </main>
    <section
      className="flex w-full flex-col [box-shadow:inset_0px_5px_20px_3px_rgba(0,0,0,0.55)] sm:flex-row sm:justify-between [&>div]:grow-[1] [&>div]:[transition:_background_0.2s_ease] sm:[&>div]:p-[min(3rem,_2.5vw)] [&>div:hover]:bg-lightGray/20"
    >
      <div className="flex w-full justify-center py-5">
        <div
          className="flex basis-[262px] flex-col items-center gap-5 sm:max-w-full"
        >
          <div
            className="box-border h-fit w-fit rounded-full p-[1px] [background:_linear-gradient(45deg,_rgba(18,18,18,1)_16%,_rgba(255,255,255,0.18391106442577032)_38%,_rgba(32,197,254,1)_100%);]"
          >
            <div
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-darkGray p-5"
            >
              <img src="/assets/img/award.svg" alt="Artificial Intelligence" />
            </div>
          </div>
          <p className="text-center text-lg font-light text-white">
            A TAIL é aberta para os estudantes da UFPB em geral, de qualquer
            curso.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center py-5">
        <div
          className="flex basis-[262px] flex-col items-center gap-5 sm:max-w-full"
        >
          <div
            className="box-border h-fit w-fit rounded-full p-[1px] [background:_linear-gradient(45deg,_rgba(18,18,18,1)_16%,_rgba(255,255,255,0.18391106442577032)_38%,_rgba(32,197,254,1)_100%);]"
          >
            <div
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-darkGray p-5"
            >
              <img src="/assets/img/monitor.svg" alt="Machine Learning" />
            </div>
          </div>
          <p className="text-center text-lg font-light text-white">
            Nós fazemos e encorajamos pesquisas e inovações em tecnologia.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center py-5">
        <div
          className="flex basis-[262px] flex-col items-center gap-5 sm:max-w-full"
        >
          <div
            className="box-border h-fit w-fit rounded-full p-[1px] [background:_linear-gradient(45deg,_rgb(42_42_42)_15%,_rgb(255_255_255_/_0%)_30%,_rgba(32,197,254,1)_100%)]"
          >
            <div
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-darkGray p-5"
            >
              <img src="/assets/img/codepen.svg" alt="Data Science" />
            </div>
          </div>
          <p className="text-center text-lg font-light text-white">
            Inteligência Artificial está presente em diversas áreas do
            conhecimento.
          </p>
        </div>
      </div>
    </section>
    <section className="flex flex-col items-center justify-center gap-7 bg-darkGray bg-cover bg-fixed bg-center px-[min(200px,_10vw)] py-16">
      <h1
        className="text-center text-4xl font-semibold text-white drop-shadow-[1px_1px_20px_rgba(255,255,255,0.3)]"
      >
        Diretorias
      </h1>
      <div
        className="flex w-full max-w-[1000px] snap-x snap-mandatory grid-flow-row grid-cols-3 place-items-center gap-5 overflow-auto sm:grid sm:gap-11"
      >
        <article
          className="flex h-[350px] min-w-[250px] max-w-[300px] snap-center flex-col items-center justify-between rounded-xl bg-[url(/assets/img/cards/nlp_card.webp)] bg-cover p-6 py-7 text-center text-white drop-shadow-lg sm:min-w-[200px]"
        >
          <h2 className="text-2xl font-medium">
            Processamento de Linguagem Natural
          </h2>
          <p>
            A diretoria de NLP é responsável por desenvolver projetos de
            processamento de linguagem natural.
          </p>
          <button
            className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
          >
            Explorar
          </button>
        </article>
        <article
          className="flex h-[350px] min-w-[250px] max-w-[300px] snap-center flex-col items-center justify-between rounded-xl bg-[url(/assets/img/cards/ml_card.webp)] bg-cover p-6 py-7 text-center text-white drop-shadow-lg sm:min-w-[200px]"
        >
          <h2 className="text-2xl font-medium">Machine Learning</h2>
          <p>
            A diretoria de Machine Learning é responsável por desenvolver
            projetos de machine learning.
          </p>
          <button
            className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
          >
            Explorar
          </button>
        </article>
        <article
          className="flex h-[350px] min-w-[250px] max-w-[300px] snap-center flex-col items-center justify-between rounded-xl bg-[url(/assets/img/cards/cv_card.webp)] bg-cover bg-center p-6 py-7 text-center text-white drop-shadow-lg sm:min-w-[200px]"
        >
          <h2 className="text-2xl font-medium">Visão Computacional</h2>
          <p>
            A diretoria de Visão Computacional é responsável por desenvolver
            projetos de visão computacional.
          </p>
          <button
            className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
          >
            Explorar
          </button>
        </article>
        <article
          className="flex h-[350px] min-w-[250px] max-w-[300px] snap-center flex-col items-center justify-between rounded-xl bg-[url(/assets/img/cards/trainees_card.webp)] bg-cover bg-center p-6 py-7 text-center text-white drop-shadow-lg sm:min-w-[200px]"
        >
          <h2 className="text-2xl font-medium">Trainees</h2>
          <p>
            A diretoria de Visão Computacional é responsável por desenvolver
            projetos de visão computacional.
          </p>
          <button
            className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
          >
            Explorar
          </button>
        </article>
        <article
          className="flex h-[350px] min-w-[250px] max-w-[300px] snap-center flex-col items-center justify-between rounded-xl bg-[url(/assets/img/cards/media_card.webp)] bg-cover bg-center p-6 py-7 text-center text-white drop-shadow-lg sm:min-w-[200px]"
        >
          <h2 className="text-2xl font-medium">Mídias</h2>
          <p>
            A diretoria de Visão Computacional é responsável por desenvolver
            projetos de visão computacional.
          </p>
          <button
            className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
          >
            Explorar
          </button>
        </article>
        <article
          className="flex h-[350px] min-w-[250px] max-w-[300px] snap-center flex-col items-center justify-between rounded-xl bg-[url(/assets/img/cards/academic_card.webp)] bg-cover bg-center p-6 py-7 text-center text-white drop-shadow-lg sm:min-w-[200px]"
        >
          <h2 className="text-2xl font-medium">Acadêmica</h2>
          <p>
            A diretoria de Visão Computacional é responsável por desenvolver
            projetos de visão computacional.
          </p>
          <button
            className="rounded-lg border-[1px] border-tailBlue bg-transparent px-5 py-3 text-sm text-tailBlue transition-all hover:bg-tailBlue hover:text-black"
          >
            Explorar
          </button>
        </article>
      </div>
    </section>
    </main>
  )
}
