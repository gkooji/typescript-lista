import type { Todo } from '../types/Todo';

interface TodoItemProps {
    tarefas: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ tarefas, onToggle, onDelete }: TodoItemProps) => {
    // Cores vibrantes com efeito "glow" (brilho) sutil para os Badges
    const prioridadeCor = {
        baixa: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
        media: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
        alta: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 shadow-[0_0_12px_rgba(217,70,239,0.15)]",
    };

    return (
        <div className="flex items-center justify-between p-4 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl gap-4 hover:border-white/10 hover:bg-slate-900/60 shadow-lg hover:shadow-xl transition-all duration-300 group">

            {/* Esquerda: Checkbox Customizado e Texto da Tarefa */}
            <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative flex items-center justify-center shrink-0">
                    <input
                        type="checkbox"
                        checked={tarefas.completado}
                        onChange={() => onToggle(tarefas.id)}
                        className="peer w-5 h-5 rounded-lg border-slate-700 bg-slate-800/80 text-violet-500 focus:ring-violet-500 focus:ring-offset-slate-900 cursor-pointer transition-all appearance-none border checked:bg-violet-500 checked:border-violet-500"
                    />
                    {/* Ícone de check vetorial (SVG) */}
                    <svg className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block" xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <span className={`text-sm md:text-base font-medium truncate transition-all duration-300 ${tarefas.completado
                        ? "text-slate-500 line-through decoration-slate-600/80 scale-[0.98]"
                        : "text-slate-100 group-hover:text-white"
                    }`}>
                    {tarefas.text}
                </span>
            </div>

            {/* Direita: Badge de Prioridade e Botão Excluir Bonito */}
            <div className="flex items-center gap-3 shrink-0">
                {/* Badge de Prioridade */}
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${prioridadeCor[tarefas.prioridade]}`}>
                    {tarefas.prioridade}
                </span>

                {/* BOTÃO EXCLUIR PREMIUM (Design de Ícone Minimalista com Glow Neon) */}
                <button
                    onClick={() => onDelete(tarefas.id)}
                    title="Excluir tarefa"
                    className="p-2 text-slate-400 hover:text-rose-400 bg-white/5 hover:bg-rose-500/10 rounded-xl border border-white/5 hover:border-rose-500/20 shadow-sm active:scale-90 transition-all duration-200 cursor-pointer flex items-center justify-center"
                >
                    {/* SVG do ícone de lixeira (substitui o texto "Excluir" feio) */}
                    <svg className="w-4 h-4" xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TodoItem;