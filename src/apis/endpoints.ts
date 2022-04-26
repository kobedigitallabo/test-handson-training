const envs = import.meta.env;

export default {
  hello: `${envs?.VITE_BASE_API}hello`
}
