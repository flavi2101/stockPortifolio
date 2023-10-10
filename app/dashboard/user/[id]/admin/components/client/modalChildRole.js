"use client";


export default function EditRole({role,setRole}) {
 
  

  return (
    <>
      <h2>Alterene o nivel de acesso desse usuario:</h2>
      <ul>
        <li>
          <strong>MENTORADO:</strong>
        </li>
        <span>Pode acessar todos os produtos disponíveis para mentorados</span>
        <li>
          <strong>MENTOR:</strong>
        </li>
        <span>
          Pode alterar o nivel de acesso de todos os usuarios, inserir analise,
          escreve blog
        </span>
        <li>
          <strong>VISITANTE:</strong>
        </li>
        <span>Tem acesso apenas a carteira de ativos própria.</span>
      </ul>

      <form>
        <input
          list="role"
          onChange={(e) => {
            setRole(e.target.value);
          
          }}
          placeholder="tipo de usuario"
          value={role}
        />
        <datalist id="role">
          <option value={"MENTORADO"} />
          <option value={"MENTOR"} />
          <option value={"VISITANTE"} />
        </datalist>
      </form>
    </>
  );
}
